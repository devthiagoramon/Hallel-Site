import {
  AddCircle,
  AddCircleOutline,
  AddCircleOutlineOutlined,
  ExpandLess,
  ExpandMore,
  Label,
  RemoveCircle,
  VideoLabel,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import "./addCurso.css";
import addImageIcon from "./../../../../images/addImage.svg";
import { useEffect } from "react";

const AdicionarCursoAdm = () => {
  const [requisitosInputs, setRequisitosInputs] = useState([]);
  const [nomeInput, setNome] = useState("");
  const [descInput, setDescInput] = useState("");
  const [lastId, setLastId] = useState(0);
  const [imagemInput, setImagemInput] = useState("");
  const [btnHabilitado, setbtnHabilitado] = useState(true);
  const [modulosInput, setModulos] = useState([]);

  const [enviando, setenviando] = useState(false);
  const [enviadoSucesso, setenviadoSucesso] = useState(false);
  const [enviadoErro, setEnviadoErro] = useState(false);

  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();

  useEffect(() => {
    if (nomeInput !== "" && imagemInput !== "") {
      setbtnHabilitado(true);
    } else {
      setbtnHabilitado(false);
    }
  }, [imagemInput, nomeInput]);

  useEffect(() => {
    setModulos(modulosInput);
  }, [modulosInput]);

  function fecharAviso() {
    enviadoSucesso === true
      ? setenviadoSucesso(false)
      : setenviadoSucesso(false);
    enviadoErro === true ? setEnviadoErro(false) : setEnviadoErro(false);
  }

  const dropImagemDiv = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagemInput(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const imagemSobreDiv = (event) => {
    event.preventDefault();
  };

  function onImageSelected(e) {
    var selectedFile = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      setImagemInput(e.target.result);
    };

    reader.readAsDataURL(selectedFile);
  }

  function alterarLinkVideo(event, numModulo, numVideo) {
    let indexModulo = getIndexById(numModulo);
    let indexVideo = getIndexByIdVideo(numModulo, numVideo);

    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      let modulosProv = [...modulosInput];
      modulosProv[indexModulo].videosModulo[indexVideo].linkVideo =
        modulosProv[indexModulo].videosModulo[indexVideo].linkVideo +
        event.nativeEvent.data;
      setModulos();
      setModulos(modulosProv);
    } else {
      let modulosProv = [...modulosInput];
      modulosProv[indexModulo].videosModulo[indexVideo].linkVideo = modulosProv[
        indexModulo
      ].videosModulo[indexVideo].linkVideo.slice(
        0,
        modulosProv[indexModulo].videosModulo[indexVideo].linkVideo.length - 1
      );
      setModulos([]);
      setModulos(modulosProv);
    }
  }

  function alterarTituloAula(event, numModulo, numVideo) {
    let indexModulo = getIndexById(numModulo);
    let indexVideo = getIndexByIdVideo(numModulo, numVideo);

    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      let modulosProv = [...modulosInput];
      modulosProv[indexModulo].videosModulo[indexVideo].tituloVideo =
        modulosProv[indexModulo].videosModulo[indexVideo].tituloVideo +
        event.nativeEvent.data;
      setModulos();
      setModulos(modulosProv);
    } else {
      let modulosProv = [...modulosInput];
      modulosProv[indexModulo].videosModulo[indexVideo].tituloVideo =
        modulosProv[indexModulo].videosModulo[indexVideo].tituloVideo.slice(
          0,
          modulosProv[indexModulo].videosModulo[indexVideo].tituloVideo.length -
          1
        );
      setModulos([]);
      setModulos(modulosProv);
    }
  }

  function removerInput(id) {
    let inputs = requisitosInputs;
    inputs.splice(
      inputs.findIndex((item) => {
        return item.id === id;
      }),
      1
    );
    inputs = [...inputs];
    setRequisitosInputs(inputs);
  }

  function solicitaçao() {
    let arrayRequisitos = [];

    let modulosProv = modulosInput;

    requisitosInputs.map((item) => {
      arrayRequisitos.push(item.text);
    });

    let url = "http://localhost:8080/api/cursos/create";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({
        nome: nomeInput,
        image: imagemInput,
        descricao: descInput,
        requisitos: arrayRequisitos,
        modulos: modulosProv,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        setenviadoSucesso(true);
        setTimeout(() => {
          window.location.href = "/administrador/cursos";
        }, 3000);
      })
      .catch((error) => {
        console.warn(error);
        setEnviadoErro(true);
      });
  }

  function cadastrarCurso() {
    setenviando(true);
    solicitaçao();

    setTimeout(() => {
      setenviando(false);
    }, 3000);
  }

  function adicionarModulo() {
    let modulo = {
      numModulo: modulosInput.length + 1,
      tituloModulo: "",
      videosModulo: [],
      openModulo: false,
    };
    setModulos((prev) => [...prev, modulo]);
  }

  function alterarTituloModulo(event, numModulo) {
    let index = getIndexById(numModulo);

    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      let modulosProv = modulosInput;
      modulosProv[index].tituloModulo =
        modulosProv[index].tituloModulo + event.nativeEvent.data;
      setModulos();
      setModulos(modulosProv);
    } else {
      let modulosProv = modulosInput;
      modulosProv[index].tituloModulo = modulosProv[index].tituloModulo.slice(
        0,
        modulosProv[index].tituloModulo.length - 1
      );
      setModulos([]);
      setModulos(modulosProv);
    }
  }

  function getIndexById(numModulo) {
    let modulosProv = modulosInput;
    let index = 0;
    index = modulosProv.findIndex((item) => {
      return item.numModulo === numModulo;
    });
    return index;
  }
  function getIndexByIdVideo(numModulo, numVideo) {
    let modulosProv = modulosInput;
    let indexModulo = getIndexById(numModulo);
    let index = 0;
    index = modulosProv[indexModulo].videosModulo.findIndex((item) => {
      return item.numVideo === numVideo;
    });
    return index;
  }

  function expandMoreModulo(numModulo) {
    let index = getIndexById(numModulo);
    const modulosProv = [...modulosInput];
    modulosProv[index].openModulo = !modulosProv[index].openModulo;
    setModulos(modulosProv);
  }

  function removerModulo(numModulo) {
    let modulosProv = modulosInput;
    modulosProv.splice(getIndexById(numModulo), 1);
    modulosProv = [...modulosProv];
    setModulos(modulosProv);
  }

  function adicionarVideoModulo(numModulo) {
    let index = getIndexById(numModulo);
    const modulosProv = [...modulosInput];
    let objectVideo = {
      numVideo: modulosProv[index].videosModulo.length + 1,
      tituloVideo: "",
      linkVideo: "",
    };
    modulosProv[index].videosModulo.push(objectVideo);
    setModulos(modulosProv);
  }

  function removerVideoModulo(numModulo, numVideo) {
    let indexModulo = getIndexById(numModulo);
    const modulosProv = [...modulosInput];
    let indexVideo = getIndexByIdVideo(numModulo, numVideo);
    modulosProv[indexModulo].videosModulo.splice(indexVideo, 1);
    setModulos(modulosProv);
  }

  return (
    <div className="contAddCursoAdm">
      <div className="headerAddCurso">
        <label>Adicionar Curso</label>
      </div>
      <div className="bodyAddCurso">
        <div className="headCont">
          <div className="outImagemAddCurso">
            <div ref={imagemDiv} className="contImagemAddCurso">
              {imagemInput === "" ? (
                <div
                  className="innerImagem"
                  onDrop={dropImagemDiv}
                  onDragOver={imagemSobreDiv}
                  ref={imagemLabelInformativoDiv}
                >
                  <label className="labelInputImagem" for="selecao-arquivo">
                    <img src={addImageIcon} />
                  </label>
                  <label
                    className="labelInformativoImagem"
                    ref={imagemLabelInformativoLabel}
                  >
                    Clique no icone ou arraste a foto
                    <br />
                  </label>
                  <input
                    className="inputImagem"
                    type="file"
                    id="selecao-arquivo"
                    onChange={onImageSelected}
                  />
                </div>
              ) : (
                <img
                  className="imagemEvento"
                  alt="Imagem do Evento"
                  src={imagemInput}
                />
              )}
            </div>
          </div>
        </div>
        <div className="outContInputsAddCurso">
          <div className="contInputsAddCurso">
            <div>
              <label>Nome do curso</label>
              <FormControl
                onChange={(e) => setNome(e.target.value)}
                style={{ marginTop: "2rem", width: "80%" }}
              />
            </div>
            <div>
              <label>
                Requisitos
                <IconButton
                  sx={{ color: "#333" }}
                  onClick={() => {
                    setRequisitosInputs((value) => [
                      ...value,
                      { id: lastId, text: "" },
                    ]);
                    setLastId(lastId + 1);
                  }}
                >
                  <AddCircleOutline />
                </IconButton>
              </label>
              {requisitosInputs.map((item) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ced4da",
                      width: "100%",
                      borderRadius: "0.375rem",
                      marginTop: "1.1rem",
                    }}
                  >
                    <FormControl
                      key={item}
                      style={{ width: "95%", alignSelf: "center" }}
                      onChange={(e) => {
                        if (
                          e.nativeEvent.inputType !== "deleteContentBackward"
                        ) {
                          let requisitos = requisitosInputs;
                          requisitos[item.id].text =
                            requisitos[item.id].text + e.nativeEvent.data;
                          setRequisitosInputs();
                          setRequisitosInputs(requisitos);
                        } else {
                          let requisitos = requisitosInputs;
                          requisitos[item.id].text = requisitos[
                            item.id
                          ].text.slice(0, requisitos[item.id].text.length - 1);
                          setRequisitosInputs();
                          setRequisitosInputs(requisitos);
                        }
                      }}
                    />
                    <IconButton
                      sx={{ color: "#333" }}
                      onClick={() => removerInput(item.id)}
                    >
                      <RemoveCircle />
                    </IconButton>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contTextAreaDescAddCursoAdm">
          <div className="bodyDescAddCursoAdm">
              <FloatingLabel controlId="floatingTextArea" label="Descrição" className="mb-3">
                <Form.Control value={descInput} onChange={(e) => setDescInput(e.target.value)}  style={{height: "100%"}} as="textarea" placeholder="Digite a descrição"/>
              </FloatingLabel>
          </div>
        </div>
        <div className="contModulosAddCursoAdm">
          <div className="headerModulosAddCursoAdm">
            <h3>Modulos do curso</h3>
            <Tooltip title="Adicionar modulo">
              <IconButton onClick={() => adicionarModulo()}>
                <AddCircle style={{ width: "30px", height: "30px" }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="bodyModulosAddCursoAdm">
            <List component="nav" sx={{ width: "99.50%", maxWidth: "100%" }}>
              <Divider />
              {modulosInput.map((item) => {
                return (
                  <div className="containerModuloAddCursoAdm">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Divider />
                      <ListItem>
                        <ListItemButton
                          onClick={() => expandMoreModulo(item.numModulo)}
                          sx={{ justifyContent: "space-between" }}
                        >
                          <TextField
                            size="small"
                            variant="outlined"
                            type="text"
                            placeholder="Nome do modulo"
                            onChange={(e) => {
                              alterarTituloModulo(
                                e,
                                item.numModulo,
                                e.target.value
                              );
                            }}
                          />
                          {item.openModulo ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                      </ListItem>
                      <Tooltip title={"Remover modulo " + item.numModulo}>
                        <IconButton
                          onClick={() => removerModulo(item.numModulo)}
                          sx={{ height: "35px", width: "35px" }}
                        >
                          <RemoveCircle
                            sx={{
                              color: "#333",
                              height: "25px",
                              width: "25px",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <Collapse in={item.openModulo} timeout="auto" unmountOnExit>
                      <Box style={{ width: "95%", marginLeft: "3rem" }}>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h5" sx={{ maxWidth: "95%" }}>
                            Modulo:{" "}
                            {item.tituloModulo !== "" ? (
                              item.tituloModulo
                            ) : (
                              <span
                                style={{
                                  fontStyle: "italic",
                                  fontSize: "16px",
                                }}
                              >
                                "Titulo do Modulo"
                              </span>
                            )}
                          </Typography>
                          <Tooltip
                            title={
                              "Adicionar um video ao modulo: " +
                              item.tituloModulo
                            }
                          >
                            <IconButton
                              sx={{ position: "relative", right: 0 }}
                              onClick={() =>
                                adicionarVideoModulo(item.numModulo)
                              }
                            >
                              <AddCircle
                                style={{ width: "25px", height: "25px" }}
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                        <List component="div" disablePadding>
                          {item.videosModulo.map((video) => {
                            return (
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ListItemButton
                                  sx={{
                                    marginLeft: "2rem",
                                    width: "91%",
                                    pl: 4,
                                  }}
                                >
                                  <ListItemIcon>
                                    <VideoLabel />
                                  </ListItemIcon>
                                  {video.tituloVideo !== "" ? (
                                    <TextField
                                      sx={{ pr: 4 }}
                                      size="small"
                                      variant="outlined"
                                      type="text"
                                      placeholder="Titulo da Aula"
                                      value={video.tituloVideo}
                                      onChange={(e) => {
                                        alterarTituloAula(
                                          e,
                                          item.numModulo,
                                          video.numVideo
                                        );
                                      }}
                                    />
                                  ) : (
                                    <TextField
                                      sx={{ pr: 4 }}
                                      size="small"
                                      variant="outlined"
                                      type="text"
                                      placeholder="Titulo da Aula"
                                      onChange={(e) => {
                                        alterarTituloAula(
                                          e,
                                          item.numModulo,
                                          video.numVideo
                                        );
                                      }}
                                    />
                                  )}
                                  {video.linkVideo !== "" ? (
                                    <TextField
                                      size="small"
                                      variant="outlined"
                                      type="text"
                                      placeholder="Link do video"
                                      value={video.linkVideo}
                                      onChange={(e) => {
                                        alterarLinkVideo(
                                          e,
                                          item.numModulo,
                                          video.numVideo
                                        );
                                      }}
                                    />
                                  ) : (
                                    <TextField
                                      size="small"
                                      variant="outlined"
                                      type="text"
                                      placeholder="Link do video"
                                      onChange={(e) => {
                                        alterarLinkVideo(
                                          e,
                                          item.numModulo,
                                          video.numVideo
                                        );
                                      }}
                                    />
                                  )}
                                </ListItemButton>
                                <IconButton
                                  onClick={() =>
                                    removerVideoModulo(
                                      item.numModulo,
                                      video.numVideo
                                    )
                                  }
                                  sx={{ height: "35px", width: "35px" }}
                                >
                                  <RemoveCircle
                                    sx={{
                                      color: "#333",
                                      height: "25px",
                                      width: "25px",
                                    }}
                                  />
                                </IconButton>
                              </div>
                            );
                          })}
                        </List>
                      </Box>
                    </Collapse>
                  </div>
                );
              })}
              <Divider />
            </List>
          </div>
        </div>
      </div>
      <div className="footerAddCurso">
        <div className="contEnviarAddCurso">
          {enviando ? (
            <CircularProgress />
          ) : (
            <div>
              {btnHabilitado ? (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => cadastrarCurso()}
                >
                  Enviar
                </Button>
              ) : (
                <Button variant="contained" color="success" disabled>
                  Enviar
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <Snackbar
        open={enviadoSucesso}
        autoHideDuration={3000}
        onClose={fecharAviso}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Enviado com sucesso, redirecionando...
        </Alert>
      </Snackbar>
      <Snackbar
        open={enviadoErro}
        autoHideDuration={3000}
        onClose={fecharAviso}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Error no envio
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AdicionarCursoAdm;
