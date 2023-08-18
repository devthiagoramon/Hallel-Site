import dayjs from "dayjs";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const CardMesSelecionado = ({ mesSelecionado, pagamentosAssociado }) => {
  const [pagamentoAssociadoSelecionado, setpagamentoAssociadoSelecionado] =
    useState(null);

  useMemo(() => {
    if (pagamentosAssociado !== undefined) {
      pagamentosAssociado.forEach((pagamento) => {
        if (
          dayjs(pagamento.date).format("MM/YYYY") ===
          dayjs(mesSelecionado).format("MM/YYYY")
        ) {
          setpagamentoAssociadoSelecionado(pagamento);
        }
      });
    }
  }, [mesSelecionado, setpagamentoAssociadoSelecionado, pagamentosAssociado]);
  return (
    <div className="container_mesSelecionadoInfo">
      {pagamentoAssociadoSelecionado !== null ? <div></div> : <div></div>}
    </div>
  );
};

export default CardMesSelecionado;
