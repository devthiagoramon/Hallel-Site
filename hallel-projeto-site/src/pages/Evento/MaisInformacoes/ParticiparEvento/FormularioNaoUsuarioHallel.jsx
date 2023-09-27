import React from "react";
import PDFAssinaturaDeMenor from "./PDFAssinaturaDeMenor";
import { PDFViewer } from "@react-pdf/renderer";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import dayjs from "dayjs";
import InputHallel from "../../../../components/InputHallel/InputHallel";
import BtnHallel from "../../../../components/BtnHallel/ButtonHallel";

const FormularioNaoUsuarioHallel = ({
  usuarioEvento,
  handleAlterarTexto,
  SetopenAdicionarCartao,
  isMenorIdade,
  evento,
  errorInputs,
  handleParticiparEvento,
}) => {
  return (
    <div className="cont_form_part_evento">
      <div className="header_form_part_evento">
        <label style={{ fontSize: "1.5em", fontWeight: "700" }}>
          Formulário de inscrição
        </label>
      </div>
      <div className="body_form_part_evento2">
        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>Nome</label>
        {errorInputs.nome ? (
          <InputHallel
            name="nome"
            style={{ width: 350 }}
            type="text"
            value={usuarioEvento.nome}
            onChange={handleAlterarTexto}
            error
          />
        ) : (
          <InputHallel
            name="nome"
            style={{ width: 350 }}
            type="text"
            value={usuarioEvento.nome}
            onChange={handleAlterarTexto}
          />
        )}
        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>Email</label>
        {errorInputs.email ? (
          <InputHallel
            name="email"
            style={{ width: 350 }}
            type="text"
            value={usuarioEvento.email}
            onChange={handleAlterarTexto}
            error
          />
        ) : (
          <InputHallel
            name="email"
            style={{ width: 350 }}
            type="text"
            value={usuarioEvento.email}
            onChange={handleAlterarTexto}
          />
        )}
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
        <label style={{ fontSize: "1.2em", fontWeight: "600" }}>Idade:</label>
        {errorInputs.idade ? (
          <InputHallel
            name="idade"
            value={usuarioEvento.idade}
            style={{ width: 100 }}
            type="number"
            onChange={handleAlterarTexto}
            error
          />
        ) : (
          <InputHallel
            name="idade"
            value={usuarioEvento.idade}
            style={{ width: 100 }}
            type="number"
            onChange={handleAlterarTexto}
          />
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
        {isMenorIdade ? (
          <div>
            <hr />
            <label style={{ fontSize: "1.2em", fontWeight: "600" }}>
              Baixar PDF (Obrigatorio)
            </label>
            <PDFViewer style={{ width: "100%", height: 300 }}>
              <PDFAssinaturaDeMenor nomeEvento={evento.titulo} />
            </PDFViewer>
            <hr />
          </div>
        ) : (
          <></>
        )}
        <BtnHallel sucesso onClick={handleParticiparEvento}>Participar</BtnHallel>
      </div>
    </div>
  );
};

export default FormularioNaoUsuarioHallel;
