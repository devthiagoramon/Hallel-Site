
import React from 'react';
import HeaderDoacoes from '../../../DoacoesHallel/HeaderDoacoes/index.js';
import FormVoluntario from './formVoluntario.js';

const FormularioVoluntario = ({ userVoluntario, setUserVoluntario }) => {
  return (
    <div>
      <HeaderDoacoes text={"Preencha as informações para ser um voluntário"} />
      <FormVoluntario userDoacao={userVoluntario} setUserDoacao={setUserVoluntario} />
    </div>
  );
};

export default FormularioVoluntario;
