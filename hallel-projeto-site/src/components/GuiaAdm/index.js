import React from "react";
import BarraLateralAdm from "../BarraLateralAdm";
import TituloAdm from "../TituloAdm";

const GuiaAdm = ({ title, children }) => {
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <BarraLateralAdm />
      <div style={{display: 'flex', flexWrap: 'wrap', minWidth: '82%', maxWidth: '82%' ,minHeight:'100%'}}>
        <TituloAdm title={title} />
        <div style={{width: "100%", height: '100%', overflowY: 'auto', overflowX:'hidden'}}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default GuiaAdm;
