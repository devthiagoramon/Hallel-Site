import { ListRounded } from "@mui/icons-material";
import React from "react";
import TabelaLocaisEventos from "./TabelaLocaisEventos";

const DireitaBodyLocaisEventos = () => {
  return (
    <div className="direita_locais_eventos">
      <div className="header_direita_locais_eventos">
        <label>Lista de locais</label>
        <ListRounded/>
      </div>
      <TabelaLocaisEventos/>
    </div>
  );
};

export default DireitaBodyLocaisEventos;
