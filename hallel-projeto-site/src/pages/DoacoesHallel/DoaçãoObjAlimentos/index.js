import React from "react";

import "./doacoesObjAlimentos.css";
import SelectDoacao from "../../../components/SelectDoacao";
import { AiFillPlusCircle, AiOutlinePlus } from "react-icons/ai";
import InputDoacao from "../../../components/InputDoacao";
import AddComponentDoacao from "./AddComponent";
import { useState } from "react";

import { GiConfirmed } from 'react-icons/gi'

export default function DoacoesObjAlimentos(props) {


  const [isRegistred, setIsRegistred] = useState(false);
  const [quantidade, setQuantidade] = useState(0);

  const replicarComponente = () => {
    if (quantidade <= 5) {
      setQuantidade(quantidade + 1);
    } else {
      alert('você só pode doar até 5 itens.')
    }
  };

  const apagarComponente = () => {
    if (quantidade === 0) {
      alert("você não pode apagar este componente")
    }else{
      setQuantidade(quantidade - 1)
    }
  }

  return (
    <div className="div-main-doacao-obj">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20vh",
        }}
      >
        <p id="titleDoacao">Doação de objetos ou alimentos</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20vh",
          flexDirection: 'column',
          marginTop: '10px',
        }}
      >
        <AddComponentDoacao
          onClick={replicarComponente}
          onCancel={apagarComponente}
        />
      </div>

      {[...Array(quantidade)].map((_, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "20vh",
            flexDirection: 'column',
            marginTop: '10px',
            marginLeft: '20px'
          }}
        >
          <AddComponentDoacao
            key={index}
            onClick={replicarComponente}
            onCancel={apagarComponente}
          />
        </div>
      ))}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "20vh",
      }}>
        <div className="div-button-registrar-doacao">
          <div className="button-registrar-doacao" onClick={() => setIsRegistred(!isRegistred)}>
            <label>
              Registrar
            </label>
          </div>
          {isRegistred ?
            <GiConfirmed
              style={{ margin: '10px' }}
              size={30}
            />
            :
            <></>
          }
        </div>
      </div>
    </div>
  );
}
