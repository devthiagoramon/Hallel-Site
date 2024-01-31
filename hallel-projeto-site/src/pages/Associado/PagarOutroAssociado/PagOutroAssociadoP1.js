import React, { useState } from "react";
import { motion } from "framer-motion";
import { PermIdentityRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

// Utilizando como base o outro formulário
// VirarAssociadoP1.js
const PagOutroAssociadoP1 = ({setParte, setPresentarAssoc, presentarAssoc}) => {
  const [emailError, setEmailError] = useState(false);
  const verificarDados = () => {
    let hasError = false;
    if (presentarAssoc.email === "") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }
    if (!hasError) {
      setParte(1);
    }
  };
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -50 }}
      transition={{ type: "spring" }}
      className="cont_first_part_VA"
    >
      <div className="header_cont_principal_VA">
        <h1>Presentear associação</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Informações</h3>
        <PermIdentityRounded sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="input_bodys_VA">
          <label>Email</label>
          {emailError ? (
            <input
              id="email_associado"
              type="text"
              className="input_error_VA"
              placeholder="Email do membro que queira presentar a associação"
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              value={presentarAssoc.email}
            />
          ) : (
            <input
              id="email_associado"
              placeholder="Email do membro que queira presentar a associação"
              type="text"
              className="input_VA"
              onChange={(e) => {
                setPresentarAssoc((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              value={presentarAssoc.email}
            />
          )}
        </div>
      </div>
      <div className="footer_parts_VA">
        <Button variant="contained" onClick={verificarDados}>
          Próximo
        </Button>
      </div>
    </motion.div>
  );
};

export default PagOutroAssociadoP1;
