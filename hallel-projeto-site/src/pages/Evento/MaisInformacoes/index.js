import React from "react";
import "./eventInfo.css";
import {} from "react-icons/bs";
import { useState } from "react";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Fab from "@mui/material/Fab";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ModalParticiparEvento from "./ParticiparEvento/ModalParticiparEvento";
import { useEffect } from "react";
import { useMemo } from "react";
import {
  eventoUsuarioIsInscrito,
  eventoVerifyStatusPagamentoUser,
} from "../../../api/uris/EventosURLS";
import axios from "axios";
import { notification } from "../../..";
import { ErrorLoadingIsParticipando } from "../../../components/Feedback/FeedbackParticiparEvento";
import { CircularProgress } from "@mui/material";
import {eventoIsInscritoService, eventoVerifyStatusPagamentoService} from "../../../service/EventoService";

const InfoEventos2 = ({ evento, hide }) => {
  const [openModalParticiparEvento, setOpenModalParticiparEvento] =
    useState(false);
  const [isInscrito, setIsInscrito] = useState(false);
  const [loadingIsInscrito, setLoadingIsInscrito] = useState(true);
  const [statusPagamento, setStatusPagamento] = useState("");

  const navigate = useNavigate();

  useMemo(() => {
    let responseInscrito = eventoIsInscritoService(evento.id, localStorage.getItem("HallelId"));
    if(responseInscrito){
      setIsInscrito(responseInscrito);
      setLoadingIsInscrito(false);
      let responsePagamento = eventoVerifyStatusPagamentoService(evento.id);
      setStatusPagamento(responsePagamento);
    }
  }, []);

  return (
    <section className="containerEvents">
      <div className="area-infos">
        <Fab
          style={{
            fontWeight: "600",
            color: "#35404b",
            background: "#FFA218",
            marginBottom: "1rem",
          }}
          onClick={() => navigate(0)}
        >
          <KeyboardReturnIcon />
        </Fab>

        <Corpo2
          evento={evento}
          openModal={openModalParticiparEvento}
          hide={hide}
          setOpenModal={setOpenModalParticiparEvento}
          isInscrito={isInscrito}
          loadingIsInscrito={loadingIsInscrito}
          situacaoPagamento={statusPagamento}
        />
        <hr style={{ marginTop: "30px" }} />
        <Info2
          evento={evento}
          estado={openModalParticiparEvento}
          setEstado={setOpenModalParticiparEvento}
        />
      </div>
      {!isInscrito && (
        <ModalParticiparEvento
          open={openModalParticiparEvento}
          setOpen={setOpenModalParticiparEvento}
          evento={evento}
        />
      )}
    </section>
  );
};

const Corpo2 = ({
  isInscrito,
  evento,
  openModal,
  setOpenModal,
  loadingIsInscrito,
  situacaoPagamento,
}) => {
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
        {!loadingIsInscrito ? (
          <>
            {!isInscrito ? (
              <div className="container_participar_evento">
                <BtnHallel secundario onClick={abrirModal}>
                  {" "}
                  Participar do evento
                </BtnHallel>
              </div>
            ) : (
              <div className="status_evento_participando">
                <label className="label_status_evento_participando">
                  Inscrito
                </label>
                <label>Situação do Pagamento: {situacaoPagamento}</label>
              </div>
            )}
          </>
        ) : (
          <div className="cont_loading_is_inscrito">
            <CircularProgress />
          </div>
        )}
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
            <li>Data: {dayjs(evento.date).format("DD/MM/YYYY")}</li>
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
