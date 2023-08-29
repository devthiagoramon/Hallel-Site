import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, Tooltip } from "@mui/material";
import dayjs from "dayjs";

const PagOutroAssociadoP2 = ({
  setParte,
  presentarAssoc,
  setPresentarAssoc,
}) => {
  const [numCartaoError, setnumCartaoError] = useState(false);
  const [dataValidadeCartaoError, setdataValidadeCartaoError] = useState(false);
  const [cvcCartaoError, setCvcCartaoError] = useState(false);
  const [nomeTitularCartaoError, setNomeTitularCartaoError] = useState(false);
  const [enderecoCartaoError, setEnderecoCartaoError] = useState(false);

  const verificarDados = () => {
    let hasError = false;
    if (presentarAssoc.num_cartao === "") {
      setnumCartaoError(true);
      hasError = true;
    } else {
      setnumCartaoError(false);
    }
    if (
      dayjs(presentarAssoc.dataValidadeCartao).format("DD/MM/YYYY") ===
      dayjs().format("DD/MM/YYYY")
    ) {
      setdataValidadeCartaoError(true);
      hasError = true;
    } else {
      setdataValidadeCartaoError(false);
    }
    if (presentarAssoc.cvcCartao === 0) {
      setCvcCartaoError(true);
      hasError = true;
    } else {
      setCvcCartaoError(false);
    }
    if (presentarAssoc.nomeTitularCartao === "") {
      setNomeTitularCartaoError(true);
      hasError = true;
    } else {
      setNomeTitularCartaoError(false);
    }
    if (presentarAssoc.enderecoCartao === "") {
      setEnderecoCartaoError(true);
      hasError = true;
    } else {
      setEnderecoCartaoError(false);
    }
    if (!hasError) {
      setParte(2);
    }
  };

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -50 }}
      transition={{ type: "spring" }}
      className="cont_second_part_VA"
    >
      <div className="header_cont_principal_VA">
        <h1>Presentear associação</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Pagamento</h3>
        <CreditCard sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="input_bodys_VA">
          <label>Número do Cartão</label>
          {numCartaoError ? (
            <input
              id="num_cartao_associado"
              type="text"
              value={presentarAssoc.numCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, numCartao: e.target.value };
                });
              }}
              className="input_error_VA"
            />
          ) : (
            <input
              id="num_cartao_associado"
              type="text"
              value={presentarAssoc.num_cartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, numCartao: e.target.value };
                });
              }}
              className="input_VA"
            />
          )}
        </div>
        <div className="input_bodys2_VA">
          <label>Data de Validade</label>
          <label>CVC</label>
          {dataValidadeCartaoError ? (
            <DatePicker
              className="input_error_VA"
              views={["year", "month"]}
              id="data_validade_associado"
              format="MM/YY"
              sx={{ width: "60%", height: "50px", padding: 0 }}
              value={presentarAssoc.dataValidadeCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, dataValidadeCartao: e.toDate() };
                });
              }}
            />
          ) : (
            <DatePicker
              className="input_VA"
              views={["year", "month"]}
              id="data_validade_associado"
              format="MM/YY"
              sx={{ width: "60%", height: "50px", padding: 0 }}
              value={presentarAssoc.dataValidadeCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, dataValidadeCartao: e.toDate() };
                });
              }}
            />
          )}
          {cvcCartaoError ? (
            <Tooltip title="Código de Segurança">
              <input
                id="cvc_associado"
                type="number"
                style={{ width: "90%" }}
                value={presentarAssoc.cvcCartao}
                onChange={(e) => {
                  setPresentarAssoc((prev) => {
                    return { ...prev, cvcCartao: e.target.value };
                  });
                }}
                className="input_error_VA"
              />
            </Tooltip>
          ) : (
            <Tooltip title="Código de Segurança">
              <input
                id="cvc_associado"
                type="number"
                style={{ width: "90%" }}
                value={presentarAssoc.cvcCartao}
                onChange={(e) => {
                  setPresentarAssoc((prev) => {
                    return { ...prev, cvcCartao: e.target.value };
                  });
                }}
                className="input_VA"
              />
            </Tooltip>
          )}
        </div>
        <div className="input_bodys_VA">
          <label>Nome do Titular</label>
          {nomeTitularCartaoError ? (
            <input
              className="input_error_VA"
              id="nome_titular_associado"
              type="text"
              value={presentarAssoc.nomeTitularCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, nomeTitularCartao: e.target.value };
                });
              }}
            />
          ) : (
            <input
              id="nome_titular_associado"
              type="text"
              className="input_VA"
              value={presentarAssoc.nomeTitularCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, nomeTitularCartao: e.target.value };
                });
              }}
            />
          )}
        </div>
        <div className="input_bodys_VA">
          <label>Endereço</label>
          {enderecoCartaoError ? (
            <input
              id="endereco_cartao_associado"
              type="text"
              value={presentarAssoc.enderecoCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, enderecoCartao: e.target.value };
                });
              }}
              className="input_error_VA"
            />
          ) : (
            <input
              id="endereco_cartao_associado"
              type="text"
              value={presentarAssoc.enderecoCartao}
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, enderecoCartao: e.target.value };
                });
              }}
              className="input_VA"
            />
          )}
        </div>
      </div>
      <div className="footer_parts_VA">
        <Button
          onClick={() => {
            setParte(0);
          }}
          className="btn_virar_associado_voltar"
          variant="contained"
        >
          Voltar
        </Button>
        <Button onClick={verificarDados} variant="contained">
          Próximo
        </Button>
      </div>
    </motion.div>
  );
};

export default PagOutroAssociadoP2;
