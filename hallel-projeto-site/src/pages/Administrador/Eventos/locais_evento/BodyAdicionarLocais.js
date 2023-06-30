import React from "react";
import EsquerdaBodyLocaisEventos from "./EsquerdaBodyAdicionarLocais";
import DireitaBodyLocaisEventos from "./DireitaBodyLcoaisEventos";

const BodyLocaisEventos = () => {
  return (
    <div className="bodyAdicionarLocais">
      <EsquerdaBodyLocaisEventos />
      <DireitaBodyLocaisEventos />
    </div>
  );
};

export default BodyLocaisEventos;
