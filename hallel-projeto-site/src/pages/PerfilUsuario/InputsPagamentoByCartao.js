import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";

const InputsPagamentoByCartao = ({ infoBancariaAssociado }) => {
  return (
    <>
      {infoBancariaAssociado !== null ? (
        <div className="body_modal_pagar_associacao">
          <label>Número do Cartão</label>
          <input
            id="num_cartao_associado"
            className="input_VA"
            value={infoBancariaAssociado.numeroCartao}
            disabled
          />
          <div className="input_bodys2_VA">
            <label style={{ fontSize: "16px", fontWeight: 400 }}>
              Data de Validade
            </label>
            <label style={{ fontSize: "16px", fontWeight: 400 }}>CVC</label>
            <DatePicker
              className="input_VA"
              views={["year", "month"]}
              id="data_validade_associado"
              format="MM/YY"
              sx={{ width: "60%", height: "50px", padding: 0 }}
              disabled
              value={dayjs(infoBancariaAssociado.dataValidadeCartao)}
            />
            <input
              id="cvc_cartao_associado"
              value={infoBancariaAssociado.cvc}
              className="input_VA"
              disabled
            />
          </div>
          <label>Nome do titular</label>
          <input
            id="nome_titular_cartao"
            className="input_VA"
            value={infoBancariaAssociado.nomeTitular}
            disabled
          />
          <label>Endereço</label>
          <input
            id="endereco_titular_cartao"
            className="input_VA"
            value={infoBancariaAssociado.endereco}
            disabled
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default InputsPagamentoByCartao;
