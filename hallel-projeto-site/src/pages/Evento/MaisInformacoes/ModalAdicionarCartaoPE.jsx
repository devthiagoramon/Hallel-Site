import { Box, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import InputHallel from "../../../components/InputHallel/InputHallel";
import { DatePicker } from "@mui/x-date-pickers";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";
import dayjs from "dayjs";

const ModalAdicionarCartaoPE = ({ open, setOpen, usuario, setUsuario }) => {
  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    maxHeight: 700,
    overflowY: "auto",
    p: 4,
  };

  const [cartaoCredito, setCartaoCredito] = useState({
    nomeTitular: "",
    cvc: "",
    dataValidadeCartao: null,
    endereco: "",
    numeroCartao: "",
  });

  const handleChangeInputs = (e) => {
    setCartaoCredito((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [errorsInputs, setErrorsInputs] = useState({
    nomeTitular: false,
    cvc: false,
    dataValidade: false,
    endereco: false,
    numero: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  function verifyInputs() {
    let hasError = false;
    if (cartaoCredito.nomeTitular !== "") {
      setErrorsInputs((prev) => {
        return { ...prev, nomeTitular: false };
      });
    } else {
      setErrorsInputs((prev) => {
        return { ...prev, nomeTitular: true };
      });
      hasError = true;
    }
    if (cartaoCredito.cvc.length === 3) {
      setErrorsInputs((prev) => {
        return { ...prev, cvc: false };
      });
    } else {
      setErrorsInputs((prev) => {
        return { ...prev, cvc: true };
      });
      hasError = true;
    }
    if (dayjs(cartaoCredito.dataValidadeCartao).isAfter(dayjs())) {
      setErrorsInputs((prev) => {
        return { ...prev, dataValidade: false };
      });
    } else {
      setErrorsInputs((prev) => {
        return { ...prev, dataValidade: true };
      });
      hasError = true;
    }
    if (cartaoCredito.endereco !== "") {
      setErrorsInputs((prev) => {
        return { ...prev, endereco: false };
      });
    } else {
      setErrorsInputs((prev) => {
        return { ...prev, endereco: true };
      });
      hasError = true;
    }
    if (cartaoCredito.numeroCartao !== "") {
      setErrorsInputs((prev) => {
        return { ...prev, numero: false };
      });
    } else {
      setErrorsInputs((prev) => {
        return { ...prev, numero: true };
      });
      hasError = true;
    }
    return hasError;
  }

  const handleAdicionarCartao = () => {
    let hasError = false;

    hasError = verifyInputs();
    console.log(cartaoCredito)
    if (!hasError) {
      setUsuario((prev) => {
        return { ...prev, cartaoCredito: {...cartaoCredito} };
      }); 
      setCartaoCredito({
        nomeTitular: "",
        cvc: "",
        dataValidadeCartao: null,
        endereco: "",
        numeroCartao: "",
      });
      setOpen(false);
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styleInnerModal}>
        <div className="cont_modal_adicionar_cartao_pe">
          <div className="header_modal_adicionar_cartao_pe">
            <h4>Adicionar Cartão</h4>
          </div>
          <div className="body_modal_adicionar_cartao_pe">
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
              Numero do cartão
            </label>
            {errorsInputs.numero ? (
              <InputHallel
                name="numeroCartao"
                onChange={handleChangeInputs}
                error
              />
            ) : (
              <InputHallel name="numeroCartao" onChange={handleChangeInputs} />
            )}
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
              Nome do titular
            </label>
            {errorsInputs.nomeTitular ? (
              <InputHallel
                name="nomeTitular"
                onChange={handleChangeInputs}
                error
              />
            ) : (
              <InputHallel
                name="nomeTitular"
                onChange={handleChangeInputs}
              />
            )}
            <div className="inputs2_modal_adicionar_cartao_pe">
              <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                Data de Validade
              </label>
              <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                CVC
              </label>
              {errorsInputs.dataValidade ? (
                <DatePicker
                  className="input_error_VA"
                  views={["year", "month"]}
                  id="data_validade_associado"
                  format="MM/YY"
                  sx={{ width: "60%", height: "50px", padding: 0 }}
                  name="dataValidadeCartao"
                  onChange={(e) => {
                    setCartaoCredito((prev) => {
                      return { ...prev, dataValidadeCartao: e}
                    })
                  }}
                />
              ) : (
                <DatePicker
                  className="input_VA"
                  views={["year", "month"]}
                  id="data_validade_associado"
                  format="MM/YY"
                  sx={{ width: "60%", height: "50px", padding: 0 }}
                  name="dataValidadeCartao"
                  onChange={(e) => {
                    setCartaoCredito((prev) => {
                      return { ...prev, dataValidadeCartao: e}
                    })
                  }}
                />
              )}
              {errorsInputs.cvc ? (
                <InputHallel
                  name="cvc"
                  onChange={handleChangeInputs}
                  error
                />
              ) : (
                <InputHallel name="cvc" onChange={handleChangeInputs} />
              )}
            </div>
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
              Endereço
            </label>
            {errorsInputs.endereco ? (
              <InputHallel
                name="endereco"
                onChange={handleChangeInputs}
                error
              />
            ) : (
              <InputHallel
                name="endereco"
                onChange={handleChangeInputs}
              />
            )}
          </div>
          <div className="footer_modal_adicionar_cartao_pe">
            <BtnHallel
              secundario
              onClick={() => {
                setOpen(false);
              }}
            >
              Voltar
            </BtnHallel>
            <BtnHallel sucesso onClick={handleAdicionarCartao}>
              Adicionar Cartão
            </BtnHallel>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAdicionarCartaoPE;
