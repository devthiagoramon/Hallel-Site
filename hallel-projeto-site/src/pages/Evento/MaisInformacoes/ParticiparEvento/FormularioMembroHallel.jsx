import React from "react";
import { IconButton, Tooltip, Typography } from "@mui/material";
import dayjs from "dayjs";
import { AddRounded } from "@mui/icons-material";
import InputHallel from "../../../../components/InputHallel/InputHallel";
import BtnHallel from "../../../../components/BtnHallel/ButtonHallel";

const FormularioMembroHallel = ({
  usuarioEvento,
  SetopenAdicionarCartao,
  handleAlterarTexto,
  errorInputs,
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
        {usuarioEvento.cpf !== "" ? (
          <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
            CPF: {usuarioEvento.cpf}
          </label>
        ) : (
          <>
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>CPF</label>
            {errorInputs.cpf ? (
              <InputHallel
                name="cpf"
                style={{ width: 350 }}
                type="text"
                placeholder="Somente números"
                value={usuarioEvento.cpf}
                onChange={handleAlterarTexto}
                error
              />
            ) : (
              <InputHallel
                name="cpf"
                style={{ width: 350 }}
                type="text"
                placeholder="Somente números"
                value={usuarioEvento.cpf}
                onChange={handleAlterarTexto}
              />
            )}
          </>
        )}

        <div className="header_cartao_participar_evento">
          <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
            Adicionar Cartão
          </label>
          <Tooltip title="Adicionar Cartão">
            <IconButton
              onClick={() => {
                SetopenAdicionarCartao(true);
              }}
            >
              <AddRounded />
            </IconButton>
          </Tooltip>
        </div>
        <div className="body_cartao_participar_evento">
          {errorInputs.cartaoCredito ? (
            <Typography color="#F1948A" variant="overline">
              Nenhum cartão adicionado
            </Typography>
          ) : (
            <>
              {usuarioEvento.cartaoCredito != null ? (
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
                    {dayjs(
                      usuarioEvento.cartaoCredito.dataValidadeCartao
                    ).format("MM/YY")}{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    Endereço: {usuarioEvento.cartaoCredito.endereco}{" "}
                  </Typography>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
      <div className="footer_form_part_evento">
        <BtnHallel sucesso onClick={handleParticiparEvento}>Participar</BtnHallel>
      </div>
    </div>
  );
};

export default FormularioMembroHallel;
