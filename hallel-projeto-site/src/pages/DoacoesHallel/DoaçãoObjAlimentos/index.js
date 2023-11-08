import React from "react";

import "./doacoesObjAlimentos.css";
import SelectDoacao from "../../../components/SelectDoacao";
import { AiOutlinePlus } from "react-icons/ai";
import InputDoacao from "../../../components/InputDoacao";

export default function DoacoesObjAlimentos(props) {
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
          width: "80%",
          flexDirection: "row",
        }}
      >
        <div className="container-doacoes-form">
          <SelectDoacao label="Informe o item para doação: ">
            <option>Brinquedos</option>
          </SelectDoacao>
          <InputDoacao label="Quantidade: "/>
        </div>

        <AiOutlinePlus color="#165336" size={45} style={{marginLeft: '25px'}}/>
      </div>
    </div>
  );
}
