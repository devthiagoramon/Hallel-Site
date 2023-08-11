import React from "react";
import "./virar_associado.css";
import VirarAssociadoP1 from "./VirarAssociadoP1";
import { useState } from "react";
import VirarAssociadoP2 from "./VirarAssociadoP2";
import VirarAssociadoP3 from "./VirarAssociadoP3";
import dayjs from "dayjs";

const VirarAssociado = () => {
  const [indexParte, setIndexParte] = useState(0);
  const associadoModel = {
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    dataNascimento: dayjs(),
    num_cartao: "",
    data_validade_cartao: dayjs(),
    cvc_cartao: 0,
    nome_titular_cartao: "",
    endereco_cartao: "",
  };
  const [novoAssociado, setNovoAssociado] = useState(associadoModel);
  return (
    <div className="container_principal_VA">
      {indexParte === 0 && (
        <VirarAssociadoP1
          setIndexParte={setIndexParte}
          novoAssociado={novoAssociado}
          setNovoAssociado={setNovoAssociado}
        />
      )}
      {indexParte === 1 && (
        <VirarAssociadoP2
          setIndexParte={setIndexParte}
          novoAssociado={novoAssociado}
          setNovoAssociado={setNovoAssociado}
        />
      )}
      {indexParte === 2 && (
        <VirarAssociadoP3
          setIndexParte={setIndexParte}
          novoAssociado={novoAssociado}
          setNovoAssociado={setNovoAssociado}
        />
      )}
    </div>
  );
};

export default VirarAssociado;
