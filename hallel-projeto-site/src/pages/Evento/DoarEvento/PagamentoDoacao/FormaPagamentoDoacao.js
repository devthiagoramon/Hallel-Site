import React, { useEffect, useState } from "react";
import {
  ButtonBoleto,
  ButtonCartao,
  ButtonPix,
} from "../../../../components/BtnFormasPagamento";
import { OutlinedButtonHallel } from "../../../../components/BtnHallel";

const FormaPagamentoDoacao = () => {
  const [formaSelecionada, setFormaSelecionada] = useState("");

  return (
    <div className="cont-forma-pagamento-doacao">
      <label className="label-doacao-hallel-strong">
        Escolha sua forma de pagamento
      </label>
      <div className="formas-pagamento-doacao">
        {formaSelecionada === "pix" ? (
          <ButtonPix
            onClick={() => {
              setFormaSelecionada("pix");
            }}
            isSelecionado
          />
        ) : (
          <ButtonPix
            onClick={() => {
              setFormaSelecionada("pix");
            }}
          />
        )}
        {formaSelecionada === "cartao" ? (
          <ButtonCartao
            onClick={() => {
              setFormaSelecionada("cartao");
            }}
            isSelecionado
          />
        ) : (
          <ButtonCartao
            onClick={() => {
              setFormaSelecionada("cartao");
            }}
          />
        )}

        {formaSelecionada === "boleto" ? (
          <ButtonBoleto
            onClick={() => {
              setFormaSelecionada("boleto");
            }}
            isSelecionado
          />
        ) : (
          <ButtonBoleto
            onClick={() => {
              setFormaSelecionada("boleto");
            }}
          />
        )}
      </div>
      <OutlinedButtonHallel
        style={{
          width: "40%",
          padding: "0.5rem",
          marginTop: "50px",
          fontSize: "28px",
        }}
      >
        Continuar
      </OutlinedButtonHallel>
    </div>
  );
};

export default FormaPagamentoDoacao;
