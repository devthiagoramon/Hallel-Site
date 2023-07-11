import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

const MetaEntradaComponentPainelFinanceiro = () => {
  const [porcentagem, setporcentagem] = useState(100);

  return (
    <div className="container_meta_painel_financeiro">
      <div className="container_circular_progress">
        <CircularProgress
          style={{
            width: "350px",
            height: "350px",
            maxWidth: "350px",
            maxHeight: "350px",
          }}
          sx={{ color: "#1A0631" }}
          variant="determinate"
          value={porcentagem}
        />
        <label>{porcentagem}%</label>
      </div>
      <div className="container_info_circular_progress">
        <label>
          <span>Meta:</span>
          <br /> R$15.000,00
        </label>
      </div>
    </div>
  );
};

export default MetaEntradaComponentPainelFinanceiro;
