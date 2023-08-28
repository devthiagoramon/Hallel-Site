import React from "react";
import "./codigo_entrada.css";
import EsquerdaBodyCodFinanceiro from "./EsquerdaBodyCod";
import DireitaBodyCodFinanceiro from "./DireitaBodyCod";

const CodigosFinanceiro = () => {
  return (
    <div className="container_cod_financeiro">
      <div className="header_cef">
        <h1>Códigos de Entradas</h1>
      </div>
      <div className="body_cf">
        <EsquerdaBodyCodFinanceiro />
        <DireitaBodyCodFinanceiro />
      </div>
    </div>
  );
};

export default CodigosFinanceiro;
