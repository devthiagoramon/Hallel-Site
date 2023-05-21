import { Box, Typography } from "@mui/material";
import React from "react";
import iconCertificado from "../../images/icon4.png";
import "./../../components/BtnHallel/btnHallel.css"

const InnerModalMatricular = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#FAFAFA",
    borderRadius: "6px 6px 6px 6px",
    boxShadow: 24,
    p: 4,
    padding: "20px",
  };

  const styleImg = {
    maxHeight: "100px",
    objectFit: "contain",
  };

  function matricular(){
    
  }

  return (
    <Box style={style}>
      <Typography variant="h4">Matricular-se no curso</Typography>
      <div style={{ display: "flex" }}>
        <img
          style={styleImg}
          alt={"imagem " + props.curso.nome}
          src={props.curso.image}
        />
        <Box variant="div" sx={{ ml: 3, mt: 2 }}>
          <Typography variant="subtitle1">{props.curso.nome}</Typography>
          <Typography
            variant="subtitle1"
            sx={{ mt: 1, display: "flex", alignItems: "center" }}
          >
            <img
              alt="Icone certificado"
              style={{ maxHeight: "30px" }}
              src={iconCertificado}
            />
            Com certificado
          </Typography>
        </Box>
      </div>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">O que você irá aprender</Typography>
        <ul style={{ marginTop: "12px" }}>
          {props.curso.aprendizado.map((aprendizado) => {
            return <li>{aprendizado}</li>;
          })}
        </ul>
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <button onClick={() => matricular()} style={{ backgroundColor: "#028c33", color: "#FAFAFA" }} className="btnHallel">
          Matricular-se
        </button>
      </Box>
    </Box>
  );
};

export default InnerModalMatricular;
