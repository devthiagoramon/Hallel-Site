import dayjs from "dayjs";
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const SelecionarMesesPagoAssociadoPerfil = ({
  mesesPagos,
  mesSelecionado,
  setMesSelecionado,
}) => {
  function handleMesSelecionado(mesSelecionado) {
    setMesSelecionado(mesSelecionado);
  }

  useEffect(() => {
    console.log(mesSelecionado);
  }, []);

  return (
    <div className="container_mp">
      <>
        {mesesPagos !== undefined && (
          <>
            {mesesPagos.map((mes) => {
              if (dayjs(mes).format("MM/YYYY") === mesSelecionado) {
                return (
                  <motion.button
                    className="btn_mes_selecionado"
                    whileHover={{ scale: 1.1 }}
                  >
                    {dayjs(mes).format("MM/YYYY")}
                  </motion.button>
                );
              } else {
                return (
                  <motion.button whileHover={{ scale: 1.1 }}>
                    {dayjs(mes).format("MM/YYYY")}
                  </motion.button>
                );
              }
            })}
          </>
        )}
      </>
    </div>
  );
};

export default SelecionarMesesPagoAssociadoPerfil;
