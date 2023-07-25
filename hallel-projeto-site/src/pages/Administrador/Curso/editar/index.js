import {
  AddCircle,
  AddCircleOutline,
  AddCircleOutlineOutlined,
  ExpandLess,
  ExpandMore,
  Label,
  NoteAddRounded,
  RemoveCircle,
  RemoveCircleRounded,
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
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Skeleton,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import "./editarCursoAdm.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import axios from "axios";
import { cursoEditarById, cursoGetModulo, cursoListarById } from "../../../../api/uris/CursosURLS";

const EditarCursosAdm = () => {
  const [requisitosInputs, setRequisitosInputs] = useState([]);
  const [nomeInput, setNome] = useState("");
  const [aprendizadoInputs, setAprendizadoInputs] = useState([]);
  const [lastIdAprendizado, setLastIdAprendizado] = useState(0);
  var lastId = 0;
  var lastIdModulos = 0;
  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();
  const [btnHabilitado, setbtnHabilitado] = useState();
  const [modulosInput, setModulos] = useState([]);
  const [anchorElementMenuModal, setanchorElementMenuModal] = useState(null);
  const openMenuModulo = Boolean(anchorElementMenuModal);

  const { idCurso } = useParams();

  const [oldLenghtArray, setoldLenghtArray] = useState(0);
  const [oldLenghtArrayModulos, setoldLenghtArrayModulos] = useState(0);
  const [oldLenghtArrayAprendizado, setOldLenghtArrayAprendizado] = useState(0);

  const cursoTemplate = {
    nome: "",
    image: "",
    descricao: "",
    requisitos: [],
  };

  const [oldCurso, setoldCurso] = useState(cursoTemplate);
  const [newCurso, setnewCurso] = useState(cursoTemplate);

  const [enviando, setenviando] = useState(false);
  const [enviadoSucesso, setenviadoSucesso] = useState(false);
  const [enviadoErro, setEnviadoErro] = useState(false);
  const [descInput, setdescInput] = useState("");

  useEffect(() => {
    if (
      oldCurso.nome !== newCurso.nome ||
      oldCurso.image !== newCurso.image ||
      oldLenghtArray !== requisitosInputs.length ||
      oldLenghtArrayModulos !== modulosInput.length ||
      descInput !== oldCurso.descricao ||
      oldLenghtArrayAprendizado !== aprendizadoInputs.length
    ) {
      setbtnHabilitado(true);
    } else {
      setbtnHabilitado(false);
    }
  }, [newCurso, requisitosInputs, modulosInput, descInput, aprendizadoInputs]);

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
      setnewCurso((prev) => {
        return { ...prev, image: reader.result };
      });
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
      setnewCurso((prev) => {
        return { ...prev, image: e.target.result };
      });
    };

    reader.readAsDataURL(selectedFile);
  }

  function removerInput(id) {
    let inputs = requisitosInputs;
    lastId -= 1;
    inputs.splice(
      inputs.findIndex((item) => {
        return item.id === id;
      }),
      1
    );
    inputs = [...inputs];
    setRequisitosInputs(inputs);
  }

  function getIndexByIdRequisitos(id) {
    let inputs = requisitosInputs;
    let index = 0;
    index = inputs.findIndex((item) => {
      return item.id === id;
    });
    return index;
  }

  function loadModuloFromAPI(idCurso) {
    let url = cursoGetModulo(idCurso);

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

  useMemo(() => loadFromAPI(), []);

  function loadFromAPI() {
    let url = cursoListarById(idCurso);

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
      .then((object) => {
        let loadingObject = {
          nome: object.nome,
          image: object.image,
          descricao: object.descricao,
        };
        setoldCurso(loadingObject);
        setnewCurso(loadingObject);
        setdescInput(object.descricao !== null ? object.descricao : "");

        let requisitosLoaded = loadRequisitosFromAPI(object.requisitos);
        let aprendizadoLoaded = loadAprendizadoFromAPI(object.aprendizado);

        let modulosLoaded = loadModulosFromAPI(object.modulos);

        setLastIdAprendizado(object.aprendizado.length)

        setRequisitosInputs(requisitosLoaded);
        setAprendizadoInputs(aprendizadoLoaded);
        setModulos(modulosLoaded);
        setoldLenghtArray(object.requisitos.length);
        setoldLenghtArrayModulos(object.modulos.length);
        setOldLenghtArrayAprendizado(object.aprendizado.length)
      })
      .catch((error) => {
        console.warn("Error requesting from API: " + error);
      });
  }

  function loadRequisitosFromAPI(requisitos) {
    let requisitosArray = [];

    requisitos.map((item) => {
      requisitosArray.push({ id: requisitosArray.length, text: item });
    });

    return requisitosArray;
  }

  function loadAprendizadoFromAPI(aprendizado) {
    let aprendizadoArray = [];
    aprendizado.map((item) => {
      aprendizadoArray.push({ id: aprendizadoArray.length, text: item });
    });
    return aprendizadoArray;
  }

  function loadModulosFromAPI(modulos) {
    let modulosArray = [];

    modulos.map((item) => {
      modulosArray.push({
        numModulo: item.numModulo,
        tituloModulo: item.tituloModulo,
        videosModulo: item.videosModulo,
        atividadesModulo: item.atividadesModulo,
      });
      lastIdModulos += 1;
    });
    return modulosArray;
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
      let modulosProv = [...modulosInput];
      modulosProv[index].tituloModulo =
        modulosProv[index].tituloModulo + event.nativeEvent.data;
      setModulos();
      setModulos(modulosProv);
    } else {
      let modulosProv = [...modulosInput];
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

  function removerModulo(numModulo) {
    let modulosProv = modulosInput;
    modulosProv.splice(getIndexById(numModulo), 1);
    modulosProv = [...modulosProv];
    setModulos(modulosProv);
  }
  function removerInputAprendizado(id) {
    let inputsAprendizado = [...aprendizadoInputs];
    inputsAprendizado.splice(
      inputsAprendizado.findIndex((input) => {
        return input.id === id;
      }),
      1
    );

    setAprendizadoInputs(inputsAprendizado);
  }

  function alterarTextoInputAprendizado(e, id) {
    if (e.nativeEvent.inputType !== "deleteContentBackward") {
      let aprendizado = aprendizadoInputs;
      aprendizado[id].text = aprendizado[id].text + e.nativeEvent.data;
      setAprendizadoInputs();
      setAprendizadoInputs(aprendizado);
    } else {
      let aprendizado = aprendizadoInputs;
      aprendizado[id].text = aprendizado[id].text.slice(
        0,
        aprendizado[id].text.length - 1
      );
      setAprendizadoInputs();
      setAprendizadoInputs(aprendizado);
    }
  }

  function solicitaçao() {
    let arrayRequisitos = [];

    let modulosProv = modulosInput;
    let arrayAprendizado = [];
    aprendizadoInputs.map((item) => {
      arrayAprendizado.push(item.text);
    });

    requisitosInputs.map((item) => {
      arrayRequisitos.push(item.text);
    });

    let url = cursoEditarById(idCurso);

    axios
      .put(
        url,
        {
          nome: newCurso.nome,
          image: newCurso.image,
          descricao: descInput,
          requisitos: arrayRequisitos,
          aprendizado: arrayAprendizado,
          modulos: modulosProv,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
          },
        }
      )
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

  function addRequisitos(idPrev) {
    setRequisitosInputs((value) => [...value, { id: idPrev, text: "" }]);
  }

  function alterarTextoRequisitos(e, id) {
    let indexArray = getIndexByIdRequisitos(id);

    if (e.nativeEvent.inputType !== "deleteContentBackward") {
      let requisitos = [...requisitosInputs];
      requisitos[indexArray].text =
        requisitos[indexArray].text + e.nativeEvent.data;
      setRequisitosInputs();
      setRequisitosInputs(requisitos);
    } else {
      let requisitos = [...requisitosInputs];
      requisitos[indexArray].text = requisitos[indexArray].text.slice(
        0,
        requisitos[indexArray].text.length - 1
      );
      setRequisitosInputs([]);
      setRequisitosInputs(requisitos);
    }
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

  function expandMoreModulo(numModulo) {
    let index = getIndexById(numModulo);
    const modulosProv = [...modulosInput];
    modulosProv[index].openModulo = !modulosProv[index].openModulo;
    setModulos(modulosProv);
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
    <div>
      {newCurso.nome !== "" ? (
        <div className="contEditCursoAdm">
          <div className="headerEditCurso">
            <label>Editar Curso</label>
          </div>
          <div className="bodyEditCurso">
            <div className="headCont">
              <div className="outImagemEditCurso">
                <div ref={imagemDiv} className="contImagemEditCurso">
                  <img
                    className="imagemEvento"
                    alt="Imagem do Evento"
                    src={newCurso.image}
                  />
                </div>
              </div>
            </div>
            <div className="outContInputsEditCurso">
              <div className="contInputsEditCurso">
                <div>
                  <label>Nome do curso</label>
                  <FormControl
                    value={newCurso.nome}
                    onChange={(e) =>
                      setnewCurso((prev) => {
                        return { ...prev, nome: e.target.value };
                      })
                    }
                    style={{ marginTop: "2rem", width: "80%" }}
                  />
                </div>
                <div>
                  <label>
                    Requisitos
                    <IconButton
                      sx={{ color: "#333" }}
                      onClick={() => {
                        addRequisitos(requisitosInputs.length);
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
                        {item.text !== "" ? (
                          <FormControl
                            key={item}
                            style={{ width: "95%", alignSelf: "center" }}
                            value={item.text}
                            onChange={(e) => {
                              alterarTextoRequisitos(e, item.id);
                            }}
                          />
                        ) : (
                          <FormControl
                            key={item}
                            style={{ width: "95%", alignSelf: "center" }}
                            onChange={(e) => {
                              alterarTextoRequisitos(e, item.id);
                            }}
                          />
                        )}
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
                        {item.text === "" ? (
                          <FormControl
                            key={item}
                            style={{ width: "95%", alignSelf: "center" }}
                            onChange={(e) => {
                              alterarTextoInputAprendizado(e, item.id);
                            }}
                          />
                        ) : (
                          <FormControl
                            key={item}
                            style={{ width: "95%", alignSelf: "center" }}
                            value={item.text}
                            onChange={(e) => {
                              alterarTextoInputAprendizado(e, item.id);
                            }}
                          />
                        )}

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
                    onChange={(e) => setdescInput(e.target.value)}
                    style={{ height: "100%" }}
                    as="textarea"
                    placeholder="Digite a descrição"
                  />
                </FloatingLabel>
              </div>
            </div>
            <div className="contModulosAddCursoAdm">
              <div className="headerModulosAddCursoAdm">
                <h4>Modulos do curso</h4>
                <Tooltip title="Adicionar modulo">
                  <IconButton onClick={() => adicionarModulo()}>
                    <AddCircle style={{ width: "30px", height: "30px" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="bodyModulosAddCursoAdm">
                <List
                  component="nav"
                  sx={{ width: "99.50%", maxWidth: "100%" }}
                >
                  <Divider />
                  {modulosInput.map((item) => {
                    return (
                      <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Divider />
                          <ListItem>
                            <ListItemButton
                              onClick={() => expandMoreModulo(item.numModulo)}
                              sx={{ justifyContent: "space-between" }}
                            >
                              {item.tituloModulo !== "" ? (
                                <TextField
                                  size="small"
                                  variant="outlined"
                                  type="text"
                                  value={item.tituloModulo}
                                  onChange={(e) => {
                                    alterarTituloModulo(
                                      e,
                                      item.numModulo,
                                      e.target.value
                                    );
                                  }}
                                />
                              ) : (
                                <TextField
                                  size="small"
                                  variant="outlined"
                                  type="text"
                                  onChange={(e) => {
                                    alterarTituloModulo(
                                      e,
                                      item.numModulo,
                                      e.target.value
                                    );
                                  }}
                                />
                              )}
                              {item.openModulo ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </ListItemButton>
                          </ListItem>
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
                        </div>
                        <Collapse
                          in={item.openModulo}
                          timeout="auto"
                          unmountOnExit
                        >
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
                                          sx={{
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <div style={{ display: "flex" }}>
                                            <ListItemIcon
                                              sx={{ alignItems: "center" }}
                                            >
                                              <NoteAddRounded />
                                            </ListItemIcon>
                                            {atividade.tituloAtividade !==
                                            "" ? (
                                              <TextField
                                                size="small"
                                                variant="outlined"
                                                type="text"
                                                value={
                                                  atividade.tituloAtividade
                                                }
                                                placeholder="Titulo da atividade"
                                                onChange={(e) => {
                                                  alterarTituloAtividade(
                                                    e,
                                                    item.numModulo,
                                                    atividade.numAtividade
                                                  );
                                                }}
                                              />
                                            ) : (
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
                                            )}
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
                                          {atividade.descricaoAtividade !==
                                          "" ? (
                                            <TextField
                                              size="small"
                                              variant="outlined"
                                              type="text"
                                              placeholder="Descrição da atividade"
                                              value={
                                                atividade.descricaoAtividade
                                              }
                                              onChange={(e) => {
                                                alterarDescricaoAtividade(
                                                  e,
                                                  item.numModulo,
                                                  atividade.numAtividade
                                                );
                                              }}
                                            />
                                          ) : (
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
                                          )}

                                          <div className="contInputArquivoAtividade">
                                            <Tooltip title="Selecionando outro arquivo, irá editar o arquivo anteriormente selecionada para essa atividade">
                                              <label className="avisoInputArquivoAtividadeEdit">
                                                AVISO
                                              </label>
                                            </Tooltip>
                                            <label>
                                              Selecionar Arquivo (Atividade)
                                            </label>
                                            {atividade.arquivoAtividade !==
                                            "" ? (
                                              <input
                                                id="inputFileAtividade"
                                                type="file"
                                                onChange={(e) =>
                                                  handleFileChanged(
                                                    e,
                                                    item.numModulo,
                                                    atividade.numAtividade
                                                  )
                                                }
                                              />
                                            ) : (
                                              <input
                                                id="inputFileAtividade"
                                                type="file"
                                                onChange={(e) =>
                                                  handleFileChanged(
                                                    e,
                                                    item.numModulo,
                                                    atividade.numAtividade
                                                  )
                                                }
                                              />
                                            )}
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
          <div className="footerEditCurso">
            <div className="contEnviarEditCurso">
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
                      Editar
                    </Button>
                  ) : (
                    <Tooltip title="Altere algum campo para poder editar-lo">
                      <span>
                        <Button variant="contained" color="success" disabled>
                          Editar
                        </Button>
                      </span>
                    </Tooltip>
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
      ) : (
        <div className="contEditCursoAdm">
          <Skeleton
            variant="text"
            style={{ width: "500px", height: "60px" }}
            sx={{ fontSize: "36px" }}
          />
          <div className="imageDivLoadingTela">
            <Skeleton variant="rounded" width={"640px"} height={"480px"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditarCursosAdm;
