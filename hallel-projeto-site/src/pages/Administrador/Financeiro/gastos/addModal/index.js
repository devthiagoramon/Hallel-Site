import React, { useState } from "react";
import "./modalAddDespesa.css";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { AddRounded, ListRounded } from "@mui/icons-material";
import { Textarea } from "@mui/joy";

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
    codigo: "",
    descricaoDespesa: "",
    para: "",
    valor: 0.0,
    dataDespesa: "",
    feitoPor: "",
  });

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

  function addDespesa() {
    let url = "http://localhost:8080/api/financeiro/gasto/criar";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({}),
    })
      .then(() => {
        window.location.href =
          "http://localhost:3000/administrador/painelFinanceiro/gastos";
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
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
                <IconButton>
                  <ListRounded />
                </IconButton>
                <IconButton>
                  <AddRounded />
                </IconButton>
              </div>

              {saida.codigo !== "" && <label>{saida.codigo}</label>}

              <label>Descrição</label>
              <Textarea
                onChange={(e) => {
                  setSaida((prev) => {
                    return { ...prev, descricaoDespesa: e.target.value };
                  });
                }}
                value={saida.descricaoDespesa}
                sx={{ background: "none" }}
              ></Textarea>
              <label>Para</label>
              <TextField
                onChange={(e) => {
                  setSaida((prev) => {
                    return { ...prev, para: e.target.value };
                  });
                }}
                value={saida.para}
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
                    setSaida((prev) => {
                      return { ...prev, dataDespesa: e.target.value };
                    });
                  }}
                  value={saida.dataDespesa.toLocaleString("pt-BR")}
                />
              </div>
              <label>Feito por</label>
              <TextField
                size="small"
                onChange={(e) => {
                  setSaida((prev) => {
                    return { ...prev, feitoPor: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="container_btn_add_saidas">
            <Button variant="contained">Adicionar Saida</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAddDespesa;
