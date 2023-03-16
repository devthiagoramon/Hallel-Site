import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./style.css";
import addImageIcon from "./../../../../images/addImage.svg";
import addCircle from "./../../../../images/addCircle.svg";
import deleteIcon from "./../../../../images/deleteIcon.svg";
import { motion } from "framer-motion";
import Tooltip from '@mui/material/Tooltip';
import { Button, TextareaAutosize } from "@mui/material";
import { Save } from "@mui/icons-material";

const AdicionarEvento = () => {
  const [tituloInput, setTituloInput] = useState();
  const [imagemInput, setImagemInput] = useState("");
  const tituloDiv = useRef();
  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();
  const [lastId, setLastId] = useState(0);
  const [inputsArray, setinputsArray] = useState([]);
  const addPalestrante = useRef();
  const [btnHabilitado, setbtnHabilitado] = useState(false);

  function verificando(e) {
    if (e.value.name) {
      if (e.value.name === "") {
        setTituloInput("");
      }
    }
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

  function addNovoPalestrante() {
    if (inputsArray.length < 6) {
      const valueBase = { id: inputsArray.length, nome: "" };
      setinputsArray((state) => [...state, { ...valueBase }]);
      setLastId();
    } else {

    }
  }

  function removerInput(e) {
    console.log(e.target.attributes.value.value);
    let inputs = inputsArray;
    inputs.splice(e.target.attributes.value.value - 1, 1);
    inputs = [...inputs]
    setinputsArray(inputs);
  }

  return (
    <div>
      <div className="containerPrincipal">
        <div className="headCont">
          <Tooltip title="Obrigatório" placement="right-start">
            <input
              ref={tituloDiv}
              name="tituloInput"
              className="tituloEvento"
              type="text"
              placeholder="Titulo *"
            />
          </Tooltip>
        </div>
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
                  <span>Resolução: 1920x768</span>
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
        <div className="contDescricaoEvento">
          <label className="lblDescEvento">Descrição <span className="obrigatorio">*</span></label>
          <Tooltip title="Obrigatório" placement="right-start">
            <textarea
              className="descEvento"
              type="text"
              placeholder="Descrição..."

            />
          </Tooltip>
        </div>
        <hr className="divisao" />
        <div className="contDetalhes">
          <div className="contDetalhesEsquerda">
            <label>Data <span className="obrigatorio">*</span>:</label>
            <Tooltip title="Obrigatório" placement="right-start">
              <input placeholder="11/11/2011" />
            </Tooltip>
            <label>Horário <span className="obrigatorio">*</span>:</label>
            <Tooltip title="Obrigatório" placement="right-start">
              <input placeholder="20:30" />
            </Tooltip>
            <label>Endereço <span className="obrigatorio">*</span>:</label>
            <Tooltip title="Obrigatório" placement="right-start">
              <TextareaAutosize placeholder="Av. Amazonas, 1113 Iranduba, AM, 69415-000" />
            </Tooltip>
          </div>
          <div className="contDetalhesDireita">
            <div className="headPalestrantes">
              <label>Colaboradores e Palestrantes</label>
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
                      <motion.div className="inputPalestrante" key={item.id} initial={{ width: "10%" }} animate={{ width: "100%" }}>

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
          {btnHabilitado === false ?
            <Tooltip title="Preencha todos os campos obrigatorios com *">
              <span>
                <Button variant="contained" color="success" disabled>Salvar</Button>
              </span>
            </Tooltip>
            : <Button variant="contained" color="success">Salvar</Button>
          }
        </div>
      </div>
    </div>
  );
};

export default AdicionarEvento;
