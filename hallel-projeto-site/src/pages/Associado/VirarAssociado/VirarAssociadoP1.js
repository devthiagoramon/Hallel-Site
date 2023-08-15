import { PermIdentityRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

const VirarAssociadoP1 = ({
  setIndexParte,
  novoAssociado,
  setNovoAssociado,
}) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [nomeError, setNomeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);
  const [dataNascimentoError, setDataNascimentoError] = useState(false);

  useEffect(() => {}, [openPicker]);

  const verificarDados = () => {
    let hasError = false;
    if (novoAssociado.nome === "") {
      setNomeError(true);
      hasError = true;
    } else {
      setNomeError(false);
    }
    if (novoAssociado.email === "") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }
    if (novoAssociado.cpf === "") {
      setCpfError(true);
      hasError = true;
    } else {
      setCpfError(false);
    }
    if (novoAssociado.telefone === "") {
      setTelefoneError(true);
      hasError = true;
    } else {
      setTelefoneError(false);
    }
    if (
      dayjs(novoAssociado.dataAniversario).format("DD/MM/YYYY") ===
      dayjs().format("DD/MM/YYYY")
    ) {
      setDataNascimentoError(true);
      hasError = true;
    } else {
      setDataNascimentoError(false);
    }
    if (!hasError) {
      setIndexParte(1);
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
        <h1>Virar associado</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Informações pessoais</h3>
        <PermIdentityRounded sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="input_bodys_VA">
          <label>Nome</label>
          {nomeError ? (
            <input
              id="nome_associado"
              type="text"
              value={novoAssociado.nome}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, nome: e.target.value };
                });
              }}
              className="input_error_VA"
            />
          ) : (
            <input
              id="nome_associado"
              type="text"
              className="input_VA"
              value={novoAssociado.nome}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, nome: e.target.value };
                });
              }}
            />
          )}
        </div>
        <div className="input_bodys_VA">
          <label>Email</label>
          {emailError ? (
            <input
              id="email_associado"
              type="text"
              className="input_error_VA"
              value={novoAssociado.email}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          ) : (
            <input
              id="email_associado"
              type="text"
              className="input_VA"
              value={novoAssociado.email}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          )}
        </div>
        <div className="input_bodys_VA">
          <label>CPF</label>
          {cpfError ? (
            <input
              id="cpf_associado"
              type="text"
              className="input_error_VA"
              value={novoAssociado.cpf}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, cpf: e.target.value };
                });
              }}
              placeholder="Somente números"
            />
          ) : (
            <input
              id="cpf_associado"
              type="text"
              className="input_VA"
              value={novoAssociado.cpf}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, cpf: e.target.value };
                });
              }}
              placeholder="Somente números"
            />
          )}
        </div>
        <div className="input_bodys_VA">
          <label>Telefone</label>
          {telefoneError ? (
            <input
              id="telefone_associado"
              type="text"
              className="input_error_VA"
              placeholder="(92) 9111-1111"
              value={novoAssociado.telefone}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, telefone: e.target.value };
                });
              }}
            />
          ) : (
            <input
              id="telefone_associado"
              type="text"
              className="input_VA"
              placeholder="(92) 9111-1111"
              value={novoAssociado.telefone}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, telefone: e.target.value };
                });
              }}
            />
          )}
        </div>
        <div className="input_bodys_VA">
          <label>Data de nascimento</label>
          {dataNascimentoError ? (
            <DatePicker
              views={["year", "month", "day"]}
              format="DD/MM/YYYY"
              sx={{ height: "fit-content", width: "95%", padding: "0px" }}
              id="aniversario_associado"
              value={novoAssociado.dataAniversario}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, dataAniversario: e.toDate() };
                });
              }}
              className="input_error_VA"
            />
          ) : (
            <DatePicker
              views={["year", "month", "day"]}
              format="DD/MM/YYYY"
              sx={{ height: "fit-content", width: "95%", padding: "0px" }}
              id="aniversario_associado"
              value={novoAssociado.dataNascimento}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, dataNascimento: e.toDate() };
                });
              }}
              className="input_VA"
            />
          )}
        </div>
      </div>
      <div className="footer_parts_VA">
        <Button
          variant="contained"
          onClick={verificarDados}
        >
          Próximo
        </Button>
      </div>
    </motion.div>
  );
};

export default VirarAssociadoP1;
