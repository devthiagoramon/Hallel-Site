import React, { useEffect, useRef, useState } from "react";
import "../adicionar/style.css";
import addImageIcon from "./../../../../images/addImage.svg";
import addCircle from "./../../../../images/addCircle.svg";
import deleteIcon from "./../../../../images/deleteIcon.svg";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { Button, IconButton, Switch } from "@mui/material";
import { AddLocationRounded } from "@mui/icons-material";
import ModalListarLocalEvento from "../locais_evento/modalListarLocaisEvento/ModalListarLocalEvento";
import { MuiFileInput } from "mui-file-input";
import { useNavigate, useParams } from "react-router-dom";
import {
  eventoAtualizarService,
  eventoListarPorIdService,
} from "../../../../service/EventoService";
import formatarData from "../../../../utils/Functions";
import GuiaAdm from "../../../../components/GuiaAdm";
import dayjs from "dayjs";

const EditarEventoAdm = () => {
  const tituloDiv = useRef();
  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();
  const [inputsArray, setinputsArray] = useState([]);
  const [lastId, setlastId] = useState(0);
  const addPalestrante = useRef();
  const [btnHabilitado, setbtnHabilitado] = useState(false);
  const [isRequest, setisRequest] = useState(false);

  const navigator = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const { idEvento } = useParams();

  const eventoTemplate = {
    titulo: "",
    descricao: "",
    date: "",
    horario: "",
    localEventoRequest: null,
    imagem: "",
    palestrantes: [],
    destaque: false,
  };
  const [evento, setevento] = useState(eventoTemplate);
  const [eventoAntigo, seteventoAntigo] = useState(eventoTemplate);

  useEffect(() => {
    eventoListarPorIdService(idEvento).then((response) => {
      console.log(response);
      seteventoAntigo(response);
      setevento({
        titulo: response.titulo,
        descricao: response.descricao,
        date: response.date,
        horario: response.horario,
        localEventoRequest: response.localEvento,
        imagem: response.imagem,
        destaque: response.destaque,
      });
      if (response.palestrantes !== null && isRequest === false) {
        loadInputsArray(response.palestrantes);
        setisRequest(true);
      }
    });
  }, []);

  function loadInputsArray(arrayPalestrantes) {
    let ids = 0;
    let inputsProv = [...inputsArray];
    arrayPalestrantes.forEach((palestranteNome) => {
      inputsProv.push({ id: ids, nome: palestranteNome });
      ids++;
    });
    setlastId(ids);
    setinputsArray(inputsProv);
  }

  useEffect(() => {
    if (
      evento.titulo !== eventoAntigo.titulo ||
      evento.descricao !== eventoAntigo.descricao ||
      evento.horario !== eventoAntigo.horario ||
      evento.date !== eventoAntigo.date ||
      evento.localEventoRequest !== eventoAntigo.localEventoRequest
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
      setevento((prev) => {
        return { ...prev, imagem: reader.result };
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
      const dataURL = e.target.result;
      setevento((prev) => {
        return { ...prev, imagem: dataURL };
      });
    };

    reader.readAsDataURL(selectedFile);
  }

  function addNovoPalestrante() {
    setinputsArray((state) => [...state, { id: lastId, nome: "" }]);
    setlastId(lastId + 1);
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

  useEffect(() => {
    let palestranteDTO = [];

    let inputsProv = [...inputsArray];

    inputsProv.forEach((item) => {
      palestranteDTO.push(item.nome);
    });

    setevento((prev) => {
      return { ...prev, palestrantes: palestranteDTO };
    });
  }, [inputsArray]);

  const atualizarEvento = () => {
    let eventoToRequest = evento;
    eventoToRequest.date = dayjs(evento.date).toDate();
    eventoAtualizarService(idEvento, evento).then((response) => {
      if (response) {
        alert("Evento alterado");
        navigator("/administrador/eventos");
      } else {
        // deu errado
      }
    });
  };

  const abrirModalLocalizacao = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseLocaisEvento = () => {
    setAnchorEl(null);
  };

  function setLocalEvento(localEvento) {
    setevento((prevState) => {
      return { ...prevState, localEventoRequest: localEvento };
    });
  }

  const onImageSelectedMui = (e) => {
    const file = e;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        setevento((prev) => {
          return { ...prev, imagem: dataURL };
        });
      };

      reader.readAsDataURL(file);
    }
  };

  function getPalestranteIndex(id) {
    let index = inputsArray.findIndex((item) => {
      return item.id === id;
    });

    return index;
  }

  function changeNomePalestrante(event, id) {
    let indexPalestrante = getPalestranteIndex(id);

    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      let inputsProv = [...inputsArray];
      inputsProv[indexPalestrante].nome =
        inputsProv[indexPalestrante].nome + event.nativeEvent.data;
      setinputsArray();
      setinputsArray(inputsProv);
    } else {
      let inputsProv = [...inputsArray];
      inputsProv[indexPalestrante].nome = inputsProv[
        indexPalestrante
      ].nome.slice(0, inputsProv[indexPalestrante].nome.length - 1);
      setinputsArray([]);
      setinputsArray(inputsProv);
    }
  }

  function getValueInputById(id) {
    let indexPalestrante = getPalestranteIndex(id);
    let inputsProv = [...inputsArray];
    return inputsProv[indexPalestrante].nome;
  }

  return (
    <GuiaAdm title={"Editar evento"}>
      <div className="containerPrincipal">
        <label
          id="btnCancelarEditarEvento"
          onClick={() => navigator("/administrador/eventos")}
        >
          Cancelar
        </label>
        <div className="headCont">
          <div className="head_cont_inputs">
            <div className="head_cont_inputs_texts">
              <Tooltip
                sx={{ width: "100%" }}
                title="Obrigatório"
                placement="right-start"
              >
                <label className="lblTituloEvento">
                  Titulo <span className="obrigatorio">*</span>
                </label>
                <input
                  ref={tituloDiv}
                  name="tituloInput"
                  className="tituloEvento"
                  type="text"
                  placeholder="Titulo *"
                  value={evento.titulo}
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
                    value={evento.descricao}
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
                  {evento.imagem === null ? (
                    <div
                      className="innerImagem"
                      onDrop={dropImagemDiv}
                      onDragOver={imagemSobreDiv}
                      ref={imagemLabelInformativoDiv}
                    >
                      <label className="labelInputImagem" for="selecao-arquivo">
                        <img src={addImageIcon} alt="adicionarImagem" />
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
                        src={evento.imagem}
                      />
                      <MuiFileInput
                        sx={{ width: "100%", mt: 2 }}
                        value={evento.imagem}
                        onChange={onImageSelectedMui}
                      />
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
            <label>Destacar Evento:</label>
            <Tooltip title="Destacar o evento para todos">
              <Switch
                checked={evento.destaque}
                onChange={() => {
                  setevento((prev) => {
                    return { ...prev, destaque: !evento.destaque };
                  });
                }}
                color="secondary"
              />
            </Tooltip>
            <label>
              Data <span className="obrigatorio">*</span>:
            </label>
            <Tooltip title="Obrigatório" placement="right-start">
              <input
                placeholder="11/11/2011"
                value={formatarData(evento.date)}
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
                placeholder="20h30"
                value={evento.horario}
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
              {evento.localEventoRequest === null ? (
                <IconButton
                  sx={{ width: "35px" }}
                  onClick={abrirModalLocalizacao}
                >
                  <AddLocationRounded
                    sx={{ width: "35px", color: "#252525" }}
                  />
                </IconButton>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label style={{ fontSize: "18px", width: "80%" }}>
                    {evento.localEventoRequest.localizacao}
                  </label>
                  <IconButton
                    sx={{ width: "35px" }}
                    onClick={abrirModalLocalizacao}
                  >
                    <AddLocationRounded
                      sx={{ width: "35px", color: "#252525" }}
                    />
                  </IconButton>
                </div>
              )}
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
                  {inputsArray?.map((item) => {
                    return (
                      <motion.div
                        className="inputPalestrante"
                        key={item.id}
                        initial={{ width: "10%" }}
                        animate={{ width: "100%" }}
                      >
                        <input
                          placeholder="Nome do palestrantes"
                          value={getValueInputById(item.id)}
                          onChange={(e) => changeNomePalestrante(e, item.id)}
                        />
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
                  Editar
                </Button>
              </span>
            </Tooltip>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={atualizarEvento}
            >
              Editar
            </Button>
          )}
        </div>
        <ModalListarLocalEvento
          handleCloseLocaisEvento={handleCloseLocaisEvento}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          setLocalEvento={setLocalEvento}
        />
      </div>
    </GuiaAdm>
  );
};

export default EditarEventoAdm;
