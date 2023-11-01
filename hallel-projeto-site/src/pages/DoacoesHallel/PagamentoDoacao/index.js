import React from "react";
import HeaderDoacoes from "../HeaderDoacoes";
import { OutlinedButtonHallel } from "../../../components/BtnHallel";
import InfoUserDoacao from "./InfoUserDoacao";
import FormaPagamentoDoacao from "./FormaPagamentoDoacao";

const PagamentoDoacao = ({setEtapa}) => {
  return (
    <div>
      <HeaderDoacoes text={"Pagamento"} />
      <InfoUserDoacao />
      <FormaPagamentoDoacao setEtapa={setEtapa}/>
    </div>
  );
};

export default PagamentoDoacao;
