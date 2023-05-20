import {
  AddCircle,
  AddCircleOutline,
  AddCircleOutlineOutlined,
  ExpandLess,
  ExpandMore,
  Label,
  MoreVert,
  NoteAddRounded,
  RemoveCircle,
  RemoveCircleRounded,
  UploadFileRounded,
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
  Menu,
  MenuItem,
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
  const [aprendizadoInputs, setAprendizadoInputs] = useState([]);
  const [lastIdAprendizado, setLastIdAprendizado] = useState(0);
  const [nomeInput, setNome] = useState("");
  const [descInput, setDescInput] = useState("");
  const [lastId, setLastId] = useState(0);
  const [imagemInput, setImagemInput] = useState("");
  const [btnHabilitado, setbtnHabilitado] = useState(true);
  const [modulosInput, setModulos] = useState([]);
  const [anchorElementMenuModal, setanchorElementMenuModal] = useState(null);
  const openMenuModulo = Boolean(anchorElementMenuModal);

  const inputFileAtividade = useRef([]);

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

  function removerInputAprendizado(id) {
    console.log(id);
    let inputsAprendizado = [...aprendizadoInputs];
    inputsAprendizado.splice(
      inputsAprendizado.findIndex((input) => {
        return input.id === id;
      }),
      1
    );

    setAprendizadoInputs(inputsAprendizado);
  }

  function solicitaçao() {
    let arrayRequisitos = [];
    let arrayAprendizado = [];

    let modulosProv = modulosInput;

    requisitosInputs.map((item) => {
      arrayRequisitos.push(item.text);
    });

    aprendizadoInputs.map((item) => {
      arrayAprendizado.push(item.text);
    })
  

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
        aprendizado: arrayAprendizado,
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
      atividadesModulo: [],
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

  function openMenuModuloClick(event) {
    setanchorElementMenuModal(event.currentTarget);
  }

  function handleCloseMenuModulo() {
    setanchorElementMenuModal(null);
  }

  function adicionarAtividadeModulo(numModulo) {
    let index = getIndexById(numModulo);
    const modulosProv = [...modulosInput];
    let objectAtividade = {
      numAtividade: modulosProv[index].atividadesModulo.length + 1,
      tituloAtividade: "",
      descricaoAtividade: "",
      arquivoAtividade: null,
      expandAtividade: false,
    };

    modulosProv[index].atividadesModulo.push(objectAtividade);

    setModulos(modulosProv);
  }

  function getIndexAtividadeById(numModulo, numAtividade) {
    let modulosProv = modulosInput;
    let indexModulo = getIndexById(numModulo);
    let index = 0;
    index = modulosProv[indexModulo].atividadesModulo.findIndex((item) => {
      return item.numAtividade === numAtividade;
    });
    return index;
  }
  function alterarTituloAtividade(event, numModulo, numAtividade) {
    let index = getIndexById(numModulo);
    let indexAtividade = getIndexAtividadeById(numModulo, numAtividade);

    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      let modulosProv = modulosInput;
      modulosProv[index].atividadesModulo[indexAtividade].tituloAtividade =
        modulosProv[index].atividadesModulo[indexAtividade].tituloAtividade +
        event.nativeEvent.data;
      setModulos();
      setModulos(modulosProv);
    } else {
      let modulosProv = modulosInput;
      modulosProv[index].atividadesModulo[indexAtividade].tituloAtividade =
        modulosProv[index].atividadesModulo[
          indexAtividade
        ].tituloAtividade.slice(0, modulosProv[index].tituloModulo.length - 1);
      setModulos([]);
      setModulos(modulosProv);
    }
  }

  function expandMoreAtividade(numModulo, numAtividade) {
    let index = getIndexById(numModulo);
    let indexAtividade = getIndexAtividadeById(numModulo, numAtividade);
    const modulosProv = [...modulosInput];
    modulosProv[index].atividadesModulo[indexAtividade].expandAtividade =
      !modulosProv[index].atividadesModulo[indexAtividade].expandAtividade;
    setModulos(modulosProv);
  }

  function alterarDescricaoAtividade(event, numModulo, numAtividade) {
    let index = getIndexById(numModulo);
    let indexAtividade = getIndexAtividadeById(numModulo, numAtividade);

    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      let modulosProv = modulosInput;
      modulosProv[index].atividadesModulo[indexAtividade].descricaoAtividade =
        modulosProv[index].atividadesModulo[indexAtividade].descricaoAtividade +
        event.nativeEvent.data;
      setModulos();
      setModulos(modulosProv);
    } else {
      let modulosProv = modulosInput;
      modulosProv[index].atividadesModulo[indexAtividade].descricaoAtividade =
        modulosProv[index].atividadesModulo[
          indexAtividade
        ].descricaoAtividade.slice(
          0,
          modulosProv[index].tituloModulo.length - 1
        );
      setModulos([]);
      setModulos(modulosProv);
    }
  }

  function handleFileChanged(event, numModulo, numAtividade) {
    let file = event.target.files[0];

    console.log(file);

    let indexModulo = getIndexById(numModulo);
    let indexAtividade = getIndexAtividadeById(numModulo, numAtividade);

    let modulosProv = [...modulosInput];

    let reader = new FileReader();
    reader.onload = function (event) {
      modulosProv[indexModulo].atividadesModulo[
        indexAtividade
      ].arquivoAtividade = event.target.result;
    };
    reader.readAsDataURL(file);
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
            <div style={{ marginTop: "10px" }}>
              <label>
                O que vai ser aprendido?
                <IconButton
                  sx={{ color: "#333" }}
                  onClick={() => {
                    setAprendizadoInputs((value) => [
                      ...value,
                      { id: lastIdAprendizado, text: "" },
                    ]);
                    setLastIdAprendizado(lastIdAprendizado + 1);
                  }}
                >
                  <AddCircleOutline />
                </IconButton>
              </label>
              {aprendizadoInputs.map((item) => {
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
                          let aprendizado = aprendizadoInputs;
                          aprendizado[item.id].text =
                            aprendizado[item.id].text + e.nativeEvent.data;
                          setAprendizadoInputs();
                          setAprendizadoInputs(aprendizado);
                        } else {
                          let aprendizado = aprendizadoInputs;
                          aprendizado[item.id].text = aprendizado[
                            item.id
                          ].text.slice(0, aprendizado[item.id].text.length - 1);
                          setAprendizadoInputs();
                          setAprendizadoInputs(aprendizado);
                        }
                      }}
                    />
                    <IconButton
                      sx={{ color: "#333" }}
                      onClick={() => removerInputAprendizado(item.id)}
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
            <FloatingLabel
              controlId="floatingTextArea"
              label="Descrição"
              className="mb-3"
            >
              <Form.Control
                value={descInput}
                onChange={(e) => setDescInput(e.target.value)}
                style={{ height: "100%" }}
                as="textarea"
                placeholder="Digite a descrição"
              />
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
                    <div
                      className="contTxtTituloModulo"
                      style={{ display: "flex", alignItems: "center" }}
                    >
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
                          <IconButton
                            onClick={(e) => {
                              openMenuModuloClick(e);
                            }}
                            style={{ width: "25px", height: "25px" }}
                          >
                            <MoreVert />
                          </IconButton>
                          <Menu
                            anchorEl={anchorElementMenuModal}
                            open={openMenuModulo}
                            onClose={handleCloseMenuModulo}
                          >
                            <MenuItem
                              sx={{ position: "relative", right: 0 }}
                              onClick={() =>
                                adicionarVideoModulo(item.numModulo)
                              }
                            >
                              <ListItemIcon
                                style={{ width: "25px", height: "25px" }}
                              >
                                <VideoLabel />
                              </ListItemIcon>
                              <ListItemText primary="Adicionar video" />
                            </MenuItem>
                            <MenuItem
                              sx={{ position: "relative", right: 0 }}
                              onClick={() =>
                                adicionarAtividadeModulo(item.numModulo)
                              }
                            >
                              <ListItemIcon
                                style={{ width: "25px", height: "25px" }}
                              >
                                <NoteAddRounded />
                              </ListItemIcon>
                              <ListItemText primary="Adicionar Atividade" />
                            </MenuItem>
                          </Menu>
                        </div>
                        <List component="div" disablePadding>
                          <Typography variant="h6">Videos</Typography>
                          {item.videosModulo.map((video) => {
                            return (
                              <div style={{display: "flex"}} className="contVideosModulosAddCurso">
                                <ListItemButton
                                  sx={{
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
                          <Typography variant="h6">Atividades</Typography>
                          {item.atividadesModulo.map((atividade) => {
                            return (
                              <div className="contAtividadesCursoAdd">
                                <div className="contListItemCursoAdd">
                                  <ListItem>
                                    <ListItemButton
                                      onClick={() =>
                                        expandMoreAtividade(
                                          item.numModulo,
                                          atividade.numAtividade
                                        )
                                      }
                                      sx={{ justifyContent: "space-between" }}
                                    >
                                      <div style={{ display: "flex" }}>
                                        <ListItemIcon
                                          sx={{ alignItems: "center" }}
                                        >
                                          <NoteAddRounded />
                                        </ListItemIcon>
                                        <TextField
                                          size="small"
                                          variant="outlined"
                                          type="text"
                                          placeholder="Titulo da atividade"
                                          onChange={(e) => {
                                            alterarTituloAtividade(
                                              e,
                                              item.numModulo,
                                              atividade.numAtividade
                                            );
                                          }}
                                        />
                                      </div>
                                      {atividade.expandAtividade ? (
                                        <ExpandLess />
                                      ) : (
                                        <ExpandMore />
                                      )}
                                    </ListItemButton>
                                  </ListItem>
                                  <IconButton sx={{ height: "50px" }}>
                                    <RemoveCircleRounded />
                                  </IconButton>
                                </div>
                                <Collapse
                                  in={atividade.expandAtividade}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Box
                                    style={{
                                      width: "90%",
                                      marginLeft: "5rem",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "87%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginLeft: "2rem",
                                        alignItems: "center",
                                      }}
                                    >
                                      <TextField
                                        size="small"
                                        variant="outlined"
                                        type="text"
                                        placeholder="Descrição da atividade"
                                        onChange={(e) => {
                                          alterarDescricaoAtividade(
                                            e,
                                            item.numModulo,
                                            atividade.numAtividade
                                          );
                                        }}
                                      />
                                      <div className="contInputArquivoAtividade">
                                        <label>
                                          Importar Arquivo (Atividade)
                                        </label>
                                        <input
                                          id="inputFileAtividade"
                                          type="file"
                                          ref={inputFileAtividade}
                                          onChange={(e) =>
                                            handleFileChanged(
                                              e,
                                              item.numModulo,
                                              atividade.numAtividade
                                            )
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Box>
                                </Collapse>
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
