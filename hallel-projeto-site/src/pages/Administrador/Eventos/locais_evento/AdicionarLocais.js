import React from "react";
import BodyLocaisEventos from "./BodyAdicionarLocais";
import "./adicionar_local.css";
import GuiaAdm from "../../../../components/GuiaAdm";

const LocaisEventos = () => {
  return (
    <GuiaAdm title={"Locais de Eventos"}>
      <div className="containerAdicionarLocais">
        <BodyLocaisEventos />
      </div>
    </GuiaAdm>
  );
};

export default LocaisEventos;
