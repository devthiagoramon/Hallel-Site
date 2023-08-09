import React from "react";
import { motion } from "framer-motion";
import { CreditCard } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const VirarAssociadoP2 = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -50 }}
      transition={{ type: "spring" }}
      className="cont_second_part_VA"
    >
      <div className="header_cont_principal_VA">
        <h1>Virar associado</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Pagamento</h3>
        <CreditCard sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="input_bodys_VA">
          <label>Número do Cartão</label>
          <input id="telefone_associado" />
        </div>
        <div className="input_bodys_VA">
          <label>Data de Validade</label>
          <DatePicker
            format="MM/YY"
            sx={{width: "40%"}}
          />
        </div>
        <div className="input_bodys_VA">
          <label>CVC</label>
          <Tooltip title="Código de Segurança">
            <input id="telefone_associado" />
          </Tooltip>
        </div>
        <div className="input_bodys_VA">
          <label>Telefone</label>
          <input id="telefone_associado" />
        </div>
        <div className="input_bodys_VA">
          <label>Telefone</label>
          <input id="telefone_associado" />
        </div>
      </div>
    </motion.div>
  );
};

export default VirarAssociadoP2;
