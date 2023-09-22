import {
  Alert,
  Box,
  Grid,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";
import InputHallel from "../../../components/InputHallel/InputHallel";
import { useState } from "react";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import PDFAssinaturaDeMenor from "./PDFAssinaturaDeMenor";
import { AddRounded, PaymentRounded } from "@mui/icons-material";
import ModalAdicionarCartaoPE from "./ModalAdicionarCartaoPE";
import dayjs from "dayjs";
import { verifyEmailParticiparEvento } from "../../../api/uris/MembroURLS";
import axios from "axios";

const ModalParticiparEvento = ({ evento, open, setOpen }) => {
  const [usuarioEvento, setUsuarioEvento] = useState({
    nome: "",
    email: "",
    cpf: "",
    idade: 0,
    cartaoCredito: null,
  });

  const [isMenorIdade, setIsMenorIdade] = useState(false);
  const [openAdicionarCartao, SetopenAdicionarCartao] = useState(false);
  const [openIsCadastrado, setOpenIsCadastrado] = useState(false);
  const [openIsNotCadastro, setOpenIsNotCadastro] = useState(false);

  const [isCadastrado, setIsCadastrado] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    maxHeight: 700,
    overflowY: "auto",
    p: 4,
  };
  const handleCloseModal = () => {
    setOpen(false);
    setUsuarioEvento({
      nome: "",
      email: "",
      cpf: "",
      idade: 0,
      cartaoCredito: null,
    });
    setIsVerified(false);
    setIsCadastrado(false);
  };

  const handleAlterarTexto = (e) => {
    if (e.target.name === "idade") {
      if (e.target.value < 18) {
        setIsMenorIdade(true);
      } else {
        setIsMenorIdade(false);
      }
    }
    setUsuarioEvento((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (!isVerified) {
      if (usuarioEvento.email.includes(".com")) {
        let url = verifyEmailParticiparEvento(usuarioEvento.email);
        axios
          .get(url, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setIsCadastrado(res.data);
            if (res.data) {
              setOpenIsCadastrado(true);
            } else {
              setOpenIsNotCadastro(true);
            }
            setIsVerified(true);
          })
          .catch((error) => {
            console.log("Error verificando email: " + error);
          });
      }
    }
  }, [usuarioEvento, isVerified]);

  const handleCloseSnackBar = () => {
    setOpenIsCadastrado(false);
    setOpenIsNotCadastro(false);
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={styleInnerModal}>
        <div className="cont_form_part_evento">
          <div className="header_form_part_evento">
            <label style={{ fontSize: "1.5em", fontWeight: "700" }}>
              Formulário de inscrição
            </label>
          </div>
          <div className="body_form_part_evento">
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
              Email
            </label>
            <InputHallel
              name="email"
              style={{ width: 350 }}
              type="text"
              value={usuarioEvento.email}
              onChange={handleAlterarTexto}
            />
          </div>
        </div>
        {isVerified && (
          <>
            {!isCadastrado ? (
              <div className="body_form_part_evento2">
                <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                  Nome
                </label>
                <InputHallel
                  name="nome"
                  style={{ width: 350 }}
                  type="text"
                  value={usuarioEvento.nome}
                  onChange={handleAlterarTexto}
                />
                <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                  CPF
                </label>
                <InputHallel
                  name="cpf"
                  style={{ width: 350 }}
                  type="text"
                  value={usuarioEvento.cpf}
                  onChange={handleAlterarTexto}
                />
                <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                  Idade:
                </label>
                <InputHallel
                  name="idade"
                  value={usuarioEvento.idade}
                  style={{ marginLeft: "1rem", width: 100 }}
                  type="number"
                  onChange={handleAlterarTexto}
                />
                <div className="header_cartao_participar_evento">
                  <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                    Adicionar Cartão
                  </label>
                  <Tooltip title="Adicionar Cartão">
                    <IconButton
                      onClick={() => {
                        SetopenAdicionarCartao(true);
                      }}
                    >
                      <AddRounded />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="body_cartao_participar_evento">
                  {usuarioEvento.cartaoCredito != null ? (
                    <div className="cont_cartao_participar_evento">
                      <Typography variant="h5">Cartão</Typography>
                      <Typography variant="subtitle1">
                        Número do cartão:{" "}
                        {usuarioEvento.cartaoCredito.numeroCartao}{" "}
                      </Typography>
                      <Typography variant="subtitle1">
                        Nome do Titular:{" "}
                        {usuarioEvento.cartaoCredito.nomeTitularCartao}{" "}
                      </Typography>
                      <Typography variant="subtitle1">
                        CVC: {usuarioEvento.cartaoCredito.cvcCartao}{" "}
                      </Typography>
                      <Typography variant="subtitle1">
                        Data de Validade:{" "}
                        {dayjs(
                          usuarioEvento.cartaoCredito.dataValidadeCartao
                        ).format("MM/YY")}{" "}
                      </Typography>
                      <Typography variant="subtitle1">
                        Endereço: {usuarioEvento.cartaoCredito.enderecoCartao}{" "}
                      </Typography>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {isMenorIdade ? (
                  <div>
                    <hr />
                    <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                      Baixar PDF (Obrigatorio)
                    </label>
                    <PDFViewer style={{ width: "100%", height: 300 }}>
                      <PDFAssinaturaDeMenor nomeEvento={evento.titulo} />
                    </PDFViewer>
                    <hr />
                  </div>
                ) : (
                  <></>
                )}
                <BtnHallel sucesso>Participar</BtnHallel>
              </div>
            ) : (
              <div className="footer_form_part_evento">
                <BtnHallel sucesso>Participar</BtnHallel>
              </div>
            )}
          </>
        )}
        <ModalAdicionarCartaoPE
          open={openAdicionarCartao}
          setOpen={SetopenAdicionarCartao}
          usuario={usuarioEvento}
          setUsuario={setUsuarioEvento}
        />
        <Snackbar
          open={openIsCadastrado}
          autoHideDuration={3000}
          onClose={handleCloseSnackBar}
        >
          <Alert severity="info">
            Email encontrado, usuário encontrado com este email.
          </Alert>
        </Snackbar>
        <Snackbar
          open={openIsNotCadastro}
          autoHideDuration={3000}
          onClose={handleCloseSnackBar}
        >
          <Alert severity="info">Email não encontrado.</Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};

export default ModalParticiparEvento;
