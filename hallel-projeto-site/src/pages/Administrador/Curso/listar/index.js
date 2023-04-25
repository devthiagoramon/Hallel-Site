import React, { useMemo } from "react";
import "./listarCursoAdm.css";
import {
  CardActionArea,
  CardContent,
  Chip,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddCircle, Edit, Search } from "@mui/icons-material";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Autocomplete, Card, CardCover, Input } from "@mui/joy";
import { Box, height } from "@mui/system";
import { Image } from "react-bootstrap";

const ListarCursosADM = () => {
  const [pesquisarNome, setpesquisarNome] = useState(false);
  const [cardSelecionado, setcardSelecionado] = useState(null);
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [isModalAberto, setIsModalAberto] = useState(false);
  const skeletonArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  let descCursoTemplate = {
    id: "",
    nome: "",
    requisitos: [],
    descricao: "",
    image: "",
  };
  const [descCurso, setdescCurso] = useState(descCursoTemplate);

  function closeModal() {
    setIsModalAberto(false);
    setdescCurso(descCursoTemplate);
  }

  function abrirDescricao(id) {
    setIsModalAberto(true);
    let url = "http://localhost:8080/api/cursos/" + id;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((cursoObj) => {
        console.log(cursoObj);
        setdescCurso((prev) => {
          return { ...prev, id: cursoObj.id };
        });
        setdescCurso((prev) => {
          return { ...prev, nome: cursoObj.nome };
        });
        setdescCurso((prev) => {
          return { ...prev, requisitos: cursoObj.requisitos };
        });
        setdescCurso((prev) => {
          return { ...prev, descricao: cursoObj.descricao };
        });
        setdescCurso((prev) => {
          return { ...prev, image: cursoObj.image };
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  function editarCurso(id) {
    window.location.href = "/administrador/cursos/editar/" + id;
  }

  const ordenarPor = [
    { label: "Nome", id: 1 },
    { label: "Data criação", id: 2 },
    { label: "Mais acessados", id: 3 },
  ];

  const [cursos, setCursos] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/cursos";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((cursosObj) => {
        setCursos(cursosObj);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  function btnPesquisarNome() {
    setpesquisarNome(!pesquisarNome);
  }

  return (
    <div className="contListarCursosAdm">
      <div className="headListCursosAdm">
        <label>Cursos da Hallel</label>
        <div className="contPesquisaCursoAdm">
          <FormControl>
            <FormLabel style={{ fontSize: "16px" }}>Ordenar por</FormLabel>
            <Autocomplete options={ordenarPor} />
          </FormControl>
          {pesquisarNome === false ? (
            ""
          ) : (
            <div
              className="innerPesquisa"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl>
                <FormLabel style={{ fontSize: "16px" }}>Nome</FormLabel>
                <Input style={{ width: "100%" }} placeholder="Pesquise aqui" />
              </FormControl>
            </div>
          )}
          <Tooltip title="Abrir caixa de pesquisa">
            <IconButton
              onClick={() => btnPesquisarNome()}
              sx={{ color: "#333" }}
            >
              <Search style={{ width: "30px", height: "30px" }} />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title="Adicionar Curso">
          <IconButton
            sx={{ color: "252525" }}
            onClick={() => (window.location.href = "/administrador/cursos/add")}
          >
            <AddCircle style={{ width: "30px", height: "30px" }} />
          </IconButton>
        </Tooltip>
      </div>
      <div className="bodyListCursosAdm">
        {cursos.length === 0 ? (
          <div className="bodyListCursosAdm">
            {skeletonArray.map((item) => {
              return (
                <div>
                  <Skeleton variant="text" />
                  <Skeleton variant="rounded" width={300} height={300} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bodyListCursosAdm">
            {cursos.map((item) => (
              <div>
                <FormLabel
                  style={{
                    color: "#333",
                    fontSize: "18px",
                    marginTop: "0.9rem",
                  }}
                >
                  {item.nome}
                </FormLabel>
                <CardActionArea onClick={() => abrirDescricao(item.id)}>
                  <Card
                    sx={{
                      minWidth: "300px",
                      maxWidth: "500px",
                      minHeight: "300px",
                      maxHeight: "500px",
                    }}
                  >
                    <CardCover>
                      <img
                        src={item.image}
                        alt={item.nome}
                        style={{ objectFit: "fill" }}
                      />
                    </CardCover>
                  </Card>
                </CardActionArea>
              </div>
            ))}
          </div>
        )}

        {descCurso.nome !== "" ? (
          <Modal
            style={{ borderRadius: "10px" }}
            open={isModalAberto}
            onClose={closeModal}
          >
            <Box style={styleModal} className="modalDescricaoCurso">
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Image
                  style={{
                    position: "relative",
                    marginTop: "01rem",
                  }}
                  src={descCurso.image}
                  rounded
                />
              </div>
              <Tooltip title="Editar curso">
                <IconButton
                  onClick={() => editarCurso(descCurso.id)}
                  style={{ position: "absolute", right: "0%", top: "0" }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Typography
                variant="h5"
                style={{ width: "100%", justifyContent: "space-between" }}
                component="h5"
                sx={{ mt: 4 }}
              >
                <b>Nome: </b>{" "}
              </Typography>
              <Typography variant="span">{descCurso.nome}</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                <b>Descrição: </b>
              </Typography>
              {descCurso.descricao !== null ? (
                descCurso.descricao
              ) : (
                <Typography variant="span">
                  Sem descrição:{" "}
                  <a href="/administrador/cursos">Adicione aqui</a>
                </Typography>
              )}
              <br />
              <Typography variant="h6" sx={{ mt: 2 }}>
                <b>Requisitos: </b>
              </Typography>
              <div>
                {descCurso.requisitos.map((item) => {
                  return (
                    <Chip
                      style={{ margin: "3px" }}
                      label={item}
                      variant="outlined"
                    />
                  );
                })}
              </div>
            </Box>
          </Modal>
        ) : (
          <Modal
            open={isModalAberto}
            onClose={closeModal}
            style={{ borderRadius: "10px" }}
          >
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                border: "2px solid #000",
                boxShadow: 24,
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="modalDescricaoCurso"
            >
              <CircularProgress />
            </Box>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ListarCursosADM;
