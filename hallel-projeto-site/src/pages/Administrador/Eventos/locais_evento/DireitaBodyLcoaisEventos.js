import { ListRounded } from "@mui/icons-material";
import React from "react";
import TabelaLocaisEventos from "./TabelaLocaisEventos";
import { useEffect } from "react";

const DireitaBodyLocaisEventos = (props) => {


  return (
    <div className="direita_locais_eventos">
      <div className="header_direita_locais_eventos">
        <label>Lista de locais</label>
        <ListRounded/>
      </div>
      <TabelaLocaisEventos enviadoSucesso={props.enviadoSucesso} setIdLocalEvento={props.setIdLocalEvento} />
    </div>
  );
};

export default DireitaBodyLocaisEventos;
