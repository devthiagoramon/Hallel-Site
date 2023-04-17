import {
  AddCircleOutline,
  AddCircleOutlineOutlined,
  Label,
  RemoveCircle,
} from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  LinearProgress,
  Skeleton,
  Snackbar,
  Tooltip,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { FormControl, ProgressBar } from "react-bootstrap";
import "./editarCursoAdm.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

const EditarCursoAdm = () => {
  const [requisitosInputs, setRequisitosInputs] = useState([]);
  const [nomeInput, setNome] = useState("");
  var lastId = 0;
  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();
  const [btnHabilitado, setbtnHabilitado] = useState();

  const { idCurso } = useParams();

  const [oldLenghtArray, setoldLenghtArray] = useState(0);

  const cursoTemplate = {
    nome: "",
    image: "",
    requisitos: [],
  };

  const [oldCurso, setoldCurso] = useState(cursoTemplate);
  const [newCurso, setnewCurso] = useState(cursoTemplate);

  const [enviando, setenviando] = useState(false);
  const [enviadoSucesso, setenviadoSucesso] = useState(false);
  const [enviadoErro, setEnviadoErro] = useState(false);

  useEffect(() => {
    if (
      oldCurso.nome !== newCurso.nome ||
      oldCurso.image !== newCurso.image ||
      oldLenghtArray !== requisitosInputs.length
    ) {
      setbtnHabilitado(true);
    } else {
      setbtnHabilitado(false);
    }
  }, [newCurso, requisitosInputs]);

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
    console.log(inputs);
    console.log(id);
    lastId -= 1;
    inputs.splice(
      inputs.findIndex((item) => {
        return item.id === id;
      }),
      1
    );
    console.log(requisitosInputs);
    inputs = [...inputs];
    setRequisitosInputs(inputs);
  }

  function getIndexById(id) {
    let inputs = requisitosInputs;
    let index = 0;
    index = inputs.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    return index;
  }

  useMemo(() => loadFromAPI(), []);

  function loadFromAPI() {
    let url = "http://localhost:8080/api/cursos/" + idCurso;

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
        };
        setoldCurso(loadingObject);
        setnewCurso(loadingObject);

        let requisitosLoaded = loadRequisitosFromAPI(object.requisitos);

        console.log(requisitosLoaded);

        setRequisitosInputs(requisitosLoaded);
        setoldLenghtArray(object.requisitos.length);
      })
      .catch((error) => {
        console.warn("Error requesting from API: " + error);
      });
  }

  function loadRequisitosFromAPI(requisitos) {
    let requisitosArray = [];

    requisitos.map((item) => {
      requisitosArray.push({ id: lastId, text: item });
      lastId += 1;
    });

    return requisitosArray;
  }

  function solicitaçao() {
    let arrayRequisitos = [];

    requisitosInputs.map((item) => {
      arrayRequisitos.push(item.text);
    });

    let url = "http://localhost:8080/api/cursos/update/" + idCurso;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({
        nome: newCurso.nome,
        image: newCurso.image,
        requisitos: arrayRequisitos,
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

  function addRequisitos(idPrev) {
    setRequisitosInputs((value) => [...value, { id: idPrev, text: "" }]);
  }

  function alterarTextoRequisitos(e, id) {
    let indexArray = getIndexById(id);

    if (e.nativeEvent.inputType !== "deleteContentBackward") {
      let requisitos = requisitosInputs;
      requisitos[indexArray].text =
        requisitos[indexArray].text + e.nativeEvent.data;
      setRequisitosInputs();
      setRequisitosInputs(requisitos);
    } else {
      let requisitos = requisitosInputs;
      requisitos[indexArray].text = requisitos[indexArray].text.slice(
        0,
        requisitos[indexArray].text.length - 1
      );
      setRequisitosInputs([]);
      setRequisitosInputs(requisitos);
    }
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

export default EditarCursoAdm;
