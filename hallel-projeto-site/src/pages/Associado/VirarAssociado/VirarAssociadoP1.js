import { PermIdentityRounded, Today, TodayRounded } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const VirarAssociadoP1 = ({ setIndexParte }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const calendarioPicker = useRef();

  useEffect(() => {}, [openPicker]);

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
        <h3>Informações pessoais</h3>
        <PermIdentityRounded sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="input_bodys_VA">
          <label>Nome</label>
          <input id="nome_associado" />
        </div>
        <div className="input_bodys_VA">
          <label>Email</label>
          <input id="email_associado" />
        </div>
        <div className="input_bodys_VA">
          <label>Telefone</label>
          <input id="telefone_associado" />
        </div>
        <div className="input_bodys_VA">
          <label>Data de aniversário</label>
          <DatePicker
            format="DD/MM/YYYY"
            sx={{ height: "fit-content", width: "95%", padding: "0px" }}
            id="aniversario_associado"
          />
        </div>
      </div>
      <div className="footer_first_part_VA">
        <Button
          variant="contained"
          onClick={() => {
            setIndexParte(1);
          }}
        >
          Próximo
        </Button>
      </div>
    </motion.div>
  );
};

export default VirarAssociadoP1;
