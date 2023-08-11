import { PermIdentityRounded, Today, TodayRounded } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

const VirarAssociadoP1 = ({
  setIndexParte,
  novoAssociado,
  setNovoAssociado,
}) => {
  const [openPicker, setOpenPicker] = useState(false);

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
          <input
            id="nome_associado"
            type="text"
            value={novoAssociado.nome}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, nome: e.target.value };
              });
            }}
          />
        </div>
        <div className="input_bodys_VA">
          <label>Email</label>
          <input
            id="email_associado"
            type="text"
            value={novoAssociado.email}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
        </div>
        <div className="input_bodys_VA">
          <label>CPF</label>
          <input
            id="cpf_associado"
            type="text"
            value={novoAssociado.cpf}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, cpf: e.target.value };
              });
            }}
            placeholder="Somente números"
          />
        </div>
        <div className="input_bodys_VA">
          <label>Telefone</label>
          <input
            id="telefone_associado"
            type="text"
            placeholder="(92) 9111-1111"
            value={novoAssociado.telefone}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, telefone: e.target.value };
              });
            }}
          />
        </div>
        <div className="input_bodys_VA">
          <label>Data de nascimento</label>
          <DatePicker
            views={["year", "month", "day"]}
            format="DD/MM/YYYY"
            sx={{ height: "fit-content", width: "95%", padding: "0px" }}
            id="aniversario_associado"
            value={novoAssociado.dataNascimento}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, dataNascimento: e };
              });
            }}
          />
        </div>
      </div>
      <div className="footer_parts_VA">
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
