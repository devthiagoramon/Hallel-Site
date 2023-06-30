import React from "react";
import InputsBodyAdicionarLocais from "./InputsBodyAdicionarLocais";
import ContainerImagemAdicionarLocais from "./ContainerImagemAdicionarLocais";
import { useState } from "react";

const EsquerdaBodyLocaisEventos = () => {
  const [imagemLocal, setImagemLocal] = useState(null);
  return (
    <div className="esquerdaAdicionarLocais">
      <ContainerImagemAdicionarLocais
        imagemLocal={imagemLocal}
        setImagemLocal={setImagemLocal}
      />
      <InputsBodyAdicionarLocais />
    </div>
  );
};

export default EsquerdaBodyLocaisEventos;
