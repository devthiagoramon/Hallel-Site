import React from "react";
import SelectDoacao from "../../../../../components/SelectDoacao";
import InputDoacao from "../../../../../components/InputDoacao";
import { AiFillPlusCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

const CompDoacaoObjeto = (props) => {
  let doacaoObjeto = props.infosComp;
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
        <SelectDoacao
          label="Informe o item para doação: "
          onChange={(e) => {
            props.handleChangeDoacao(props.index, "tipoItem", e.target.value);
          }}
        >
          <option value={"brinquedo"}>Brinquedo</option>
          <option value={"roupa"}>Roupa</option>
          <option value={"alimento"}>Alimento</option>
        </SelectDoacao>
        <InputDoacao
          onChange={(e) =>
            props.handleChangeDoacao(props.index, "quantidade", e.target.value)
          }
          label="Quantidade: "
        />
      </div>

      <AiFillPlusCircle
        color="#165336"
        size={45}
        className="iconOutLine"
        onClick={props.addComp}
      />
      <GiCancel
        color="#F33535"
        size={45}
        className="iconOutLine"
        onClick={props.deleteComp}
      />
    </div>
  );
};

export default CompDoacaoObjeto;
