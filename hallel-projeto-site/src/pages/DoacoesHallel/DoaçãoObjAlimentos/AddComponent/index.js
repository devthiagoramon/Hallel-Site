import React from "react";
import SelectDoacao from "../../../../components/SelectDoacao";
import InputDoacao from "../../../../components/InputDoacao";
import { AiFillPlusCircle } from "react-icons/ai";

import "../doacoesObjAlimentos.css";
import { GiCancel } from "react-icons/gi";

export default function AddComponentDoacao(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        marginBottom: "20px",
        flexDirection: "row",
      }}
    >
      <div className="container-doacoes-form">
        <SelectDoacao label="Informe o item para doação: ">
          <option>Brinquedos</option>
        </SelectDoacao>
        <InputDoacao label="Quantidade: " />
      </div>

      <AiFillPlusCircle
        color="#165336"
        size={45}
        className="iconOutLine"
        onClick={props.onClick}
      />
      <GiCancel
        color="#F33535"
        size={45}
        className="iconOutLine"
        onClick={props.onCancel}
      />
    </div>
  );
}
