import React, { useState } from "react";
import "./doacoesHallel.css";
import FormularioDoador from "./FormularioDoador";
import SelecioneTipoDoacao from "./SelecioneTipoDoacao";
import PagamentoDoacao from "./PagamentoDoacao";
import DoacoesObjAlimentos from "./DoaçãoObjAlimentos";
import { getEmail, getNome } from "../../utils/utilLocalStorage";

const DoacoesHallel = () => {
  const [etapa, setEtapa] = useState(1);

  const userDoacaoTemplate = {
    nome: getNome() || '',
    email: getEmail() || '',
    numeroTelefone: '',
    dataNascimento: null,
  }
  
  const [userDoacao, setUserDoacao] = useState(userDoacaoTemplate);

  return (
    <div className="container-doacoes">
      {etapa === 1 && <FormularioDoador userDoacao={userDoacao} setUserDoacao={setUserDoacao} setEtapa={setEtapa} />}
      {etapa === 2 && <SelecioneTipoDoacao  setEtapa={setEtapa} etapa={etapa} />}
      {etapa === 2.2 && (
        <DoacoesObjAlimentos userDoacao={userDoacao} setEtapa={setEtapa} etapa={etapa} />
      )}
      {etapa === 3 && <PagamentoDoacao userDoacao={userDoacao} setEtapa={setEtapa} />}
    </div>
  );
};

export default DoacoesHallel;
