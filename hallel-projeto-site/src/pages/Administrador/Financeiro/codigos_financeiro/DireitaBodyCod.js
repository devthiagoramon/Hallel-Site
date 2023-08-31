import { TextareaAutosize } from "@mui/base";
import { Add, AddCircleRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import React from "react";
import { useState } from "react";
import {
  codigoEntradaCriarAPI,
  codigoSaidaCriarAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";

const DireitaBodyCodFinanceiro = ({ entradaSelecionada, saidaSelecionada }) => {
  const codigoTemplate = {
    numeroCodigo: 0.0,
    nomeCodigo: "",
  };

  const [codigoEnviar, setCodigoEnviar] = useState(codigoTemplate);
  const [errorNumero, setErrorNumero] = useState(false);
  const [errorNome, setErrorNome] = useState(false);
  const [errorRequest, seterrorRequest] = useState(false);

  const handleAdicionarCodigo = () => {
    let hasError = false;
    if (codigoEnviar.nomeCodigo === "") {
      setErrorNome(true);
      hasError = true;
    }else{
      setErrorNome(false);
    }
    if (codigoEnviar.numeroCodigo <= 0) {
      setErrorNumero(true);
      hasError = true;
    }else{
      setErrorNumero(false);
    }

    
    if (!hasError) {
      let url = "";
      if (entradaSelecionada) {
        url = codigoEntradaCriarAPI();
      } else if (saidaSelecionada) {
        url = codigoSaidaCriarAPI();
      }

      axios.post(
        url,
        {
          ...codigoEnviar,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      ).then(() => {
        setCodigoEnviar(codigoTemplate)
      }).catch((error) => {
        seterrorRequest(true);
      });
    }
  };

  return (
    <div className="direita_body_cf">
      <div className="header_direita_cf">
        <h3>Adicionar código</h3>
        <AddCircleRounded sx={{ width: "30px", height: "30px", color: "" }} />
      </div>
      <div className="body_direita_cf">
        <label>Número do código</label>
        {errorNumero ? (
          <>
            <input
              id="numero_codigo"
              type="number"
              className="input_error_cod shake_animation"
              value={codigoEnviar.numeroCodigo}
              onChange={(e) => {
                setCodigoEnviar((prev) => {
                  return { ...prev, numeroCodigo: parseFloat(e.target.value) };
                });
              }}
            />
            <Typography variant="caption" color={red[700]}>
              Número menor ou igual a 0
            </Typography>
          </>
        ) : (
          <input
            id="numero_codigo"
            type="number"
            className="input_cod"
            value={codigoEnviar.numeroCodigo}
            onChange={(e) => {
              setCodigoEnviar((prev) => {
                return { ...prev, numeroCodigo: e.target.value };
              });
            }}
          />
        )}
        <label>Descrição do código</label>
        {errorNome ? (
          <>
            <TextareaAutosize
              id="nome_codigo"
              style={{
                resize: "none",
              }}
              className="input_error_cod shake_animation"
              value={codigoEnviar.nomeCodigo}
              onChange={(e) => {
                setCodigoEnviar((prev) => {
                  return { ...prev, nomeCodigo: e.target.value };
                });
              }}
            />
            <Typography variant="caption" color={red[700]}>
              Digite uma descrição para o seu código
            </Typography>
          </>
        ) : (
          <TextareaAutosize
            id="nome_codigo"
            style={{ resize: "none" }}
            className="input_cod"
            value={codigoEnviar.nomeCodigo}
            onChange={(e) => {
              setCodigoEnviar((prev) => {
                return { ...prev, nomeCodigo: e.target.value };
              });
            }}
          />
        )}
      </div>
      <div className="footer_direita_cf">
        {errorRequest ? (
          <>
            <Button
              sx={{
                backgroundColor: purple[700],
              }}
              onClick={handleAdicionarCodigo}
              variant="contained"
              className="shake_animation"
            >
              Adicionar
            </Button>
            <Typography variant="caption" color={red[700]}>
              Error adicionando o código
            </Typography>
          </>
        ) : (
          <Button
            sx={{ backgroundColor: purple[700] }}
            onClick={handleAdicionarCodigo}
            variant="contained"
          >
            Adicionar
          </Button>
        )}
      </div>
    </div>
  );
};

export default DireitaBodyCodFinanceiro;
