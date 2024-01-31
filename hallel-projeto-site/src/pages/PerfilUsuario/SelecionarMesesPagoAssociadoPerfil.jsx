import dayjs from "dayjs";
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const SelecionarMesesPagoAssociadoPerfil = ({
  pagamentosAssociado,
  mesSelecionado,
  setMesSelecionado,
}) => {

  function handleMesSelecionado(mesSelecionado) {
    setMesSelecionado(mesSelecionado);
  }

  return (
    <div className="container_mp">
      <>
        {pagamentosAssociado !== undefined && (
          <div className="carrosel_mp">
            {pagamentosAssociado.map((pagamento) => {
              if (dayjs(pagamento.dataPaga).format("MM/YYYY") === mesSelecionado) {
                return (
                  <motion.button
                    className="btn_mes_selecionado"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      handleMesSelecionado(
                        dayjs(pagamento.dataPaga).format("MM/YYYY")
                      );
                    }}
                  >
                    {dayjs(pagamento.dataPaga).format("MM/YYYY")}
                  </motion.button>
                );
              } else {
                return (
                  <motion.button
                    onClick={() => {
                      handleMesSelecionado(
                        dayjs(pagamento.dataPaga).format("MM/YYYY")
                      );
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {dayjs(pagamento.dataPaga).format("MM/YYYY")}
                  </motion.button>
                );
              }
            })}
          </div>
        )}
      </>
    </div>
  );
};

export default SelecionarMesesPagoAssociadoPerfil;
