import React from "react";
import "./eventInfo.css";
import {} from "react-icons/bs";
import { useState } from "react";
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
import {
  eventoIsInscritoService,
  eventoVerifyStatusPagamentoService,
} from "../../../service/EventoService";
import { OutlinedEmptyButtonHallel } from "../../../components/BtnHallel";
import { getId, getUserId } from "../../../utils/utilLocalStorage";
import DoadorSM from "../../../components/DoadorSM/DoadorSM";

const InfoEventos2 = ({ evento, hide }) => {
  const [openModalParticiparEvento, setOpenModalParticiparEvento] =
    useState(false);
  const [isInscrito, setIsInscrito] = useState(false);
  const [loadingIsInscrito, setLoadingIsInscrito] = useState(true);
  const [statusPagamento, setStatusPagamento] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function isInscrito() {
      try {
        const response = await eventoIsInscritoService(evento.id, getUserId());
        if (response) {
          setIsInscrito(response);
          setLoadingIsInscrito(false);
          eventoVerifyStatusPagamentoService(evento.id).then(
            (responsePagamento) => {
              setStatusPagamento(responsePagamento);
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }

    isInscrito();

    // eventoIsInscritoService(evento.id, getId()).then((responseInscrito) => {
    //     if (responseInscrito) {
    //         setIsInscrito(responseInscrito);
    //         setLoadingIsInscrito(false);
    //         eventoVerifyStatusPagamentoService(evento.id).then((responsePagamento) => {
    //             setStatusPagamento(responsePagamento);
    //         });
    //     }
    // });
  }, []);

  return (
    <section className="containerEvents">
      <div className="area-infos">
        <Fab
               style={{
                fontWeight: "600",
                color: "#002811",
                background: "#FFC085",
                marginLeft: 20,
                marginTop:-20,
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
  <div className="separator">

  </div>
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
      
      <div className="cont_titulo_desc_evento_user">
        <h1 className="titulo_evento">{evento.titulo}</h1>
        <div className="descricao_evento_user">
          <label
            style={{
              justifySelf: "flex-start",
              fontSize: "25",
              marginLeft: 30,
            }}
          >
            Descrição
          </label>
          <p style={{ wordBreak: "break-word", fontSize: "1.2em", marginLeft: 30, marginTop: 2, width: 800}}>
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
        /* */
           <div className="container_pa">{loadingIsInscrito ? (
          <>
            {!isInscrito ? (
              <div className="container_participar_evento">
                <OutlinedEmptyButtonHallel
                  style={{ width: 300, padding: "0.4rem", fontSize: "23px", color: "white"}}
                  onClick={abrirModal}
                >
                  {" "}
                  Participar do evento
                </OutlinedEmptyButtonHallel>
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
        )}</div>
    </div>
      </div>

  );

};

const Info2 = ({ estado, setEstado, evento }) => {
  return (
    <div className="infos">
      <div className="container_infos_desc_evento">
        <div className="subtopicos">
          <div classname="separacao"></div>
          <h4 style={{ color:"#002A12", fontWeight:"semibold", marginBottom:"1em"}}>Informações essenciais:</h4>
          <ul className="topicosInfo">
            
            <p>Endereço: {evento.localEvento.localizacao}</p>

            <p>Data: {dayjs(evento.date).format("DD/MM/YYYY")}</p>

            <p>Horário: {evento.horario}</p>
          </ul>
        </div>
        <div className="participantes">
          <h4 style={{ color:"#002A12", fontWeight:"semibold", marginBottom:"1em"}}>Palestrantes:</h4>
          <ul className="topicosInfo">
            {evento.palestrantes?.map((palestrante) => {
              return <p>{palestrante}</p>;
              <p></p>
            })}
          </ul>
        </div>
      </div>
      <p></p>
      <DoadorSM />
    </div>
  );
};
export default InfoEventos2;
