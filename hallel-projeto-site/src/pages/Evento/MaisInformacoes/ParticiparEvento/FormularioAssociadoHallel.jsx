import { Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import BtnHallel from "../../../../components/BtnHallel/ButtonHallel";

const FormularioAssociadoHallel = ({
  usuarioEvento,
  handleParticiparEvento,
}) => {
  return (
    <div className="cont_form_part_evento">
      <div className="header_form_part_evento">
        <label style={{ fontSize: "1.5em", fontWeight: "700" }}>
          Participar de um Evento
        </label>
      </div>
      <div className="body_form_part_evento">
        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
          Nome: {usuarioEvento.nome}
        </label>
        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
          Email: {usuarioEvento.email}
        </label>
        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
          Idade: {usuarioEvento.idade}
        </label>

        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
          CPF: {usuarioEvento.cpf}
        </label>

        <div className="body_cartao_participar_evento">
          <div className="cont_cartao_participar_evento">
            <Typography variant="h5">Cartão</Typography>
            <Typography variant="subtitle1">
              Número do cartão: {usuarioEvento.cartaoCredito.numeroCartao}{" "}
            </Typography>
            <Typography variant="subtitle1">
              Nome do Titular: {usuarioEvento.cartaoCredito.nomeTitular}{" "}
            </Typography>
            <Typography variant="subtitle1">
              CVC: {usuarioEvento.cartaoCredito.cvc}{" "}
            </Typography>
            <Typography variant="subtitle1">
              Data de Validade:{" "}
              {dayjs(usuarioEvento.cartaoCredito.dataValidadeCartao).format(
                "MM/YY"
              )}{" "}
            </Typography>
            <Typography variant="subtitle1">
              Endereço: {usuarioEvento.cartaoCredito.endereco}{" "}
            </Typography>
          </div>
        </div>
      </div>
      <div className="footer_form_part_evento">
        <BtnHallel sucesso onClick={handleParticiparEvento}>
          Participar
        </BtnHallel>
      </div>
    </div>
  );
};

export default FormularioAssociadoHallel;
