import {
  CheckCircleOutlineRounded,
  Clear,
  SendRounded,
} from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { associadoListarPagamentoPerfilAssociado } from "../../api/uris/AssociadosURLS";
import axios from "axios";
import ModalPagarAssociacaoPerfil from "./ModalPagarAssociacao";

const CardMesSelecionado = ({ mesSelecionado}) => {
  const [pagamentoAssociadoSelecionado, setpagamentoAssociadoSelecionado] =
    useState(null);

  const [openModalPagarAssociacao, setOpenModalPagarAssociacao] =
    useState(false);

  useEffect(() => {
    let dateString = mesSelecionado.toString();
    let mesString = dateString.substring(0, 2);
    let anoString = dateString.substring(3);

    let url = associadoListarPagamentoPerfilAssociado(
      localStorage.getItem("HallelId"),
      mesString,
      anoString
    );

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data !== "") {
          setpagamentoAssociadoSelecionado(res.data);
        } else {
          setpagamentoAssociadoSelecionado(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mesSelecionado]);
  return (
    <div className="container_mesSelecionadoInfo">
      {pagamentoAssociadoSelecionado !== null ? (
        <>
          <Card variant="outlined" className="cont_card_pagamentoAssociado">
            <CardContent>
              <div className="cont_headerpagamentoassociado">
                <motion.div
                  initial={{ width: "fit-content", height: "fit-content" }}
                  animate={{ width: "100%", height: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="headerpagamentoassociado pagamentoassociado_pago"
                >
                  <CheckCircleOutlineRounded
                    sx={{ fontSize: "50px", color: "#F4F4FA" }}
                  />
                </motion.div>
              </div>
              <Typography variant="label" className="pago_associado">
                Pago
              </Typography>
              <br />
              <Typography variant="label" className="textInfoCard_PA">
                Data do pagamento:{" "}
                {dayjs(pagamentoAssociadoSelecionado.date).format("DD/MM/YYYY")}
              </Typography>
              <br />
              <Typography variant="label" className="textInfoCard_PA">
                Valor:{" "}
                {pagamentoAssociadoSelecionado.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
              <br />
              <Typography variant="label" className="textInfoCard_PA">
                Pago com:{" "}
                {pagamentoAssociadoSelecionado.metodoPag == "CARTAO_CREDITO"
                  ? "Cartão de Crédito"
                  : ""}
                {pagamentoAssociadoSelecionado.metodoPag == "CARTAO_MAQUINA"
                  ? "Cartão de Crédito"
                  : ""}
                {pagamentoAssociadoSelecionado.metodoPag == "CARTAO_DEBITO"
                  ? "Cartão de Debito"
                  : ""}
                {pagamentoAssociadoSelecionado.metodoPag == "PIX" ? "PIX" : ""}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card variant="outlined" className="cont_card_pagamentoAssociado">
          <CardContent>
            <div className="cont_headerpagamentoassociado">
              <motion.div
                initial={{ width: "fit-content", height: "fit-content" }}
                animate={{ width: "100%", height: "100%" }}
                transition={{ duration: 0.5 }}
                className="headerpagamentoassociado pagamentoassociado_nao_pago"
              >
                <Clear sx={{ fontSize: "50px", color: "#F4F4FA" }} />
              </motion.div>
            </div>
            <Typography variant="label" className="nao_pago_associado">
              Não Pago
            </Typography>
            <br />
            <div className="footer_card_btn_ap mt-3">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#52BE80" }}
                endIcon={<SendRounded />}
                onClick={() => {setOpenModalPagarAssociacao(true)}}
              >
                Pagar associação
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <ModalPagarAssociacaoPerfil
      mesSelecionado={mesSelecionado}
        openModalPagarAssociacao={openModalPagarAssociacao}
        setOpenModalPagarAssociacao={setOpenModalPagarAssociacao}
      />
    </div>
  );
};

export default CardMesSelecionado;
