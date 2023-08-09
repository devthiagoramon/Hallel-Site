import React from "react";
import "./virar_associado.css";
import VirarAssociadoP1 from "./VirarAssociadoP1";
import { useState } from "react";
import VirarAssociadoP2 from "./VirarAssociadoP2";

const VirarAssociado = () => {
  const [indexParte, setIndexParte] = useState(0);
  return <div className="container_principal_VA">
    {indexParte === 0 &&
        <VirarAssociadoP1 setIndexParte={setIndexParte}/>
    }
    {indexParte === 1 &&
        <VirarAssociadoP2/>
    }

  </div>;
};

export default VirarAssociado;
