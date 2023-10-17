import {
  AddRounded,
  DoneRounded,
  Edit,
  ErrorRounded,
} from "@mui/icons-material";
import { Textarea } from "@mui/joy";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { despesaEditarByEventoAndIdDespesa } from "../../../../api/uris/EventosURLS";
import {eventoEditarDespesaPorIdEIdEventoService} from "../../../../service/EventoService";

const ModalEditDespesaEvento = (props) => {
  const {
    changedTabela,
    setChangedTabela,
    idEvento,
    despesaSelected,
    openModal,
    setOpenModal,
    setEditarPopUp,
    setOpenPopUp,
    setDespesaSelected,
  } = props;

  function num_tipoDespesa_despesaSelected() {
    switch (despesaSelected.tipoDespesa) {
      case "DINHEIRO":
        return 1;
      case "ALIMENTO":
        return 2;
      case "LIMPEZA":
        return 3;
      case "ACESSORIOS":
        return 4;
      case "ROUPAS":
        return 5;
      default:
        return 0;
    }
  }

  const [despesaEvento, setDespesaEvento] = useState(null);

  useEffect(() => {
    if (despesaSelected !== null) {
      setDespesaEvento({
        nome: despesaSelected.nome,
        descricao: despesaSelected.descricao,
        num_tipoDespesa: num_tipoDespesa_despesaSelected(),
        valor: despesaSelected.valor,
        quantidade: despesaSelected.quantidade,
      });
    }
  }, [despesaSelected]);

  const [enviando, setEnviando] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
    setDespesaSelected(null);
  };

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

  const editarDespesaEvento = () => {
    setEnviando(true);
    eventoEditarDespesaPorIdEIdEventoService(idEvento, despesaSelected.id).then((response) => {
      if (response) {
        setEditarPopUp(true);
        setOpenModal(false);
        setOpenPopUp(true);
        setEnviando(false);
        setChangedTabela(changedTabela);
      } else {
        setEditarPopUp(false);
        setOpenPopUp(true);
        setEnviando(false);
      }
    });
  };

  const handleChangeSelect = (e) => {
    setDespesaEvento((prevState) => {
      return { ...prevState, num_tipoDespesa: e.target.value };
    });
  };

  return (
    <>
      {despesaEvento !== null && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={styleInnerModal}>
            <div className="head_edit_despesas_evento">
              <label>Editando Despesas</label>
            </div>
            <div className="container_inputs_edit_despesas_evento">
              <div className="inputs_edit_despesas_evento">
                <label>
                  Nome da despesa <span className="obrigatorio">*</span>
                </label>
                <TextField
                  size="small"
                  value={despesaEvento.nome}
                  onChange={(e) => {
                    setDespesaEvento((prevState) => {
                      return { ...prevState, nome: e.target.value };
                    });
                  }}
                />
                <label>
                  Descrição <span className="obrigatorio">*</span>
                </label>
                <Textarea
                  variant="outlined"
                  sx={{ background: "none" }}
                  value={despesaEvento.descricao}
                  maxRows={5}
                  onChange={(e) => {
                    setDespesaEvento((prevState) => {
                      return { ...prevState, descricao: e.target.value };
                    });
                  }}
                />
                <label>
                  Tipo da despesa <span className="obrigatorio">*</span>
                </label>
                <Select
                  size="small"
                  defaultValue={despesaEvento.num_tipoDespesa}
                  value={despesaEvento.num_tipoDespesa}
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={1}>Dinheiro</MenuItem>
                  <MenuItem value={2}>Alimento</MenuItem>
                  <MenuItem value={3}>Limpeza</MenuItem>
                  <MenuItem value={4}>Acessório</MenuItem>
                  <MenuItem value={5}>Roupas</MenuItem>
                </Select>
                {despesaEvento.num_tipoDespesa !== "" && (
                  <>
                    {despesaEvento.num_tipoDespesa !== 1 ? (
                      <>
                        <label>Quantidade</label>
                        <TextField
                          value={despesaEvento.quantidade}
                          onChange={(e) => {
                            setDespesaEvento((prevState) => {
                              return {
                                ...prevState,
                                quantidade: e.target.value,
                              };
                            });
                          }}
                          type="number"
                          size="small"
                          sx={{ maxWidth: "30%" }}
                        />
                      </>
                    ) : (
                      <>
                        <label>Valor</label>
                        <TextField
                          value={despesaEvento.valor}
                          onChange={(e) => {
                            setDespesaEvento((prevState) => {
                              return { ...prevState, valor: e.target.value };
                            });
                          }}
                          size="small"
                          type="number"
                          sx={{ maxWidth: "30%" }}
                        />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="container_btn_edit_despesas_evento">
              <>
                {enviando === false ? (
                  <Button
                    variant="contained"
                    endIcon={<Edit />}
                    onClick={editarDespesaEvento}
                  >
                    Adicionar
                  </Button>
                ) : (
                  <Button variant="contained">
                    Enviando <CircularProgress sx={{ color: "#FAF4F4" }} />
                  </Button>
                )}
              </>
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ModalEditDespesaEvento;
