import { Typography } from "@mui/material";
import React, { useRef } from "react";
import { useEffect } from "react";

const arrayBackground = [
  {
    cor1: "#5614B0",
    cor2: "#DBD65C",
  },
  {
    cor1: "#aa4b6b",
    cor2: "#3b8d99",
  },
  { cor1: "#FDC830", cor2: "#F37335" },
  { cor1: "#a8c0ff", cor2: "#3f2b96" },
  { cor1: "#800080", cor2: "#ffc0cb" },
  { cor1: "#ff9966", cor2: "#ff5e62" },
];

const DireitaAgenda = () => {
  const cardRef = useRef();

  useEffect(() => {
    const min = 0;
    const max = arrayBackground.length;
    const numRandom = Math.floor(Math.random() * (max - min) + min);

    let objGradient = arrayBackground[numRandom];

    cardRef.current.style= "background: linear-gradient(to right, "+objGradient.cor1+", "+objGradient.cor2+");"

  }, [cardRef]);

  return (
    <div className="direita_agenda">
      <div ref={cardRef} className="card_evento_agenda">
        <div className="card_esquerda_evento_agenda">
          <Typography variant="h6" color={"#f4f4f4"}>
            Titulo
          </Typography>
          <Typography variant="subtitle1" color={"#f4f4f4"}>
            Data
          </Typography>
        </div>
        <div className="card_direita_evento_agenda">
          <Typography variant="subtitle1" color={"#f4f4f4"}>
            Local Evento
          </Typography>
          <a href="/agenda" color={"#f4f4f4"}>
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default DireitaAgenda;
