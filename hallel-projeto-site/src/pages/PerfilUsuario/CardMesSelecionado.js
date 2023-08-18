import {
  CheckCircleOutlineRounded,
  CheckCircleRounded,
} from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardMesSelecionado = ({ mesSelecionado, pagamentosAssociado }) => {
  const [pagamentoAssociadoSelecionado, setpagamentoAssociadoSelecionado] =
    useState(null);

  useEffect(() => {
    if (pagamentosAssociado !== undefined) {
      pagamentosAssociado.forEach((pagamento) => {
        console.log(dayjs(pagamento.date).format("MM/YYYY"))
        if (
          dayjs(pagamento.date).format("MM/YYYY") ===
          mesSelecionado
        ) {
          console.log("Verdade")
          setpagamentoAssociadoSelecionado(pagamento);
        }
      });
    }
  }, [mesSelecionado]);
  return (
    <div className="container_mesSelecionadoInfo">
      {pagamentoAssociadoSelecionado !== null ? (
        <Card variant="outlined" className="cont_card_pagamentoAssociado">
          <CardContent>
            <motion.div
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="headerpagamentoassociado pagamentoassociado_pago"
            >
              <CheckCircleOutlineRounded
                sx={{ fontSize: "50px", color: "#F4F4FA" }}
              />
            </motion.div>
            <Typography variant="label">Teste</Typography>
          </CardContent>
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardMesSelecionado;
