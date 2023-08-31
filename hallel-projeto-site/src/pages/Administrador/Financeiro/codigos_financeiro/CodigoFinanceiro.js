import React from "react";
import "./codigo_entrada.css";
import EsquerdaBodyCodFinanceiro from "./EsquerdaBodyCod";
import DireitaBodyCodFinanceiro from "./DireitaBodyCod";
import SelectTipoCodigoFinanceiro from "./SelectTipoCodigoFinanceiro";
import { useState } from "react";

const CodigosFinanceiro = () => {
  const [saidaSelecionada, setSaidaSelecionada] = useState(false);
  const [entradaSelecionada, setEntradaSelecionada] = useState(true);

  return (
    <div className="container_cod_financeiro">
      <div className="header_cef">
        <h1>Códigos do Financeiro</h1>
      </div>
      <div className="body_cf">
        <EsquerdaBodyCodFinanceiro
          entradaSelecionada={entradaSelecionada}
          saidaSelecionada={saidaSelecionada}
          setEntradaSelecionada={setEntradaSelecionada}
          setSaidaSelecionada={setSaidaSelecionada}
        />
        <DireitaBodyCodFinanceiro
          entradaSelecionada={entradaSelecionada}
          saidaSelecionada={saidaSelecionada}
        />
      </div>
    </div>
  );
};

export default CodigosFinanceiro;
