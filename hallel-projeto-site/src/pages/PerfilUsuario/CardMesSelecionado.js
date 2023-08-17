import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CardMesSelecionado = ({ mesSelecionado, pagamentoAssociado }) => {
  const [pagamentoAssociadoSelecionado, setpagamentoAssociadoSelecionado] =
    useState(null);

  useEffect(() => {
    pagamentoAssociado.forEach((pagamento) => {
      if (pagamento.date === mesSelecionado) {
        setpagamentoAssociadoSelecionado(pagamento);
      }
    });
  }, [mesSelecionado]);
  return <div className="container_mesSelecionadoInfo"></div>;
};

export default CardMesSelecionado;
