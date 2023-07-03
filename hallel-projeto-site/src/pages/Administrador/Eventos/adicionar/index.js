import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./style.css";
import addImageIcon from "./../../../../images/addImage.svg";
import addCircle from "./../../../../images/addCircle.svg";
import deleteIcon from "./../../../../images/deleteIcon.svg";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { Button, IconButton, TextareaAutosize } from "@mui/material";
import { AddLocationRounded, Save } from "@mui/icons-material";
import axios from "axios";
import ModalListarLocalEvento from "../locais_evento/modalListarLocaisEvento/ModalListarLocalEvento";
import { MuiFileInput } from "mui-file-input";

const AdicionarEvento = () => {
  const [tituloInput, setTituloInput] = useState();
  const [imagemInput, setImagemInput] = useState("");
  const tituloDiv = useRef();
  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();
  const [inputsArray, setinputsArray] = useState([]);
  const addPalestrante = useRef();
  const [btnHabilitado, setbtnHabilitado] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const eventoTemplate = {
    titulo: "",
    descricao: "",
    date: "",
    horario: "",
    localEvento: null,
    imagem: "",
    palestrantes: [],
  };

  const [evento, setevento] = useState(eventoTemplate);

  useEffect(() => {
    if (
      evento.titulo !== "" &&
      evento.descricao !== "" &&
      evento.horario !== "" &&
      evento.date !== "" &&
      evento.localEvento !== null
    ) {
      setbtnHabilitado(true);
    } else {
      setbtnHabilitado(false);
    }
  }, [evento]);

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

  function addNovoPalestrante() {
    const valueBase = { id: inputsArray.length, nome: "" };
    setinputsArray((state) => [...state, { ...valueBase }]);
  }

  function removerInput(e) {
    let inputs = inputsArray;
    inputs.splice(
      inputs.findIndex((item) => {
        return item.id === e.target.attributes.value.value;
      }),
      1
    );
    inputs = [...inputs];
    setinputsArray(inputs);
  }

  const enviarEvento = () => {
    let url = "http://localhost:8080/api/administrador/evento/create"

    axios.post(url, {
      ...evento
    }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })

  }

  const abrirModalLocalizacao = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseLocaisEvento = () => {
    setAnchorEl(null);
  }

  function setLocalEvento(localEvento) {
    setevento((prevState) => {
      return { ...prevState, localEvento };
    })
  }

  const onImageSelectedMui = (e) => {
    const file = e;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        setImagemInput(dataURL);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <div className="containerPrincipal">
        <label>Adicionar eventos</label>

        <div className="headCont">
          <div className="head_cont_inputs">
            <div className="head_cont_inputs_texts">
              <Tooltip sx={{ width: "100%" }} title="Obrigatório" placement="right-start">
                <label className="lblTituloEvento">Titulo <span className="obrigatorio">*</span></label>
                <input
                  ref={tituloDiv}
                  name="tituloInput"
                  className="tituloEvento"
                  type="text"
                  placeholder="Titulo *"
                  onChange={(e) =>
                    setevento((prevState) => {
                      return { ...prevState, titulo: e.target.value };
                    })
                  }
                />
              </Tooltip>
              <div className="contDescricaoEvento">
                <label className="lblDescEvento">
                  Descrição <span className="obrigatorio">*</span>
                </label>
                <Tooltip title="Obrigatório" placement="right-start">
                  <textarea
                    className="descEvento"
                    type="text"
                    placeholder="Descrição..."
                    onChange={(e) =>
                      setevento((prevState) => {
                        return { ...prevState, descricao: e.target.value };
                      })
                    }
                  />
                </Tooltip>
              </div>
            </div>
            <div className="head_cont_inputs_image">
              <div className="contOutImgEvento">
                <div ref={imagemDiv} className="contImagemEvento">
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
                    <div className="contImagemEventoInner">
                      <img
                        className="imagemEvento"
                        alt="Imagem do Evento"
                        src={imagemInput}
                      />
                      <MuiFileInput sx={{width: "100%", mt: 2}} onChange={onImageSelectedMui}/>

                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="divisao" />
        <div className="contDetalhes">
          <div className="contDetalhesEsquerda">
            <label>
              Data <span className="obrigatorio">*</span>:
            </label>
            <Tooltip title="Obrigatório" placement="right-start">
              <input
                placeholder="11/11/2011"
                onChange={(e) =>
                  setevento((prevState) => {
                    return { ...prevState, date: e.target.value };
                  })
                }
              />
            </Tooltip>
            <label>
              Horário <span className="obrigatorio">*</span>:
            </label>
            <Tooltip title="Obrigatório" placement="right-start">
              <input
                placeholder="20:30"
                onChange={(e) =>
                  setevento((prevState) => {
                    return { ...prevState, horario: e.target.value };
                  })
                }
              />
            </Tooltip>
            <label>
              Local do Evento <span className="obrigatorio">*</span>:
            </label>
            <Tooltip title="Obrigatório" placement="right-start">
              {evento.localEvento === null
                ?
                <IconButton sx={{ width: "35px" }} onClick={abrirModalLocalizacao}>
                  <AddLocationRounded sx={{ width: "35px", color: "#252525" }} />
                </IconButton>
                :
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label style={{ fontSize: "18px", width: "80%" }}>
                    {evento.localEvento.localizacao}
                  </label>
                  <IconButton sx={{ width: "35px" }} onClick={abrirModalLocalizacao}>
                    <AddLocationRounded sx={{ width: "35px", color: "#252525" }} />
                  </IconButton>
                </div>
              }
            </Tooltip>
          </div>
          <div className="contDetalhesDireita">
            <div className="headPalestrantes">
              <label>Colaboradores e Palestrantes </label>
              <img
                src={addCircle}
                onClick={addNovoPalestrante}
                alt="Adicionar Palestrante"
                ref={addPalestrante}
              />
            </div>
            <div className="bodyPalestrante">
              {inputsArray.length === 0 ? (
                ""
              ) : (
                <div>
                  {inputsArray.map((item) => {
                    return (
                      <motion.div
                        className="inputPalestrante"
                        key={item.id}
                        initial={{ width: "10%" }}
                        animate={{ width: "100%" }}
                      >
                        <input placeholder="Nome do palestrantes" />
                        <motion.img
                          src={deleteIcon}
                          alt="Deletar palestrante"
                          value={item.id}
                          onClick={removerInput}
                          initial={{ scale: 0.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="submitContainer">
          {btnHabilitado === false ? (
            <Tooltip title="Preencha todos os campos obrigatorios com *">
              <span>
                <Button variant="contained" color="success" disabled>
                  Salvar
                </Button>
              </span>
            </Tooltip>
          ) : (
            <Button variant="contained" color="success" onClick={enviarEvento}>
              Salvar
            </Button>
          )}
        </div>
        <ModalListarLocalEvento handleCloseLocaisEvento={handleCloseLocaisEvento} anchorEl={anchorEl} setAnchorEl={setAnchorEl} setLocalEvento={setLocalEvento} />
      </div>
    </div>
  );
};

export default AdicionarEvento;
