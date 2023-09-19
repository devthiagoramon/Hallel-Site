import React, { Component } from "react";
import "./eventInfo.css";
import {} from "react-icons/bs";
import {
  AltRouteRounded,
  ConnectWithoutContactRounded,
  OpenInFullOutlined,
  Padding,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";
import ModalParticiparEvento from "./ModalParticiparEvento";
import { PDFViewer } from "@react-pdf/renderer";
import PDFAssinaturaDeMenor from "./PDFAssinaturaDeMenor";

const InfoEventos2 = ({ evento, hide }) => {
  const [openModalParticiparEvento, setOpenModalParticiparEvento] =
    useState(false);

  return (
    <section className="containerEvents">
      <div className="area-infos">
        <Corpo2
          evento={evento}
          openModal={openModalParticiparEvento}
          hide={hide}
          setOpenModal={setOpenModalParticiparEvento}
        />
        <hr style={{ marginTop: "30px" }} />
        <Info2
          evento={evento}
          estado={openModalParticiparEvento}
          setEstado={setOpenModalParticiparEvento}
        />
      </div>
      <ModalParticiparEvento
        open={openModalParticiparEvento}
        setOpen={setOpenModalParticiparEvento}
        evento={evento}
      />
    </section>
  );
};

const Corpo2 = ({ evento, openModal, setOpenModal }) => {
  const abrirModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="corpo_evento">
      <hr style={{ marginTop: "30px" }} />
      <div className="cont_titulo_desc_evento_user">
        <h1 className="titulo_evento">{evento.titulo}</h1>
        <div className="descricao_evento_user">
          <label
            style={{
              justifySelf: "flex-start",
              fontSize: "1.4em",
            }}
          >
            Descrição
          </label>
          <p style={{ wordBreak: "break-word", fontSize: "1.2em" }}>
            {evento.descricao}
          </p>
        </div>
      </div>
      <div className="container_imagem_evento_user">
        <img
          className="imagemCp1_evento_user"
          src={evento.imagem}
          alt="imagem"
        />

        <div className="container_participar_evento">
          <BtnHallel secundario onClick={abrirModal}>
            {" "}
            Participar do evento
          </BtnHallel>
        </div>
      </div>
      <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
    </div>
  );
};

const Info2 = ({ estado, setEstado, evento }) => {
  return (
    <div className="infos">
      <div className="container_infos_desc_evento">
        <div className="subtopicos">
          <h4>Informações</h4>
          <ul className="topicosInfo">
            <li>Endereço: {evento.localEvento.localizacao}</li>
            <li>Data: {evento.date}</li>
            <li>Horário: {evento.horario}</li>
          </ul>
        </div>
        <div className="participantes">
          <h4>Participantes:</h4>
          <ul className="topicosInfo">
            {evento.palestrantes?.map((palestrante) => {
              return <li>{palestrante}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default InfoEventos2;
