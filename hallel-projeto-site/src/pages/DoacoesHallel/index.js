import React, { useState } from "react";
import "./doacoesHallel.css";
import FormularioDoador from "./FormularioDoador";
import SelecioneTipoDoacao from "./SelecioneTipoDoacao";
import PagamentoDoacao from "./PagamentoDoacao";
import DoacoesObjAlimentos from "./DoaçãoObjAlimentos";

const DoacoesHallel = () => {
  const [etapa, setEtapa] = useState(1);

  return (
    <div className="container-doacoes">
      {etapa === 1 && <FormularioDoador setEtapa={setEtapa} />}
      {etapa === 2 && <SelecioneTipoDoacao setEtapa={setEtapa} etapa={etapa} /> }
      {etapa === 2.2 && <DoacoesObjAlimentos setEtapa={setEtapa} etapa={etapa} /> }
      {etapa === 3 && <PagamentoDoacao setEtapa={setEtapa} />}
    </div>
  );
};

export default DoacoesHallel;
