import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";
import InputHallel from "../../../components/InputHallel/InputHallel";
import { useState } from "react";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import PDFAssinaturaDeMenor from "./PDFAssinaturaDeMenor";
import { AddRounded, PaymentRounded } from "@mui/icons-material";
import ModalAdicionarCartaoPE from "./ModalAdicionarCartaoPE";
import dayjs from "dayjs";

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

  const [isCadastrado, setIsCadastrado] = useState(false);

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
    setUsuarioEvento({ nome: "", cpf: "", idade: 0 });
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

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={styleInnerModal}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          padding={2}
        >
          <Grid item xs={6} md={8}>
            <label style={{ fontSize: "1.5em", fontWeight: "700" }}>
              Formulário de inscrição
            </label>
          </Grid>

          

          <Grid item xs={6} columnGap={2} md={8}>
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>Nome</label>
            <InputHallel
              name="nome"
              style={{ width: 350 }}
              type="text"
              value={usuarioEvento.nome}
              onChange={handleAlterarTexto}
            />
          </Grid>

          <Grid item xs={6} columnGap={2} md={8}>
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>CPF</label>
            <InputHallel
              name="cpf"
              style={{ width: 350 }}
              type="text"
              value={usuarioEvento.cpf}
              onChange={handleAlterarTexto}
            />
          </Grid>
          <Grid item xs={6} direction={"column"} columnGap={2} md={8}>
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
          </Grid>

          <Grid item xs={6} direction={"column"} columnGap={2} md={8}>
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
                    CVC:{" "}
                    {usuarioEvento.cartaoCredito.cvcCartao}{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    Data de Validade:{" "}
                    {dayjs(usuarioEvento.cartaoCredito.dataValidadeCartao).format("MM/YY")}{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    Endereço:{" "}
                    {usuarioEvento.cartaoCredito.enderecoCartao}{" "}
                  </Typography>
                </div>
              ) : (
                ""
              )}
            </div>
          </Grid>

          {isMenorIdade ? (
            <Grid item xs={6} md={8}>
              <hr />
              <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
                Baixar PDF (Obrigatorio)
              </label>
              <PDFViewer style={{ width: "100%", height: 300 }}>
                <PDFAssinaturaDeMenor nomeEvento={evento.titulo} />
              </PDFViewer>
              <hr />
            </Grid>
          ) : (
            <></>
          )}

          <Grid item xs={6} md={8}>
            <BtnHallel sucesso>Participar</BtnHallel>
          </Grid>
        </Grid>
        <ModalAdicionarCartaoPE
          open={openAdicionarCartao}
          setOpen={SetopenAdicionarCartao}
          usuario={usuarioEvento}
          setUsuario={setUsuarioEvento}
        />
      </Box>
    </Modal>
  );
};

export default ModalParticiparEvento;
