import React, { useMemo } from "react";
import "./listarCursoAdm.css";
import {
  CardActionArea,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Autocomplete, Card, CardCover, Input } from "@mui/joy";
import { Box, height } from "@mui/system";

const ListarCursosADM = () => {
  const [pesquisarNome, setpesquisarNome] = useState(false);
  const [cardSelecionado, setcardSelecionado] = useState(null);
  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [isModalAberto, setIsModalAberto] = useState(false);
  const [abrindoModal, setAbrindoModal] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false);

  const cursoModalTemplate = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }

  const [cursoModaly, setCursoModaly] = useState(0);
  const [cursoModalx, setcursoModalx] = useState(0);
  const [cursoModalwidth, setCursoModalwidth] = useState(0);
  const [cursoModalheight, setcursoModalheight] = useState(0);
  const [imageModal, setImageModal] = useState("");


  function closeModal() {
    setAbrirModal(false);
    setIsModalAberto(false);
    setcursoModalx(0);
    setCursoModaly(0);
    setCursoModalwidth(0);
    setcursoModalheight(0);
  }

  function abrirDescricao(e) {
    setAbrirModal(true)
    setAbrindoModal(true);
    setImageModal(e.target.currentSrc)
    setcursoModalx(parseInt(e.target.x));
    setCursoModaly(parseInt(e.target.y));
    setCursoModalwidth(parseInt(e.target.width));
    setcursoModalheight(parseInt(e.target.height));
    console.log(e);
    console.log(cursoModalx+"\n"+cursoModaly+"\n"+cursoModalwidth+"\n"+cursoModalheight)
    setTimeout(() => {
      setAbrindoModal(false)
      setIsModalAberto(true);
    }, 1000);
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
  }, [])

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
            <motion.div
              className="innerPesquisa"
              initial={{ width: "20%" }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.6 }}
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
            </motion.div>
          )}
          <IconButton onClick={() => btnPesquisarNome()} sx={{ color: "#333" }}>
            <Search />
          </IconButton>
        </div>
      </div>
      <div className="bodyListCursosAdm">
        {cursos.map((item) => (
          <div>
            <FormLabel
              style={{ color: "#333", fontSize: "18px", marginTop: "0.9rem" }}
            >
              {item.nome}
            </FormLabel>
            <CardActionArea onClick={(e) => abrirDescricao(e)}>
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
        {
          <div>
            {abrirModal ?
              < div >
                {abrindoModal ? <motion.div style={{width: {cursoModalwidth}, height: {cursoModalheight}}} transition={{duration: 1}} initial={{ x: { cursoModalx }, y: { cursoModaly } }} animate={{
                  top: "50%", left: "50%",
                  transform: "translateX(-50%)" - cursoModalwidth,
                  transform: "translateY(-50%)" - cursoModalheight
                }}><img /></motion.div> : <div>
                  {isModalAberto === false ? "" : <div>
                    <Modal style={{ borderRadius: "10px" }} open={isModalAberto} onClose={closeModal}>
                      <Box style={styleModal} className="modalDescricaoCurso">
                        <Typography variant="h4" component="h3" sx={{ mt: 4, mb: 2 }}>Descrição do Curso</Typography>
                        <Typography variant="label" sx={{ mt: 3 }}>
                          <b>Nome: </b>
                        </Typography>
                        <br />
                        <Typography variant="label" sx={{ mt: 3 }}>
                          <b>Requisitos: </b>
                        </Typography>
                      </Box>
                    </Modal>
                  </div>}
                </div>}
              </div> : ""
            }
          </div>
        }
      </div >
    </div >
  );
};

export default ListarCursosADM;
