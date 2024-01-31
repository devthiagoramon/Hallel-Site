import React, { useState } from "react";
import "./pagar_outro_associado.css";
import PagOutroAssociadoP1 from "./PagOutroAssociadoP1";
import PagOutroAssociadoP2 from "./PagOutroAssociadoP2";
import dayjs from "dayjs";
import PagOutroAssociadoP3 from "./PagOutroAssociadoP3";

const PagarOutroAssociado = () => {
  const [parte, setParte] = useState(0);

  const presentearAssocModel = {
    email: "",
    numCartao: "",
    dataValidadeCartao: dayjs(),
    cvcCartao: 0,
    nomeTitularCartao: "",
    enderecoCartao: "",
  };

  const [presentearAssoc, setPresentarAssoc] = useState(presentearAssocModel);

  return (
    <div className="container_pag_outro_associado">
      {parte === 0 && (
        <PagOutroAssociadoP1
          setParte={setParte}
          presentarAssoc={presentearAssoc}
          setPresentarAssoc={setPresentarAssoc}
        />
      )}
      {parte === 1 && (
        <PagOutroAssociadoP2
          setParte={setParte}
          presentarAssoc={presentearAssoc}
          setPresentarAssoc={setPresentarAssoc}
        />
      )}
      {parte === 2 && (
        <PagOutroAssociadoP3
          setParte={setParte}
          presentearAssoc={presentearAssoc}
        />
      )}
    </div>
  );
};

export default PagarOutroAssociado;
