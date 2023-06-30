import React from "react";
import BodyLocaisEventos from "./BodyAdicionarLocais";
import HeaderLocaisEventos from "./HeaderAdicionarLocais";
import "./adicionar_local.css";

const LocaisEventos = () => {
  return (
    <div className="containerAdicionarLocais">
      <HeaderLocaisEventos />
      <BodyLocaisEventos />
    </div>
  );
};

export default LocaisEventos;
