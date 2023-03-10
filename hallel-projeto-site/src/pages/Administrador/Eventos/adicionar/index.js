import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./style.css";
import addImageIcon from "./../../../../images/addImage.svg";
import addCircle from "./../../../../images/addCircle.svg";
import deleteIcon from "./../../../../images/deleteIcon.svg";

const AdicionarEvento = () => {
  const [tituloInput, setTituloInput] = useState();
  const [imagemInput, setImagemInput] = useState("");
  const tituloDiv = useRef();
  const imagemDiv = useRef();
  const imagemLabelInformativoDiv = useRef();
  const imagemLabelInformativoLabel = useRef();
  const [lastId, setLastId] = useState(0);
  const [inputsArray, setinputsArray] = useState([]);

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
    const valueBase = { id: lastId, nome: "" };
    setinputsArray((state) => [...state, { ...valueBase }]);
    setLastId(lastId + 1);
  }

  function removerInput(e) {
    console.log(e.target.attributes.value.value);
    let inputs = inputsArray;
    inputs.splice(e.target.attributes.value.value);
    inputs = [...inputs]
    setinputsArray(inputs);
  }

  return (
    <div>
      <div className="containerPrincipal">
        <div className="headCont">
          <input
            ref={tituloDiv}
            name="tituloInput"
            className="tituloEvento"
            type="text"
            placeholder="Titulo *"
          />
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
          <label className="lblDescEvento">Descrição</label>
          <textarea
            className="descEvento"
            type="text"
            placeholder="Descrição *"
          />
        </div>
        <hr className="divisao" />
        <div className="contDetalhes">
          <div className="contDetalhesEsquerda">
            <label>Data:</label>
            <input placeholder="11/11/2011" />
            <label>Horário:</label>
            <input placeholder="20:30" />
            <label>Endereço:</label>
            <textarea placeholder="Av. Amazonas, 1113 Iranduba, AM, 69415-000" />
          </div>
          <div className="contDetalhesDireita">
            <div className="headPalestrantes">
              <label>Colaboradores e Palestrantes</label>
              <img
                src={addCircle}
                onClick={addNovoPalestrante}
                alt="Adicionar Palestrante"
              />
            </div>
            <div className="bodyPalestrante">
              {inputsArray.length === 0 ? (
                ""
              ) : (
                <div>
                  {inputsArray.map((item) => {
                    return (
                      <div className="inputPalestrante" key={item.id}>
                        <input placeholder="Nome do palestrantes" />
                        <img
                          src={deleteIcon}
                          alt="Deletar palestrante"
                          value={item.id}
                          onClick={removerInput}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicionarEvento;
