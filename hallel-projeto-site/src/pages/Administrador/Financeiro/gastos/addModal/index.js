import React, { useState } from "react";
import "./modalAddDespesa.css";
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import {
  AddRounded,
  ListRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Textarea } from "@mui/joy";
import ModalCodigoAdicionar from "./ModalCodigoAdicionar";
import MenuCodigosSaida from "./MenuCodigosSaida";
import axios from "axios";
import { MuiFileInput } from "mui-file-input";
import ModalMostrarImagemSaida from "./ModalMostrarImagemSaida";
import { gastosCriarAPI } from "../../../../../api/uris/FinanceiroURLS";

const ModalAddDespesa = (props) => {
  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  const [saida, setSaida] = useState({
    codigo: null,
    descricaoGasto: "",
    finalidadeGasto: "",
    valor: 0.0,
    usuarioGasto: "",
    imagemAnexo: "",
  });

  const [dataGasto, setdataGasto] = useState();

  const [openAdicionarCodigo, setOpenAdicionarCodigo] = useState(false);
  const [anchorMenu, setanchorMenu] = useState(null);
  const [openModalAnexoSaida, setopenModalAnexoSaida] = useState(false);

  function alterarData(data) {
    let dataTemp = data;
    let anoTemp = dataTemp.substring(0, 4);
    let mesTemp = dataTemp.substring(5, 7);
    let diaTemp = dataTemp.substring(8);
    dataTemp = diaTemp + "/" + mesTemp + "/" + anoTemp;
    return dataTemp;
  }

  const handleCloseAddDespesas = () => {
    props.setopenModalAddDespesas(false);
  };

  const handleOpenMenuCodigos = (e) => {
    setanchorMenu(e.currentTarget);
  };

  function addSaida() {
    let url = gastosCriarAPI();
    axios
      .post(
        url,
        { ...saida, dataGasto: alterarData(String(dataGasto)) },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        props.setopenModalAddDespesas(false);
        props.setAlterou(!props.alterou);
      });
  }

  const onImageSelectedMui = (e) => {
    const file = e;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        setSaida((prev) => {
          return { ...prev, imagemAnexo: dataURL };
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleOpenModalMostrarImagem = () => {
    setopenModalAnexoSaida(true);
  };

  return (
    <>
      <Modal open={props.openModalAddDespesas} onClose={handleCloseAddDespesas}>
        <Box sx={styleInnerModal}>
          <div className="container_add_saidas">
            <div className="header_add_saidas">
              <label>Adicionar Saida</label>
            </div>
            <div className="container_inputs_add_saidas">
              <div className="inputs_add_saidas">
                <div className="add_codigo_texto_saidas">
                  <label>Código</label>
                  <IconButton
                    onClick={handleOpenMenuCodigos}
                    sx={{ color: "#252525" }}
                  >
                    <ListRounded />
                  </IconButton>
                  <IconButton
                    sx={{ color: "#252525" }}
                    onClick={() => setOpenAdicionarCodigo(true)}
                  >
                    <AddRounded />
                  </IconButton>
                </div>

                {saida.codigo !== null && (
                  <label>
                    Número: {saida.codigo.numCodigo}
                    <br />
                    Nome: {saida.codigo.nomeCodigo}
                  </label>
                )}

                <label>Descrição</label>
                <Textarea
                  onChange={(e) => {
                    setSaida((prev) => {
                      return { ...prev, descricaoGasto: e.target.value };
                    });
                  }}
                  value={saida.descricaoGasto}
                  sx={{ background: "none" }}
                ></Textarea>
                <label>Para</label>
                <TextField
                  onChange={(e) => {
                    setSaida((prev) => {
                      return { ...prev, finalidadeGasto: e.target.value };
                    });
                  }}
                  value={saida.finalidadeGasto}
                  size="small"
                />
                <div className="inner_inputs_add_saidas_grid">
                  <label>Valor</label>
                  <label>Data</label>
                  <TextField
                    size="small"
                    type="number"
                    onChange={(e) => {
                      setSaida((prev) => {
                        return { ...prev, valor: e.target.value };
                      });
                    }}
                    value={saida.valor}
                  />
                  <TextField
                    size="small"
                    id="dataAddDespesa"
                    type="date"
                    className="dataDespesa"
                    onChange={(e) => {
                      setdataGasto(e.target.value);
                    }}
                    value={dataGasto}
                  />
                </div>
                <label>Feito por</label>
                <TextField
                  size="small"
                  onChange={(e) => {
                    setSaida((prev) => {
                      return { ...prev, usuarioGasto: e.target.value };
                    });
                  }}
                />
                <label>Comprovante</label>
                <div className="container_comprovante_add_saida">
                  {saida.imagemAnexo !== "" ? (
                    <IconButton onClick={handleOpenModalMostrarImagem}>
                      <VisibilityRounded />
                    </IconButton>
                  ) : (
                    ""
                  )}
                  <MuiFileInput size="small" onChange={onImageSelectedMui} />
                </div>
              </div>
            </div>
            <div className="container_btn_add_saidas">
              <Button variant="contained" onClick={addSaida}>
                Adicionar Saida
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <ModalCodigoAdicionar
        openAdicionarCodigo={openAdicionarCodigo}
        setOpenAdicionarCodigo={setOpenAdicionarCodigo}
      />
      <MenuCodigosSaida
        anchorMenu={anchorMenu}
        setanchorMenu={setanchorMenu}
        setSaida={setSaida}
      />
      <ModalMostrarImagemSaida
        imagemAnexoSrc={saida.imagemAnexo}
        openModalAnexoSaida={openModalAnexoSaida}
        setOpenModalAnexoSaida={setopenModalAnexoSaida}
      />
    </>
  );
};

export default ModalAddDespesa;
