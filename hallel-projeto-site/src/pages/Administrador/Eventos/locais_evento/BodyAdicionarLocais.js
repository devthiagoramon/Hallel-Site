import React from "react";
import EsquerdaBodyLocaisEventos from "./EsquerdaBodyAdicionarLocais";
import DireitaBodyLocaisEventos from "./DireitaBodyLcoaisEventos";
import { useState } from "react";
import ModalEditLocalEvento from "./ModalEditLocalEvento";
import { useEffect } from "react";

const BodyLocaisEventos = () => {

  const [enviadoSucesso, setEnviadoSucesso] = useState(false);
  const [idLocalEvento, setIdLocalEvento] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bodyAdicionarLocais">
      <EsquerdaBodyLocaisEventos enviadoSucesso={enviadoSucesso} setEnviadoSucesso={setEnviadoSucesso} />
      <DireitaBodyLocaisEventos enviadoSucesso={enviadoSucesso} setIdLocalEvento={setIdLocalEvento} />
      <ModalEditLocalEvento idLocalEvento={idLocalEvento} setIdLocalEvento={setIdLocalEvento} setEnviadoSucesso={setEnviadoSucesso} enviadoSucesso={enviadoSucesso} openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default BodyLocaisEventos;
