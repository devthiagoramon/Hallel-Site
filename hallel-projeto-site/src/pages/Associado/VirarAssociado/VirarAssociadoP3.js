import React from "react";
import { motion } from "framer-motion";
import { CheckCircleOutlineRounded } from "@mui/icons-material";

const VirarAssociadoP3 = ({
  setIndexParte,
  novoAssociado,
  setNovoAssociado,
}) => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -50 }}
      transition={{ type: "spring" }}
      className="cont_first_part_VA"
    >
      <div className="header_cont_principal_VA">
        <h1>Virar associado</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Confirmar Pagamento</h3>
        <CheckCircleOutlineRounded sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA"></div>
    </motion.div>
  );
};

export default VirarAssociadoP3;
