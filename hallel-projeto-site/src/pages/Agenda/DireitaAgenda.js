import { Typography } from "@mui/material";
import React, { useRef } from "react";
import { useEffect } from "react";

const arrayBackground = [
  {
    cor1: "#006029",
    cor2: "#006029",
  },
  {
    cor1: "#006029",
    cor2: "#006029",
  },
  { cor1: "#006029", cor2: "#006029" },
  { cor1: "#006029", cor2: "#006029" },
  { cor1: "#006029", cor2: "#006029" },
  { cor1: "#006029", cor2: "#006029" },
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