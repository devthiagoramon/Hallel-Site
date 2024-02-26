import React, { useState } from "react";
import "./indexMain.css";
import FormVoluntario from "./Form/index.js";
import { getEmail, getNome } from "../../../utils/utilLocalStorage.js";

const MainFormVoluntario = () => {
  

  const userDoacaoTemplate = {
    nome: getNome() || '',
    email: getEmail() || '',
    numeroTelefone: '',
    dataNascimento: null,
  }
  
  const [userDoacao, setUserDoacao] = useState(userDoacaoTemplate);

  return (
    <div className="container-doacoes">
       <FormVoluntario userDoacao={userDoacao} setUserDoacao={setUserDoacao} />
      
    </div>
  );
};

export default MainFormVoluntario;
