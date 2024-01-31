import React from "react";
import GerarPDFEntrada from "./GerarPDFEntrada";
import "./gerar_pdf.css";
import GuiaAdm from "../../../../components/GuiaAdm";

const MainPDFEntrada = () => {
  return (
    <GuiaAdm title={"PDF entrada"}>
      <div className="container_gerar_pdf">
        <GerarPDFEntrada/>
      </div>
    </GuiaAdm>
  );
};

export default MainPDFEntrada;
