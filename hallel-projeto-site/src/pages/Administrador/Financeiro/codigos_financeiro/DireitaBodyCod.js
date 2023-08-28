import { TextareaAutosize } from "@mui/base";
import { Add, AddCircleRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const DireitaBodyCodFinanceiro = () => {
  return (
    <div className="direita_body_cf">
      <div className="header_direita_cf">
        <h3>Adicionar código</h3>
        <AddCircleRounded sx={{ width: "30px", height: "30px", color: "" }}/>
      </div>
      <div className="body_direita_cf">
        <label>Número do código</label>
        <input id="numero_codigo" type="text" className="input_cod" />

        <label>Descrição do código</label>
        <TextareaAutosize
          id="nome_codigo"
          style={{ resize: "none" }}
          className="input_cod"
        />
      </div>
      <div className="footer_direita_cf">
        <Button sx={{backgroundColor: purple[700]}} variant="contained">Adicionar</Button>
      </div>
    </div>
  );
};

export default DireitaBodyCodFinanceiro;
