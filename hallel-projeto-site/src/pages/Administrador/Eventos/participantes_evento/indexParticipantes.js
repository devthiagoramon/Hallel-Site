import React, { useEffect, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import "./participantes_evento.css";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { eventoListarParticipantesService } from "../../../../service/EventoService";
import GuiaAdm from "../../../../components/GuiaAdm";

const ParticipantesEvento = () => {
  const teste = useParams();

  const [eventosParticipantes, setEventosParticipantes] = useState([{}]);
  useEffect(() => {
    console.log(teste)
    async function listarParticipantesEventos() {
      try {
        let response = await eventoListarParticipantesService("idEvento");
        setEventosParticipantes(response || []);
      } catch (error) {
        console.error(error);
        setEventosParticipantes([]);
      }
    }
    listarParticipantesEventos();
  });

  return (
    <GuiaAdm title={"Participantes do Eventos"}>
      <div className="participantes-container">
        <div
          style={{
            width: "100%",
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {eventosParticipantes.length === 0 ? (
            <Alert style={{ margin: "5em 0" }} severity="info">
              Nenhum participante encontrado.
            </Alert>
          ) : (
            <Table
              hover
              style={{
                maxWidth: "90%",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              {/* <TabelaArea/> */}

              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {eventosParticipantes?.map((participante) => {
                  return (
                    //teste, se está buscando
                    <tr>
                      <td>{participante.nome}</td>
                      <td>{participante.email}</td>
                      <td>{participante.idade}</td>
                      <td>{participante.telefone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </GuiaAdm>
  );
};
export default ParticipantesEvento;
