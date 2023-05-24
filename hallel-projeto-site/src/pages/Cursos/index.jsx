import React, { useMemo, useState } from "react";
import "./cursosComunidade.css";
import { Card, Form } from "react-bootstrap";
import {
  Box,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useMemo(() => {
    let url = "http://localhost:8080/api/listarCurso";
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json"
        },
        withCredentials: false
      })
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const cursosFiltrados = useMemo(() => {
    let pesquisaLowerCase = pesquisa.toLowerCase();
    return cursos.filter((curso) =>
      curso.nome.toLowerCase().includes(pesquisaLowerCase)
    );
  }, [cursos, pesquisa]);

  function abrirDescricaoCurso(idCurso) {
    window.location.href = "/descCurso/" + idCurso;
  }

  return (
    <div className="containerCursosComunidade">
      <div className="headerContainerCursosComunidade">
        <label className="tituloCursosComunidade">Cursos da comunidade</label>
        <div className="contPesquisaCursosComunidade">
          <Form.Control
            onChange={(e) => {
              setPesquisa(e.target.value);
            }}
            placeholder="Pesquisar curso"
          />
        </div>
      </div>
      <div className="bodyContainerCursosComunidade">
        <Box className="containerCadsCursosComunidade">
          {cursosFiltrados.length === 0 ? (
            <div className="containerLoadCardsCursosComunidade">
              <CircularProgress />
            </div>
          ) : (
            <>
              {cursosFiltrados.map((curso) => {
                return (
                  <CardActionArea
                    onClick={() => abrirDescricaoCurso(curso.id)}
                    sx={{
                      width: "auto",
                      minHeight: "350px",
                      maxHeight: "350px",
                    }}
                  >
                    <Card className="cardCursosComunidade" key={curso.id}>
                      <img
                        alt={curso.nome.concat(" Curso")}
                        className="imgCardCursosComunidade"
                        src={curso.image}
                      />
                      <CardContent>
                        <Typography variant="h5">{curso.nome}</Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                );
              })}
            </>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Cursos;
