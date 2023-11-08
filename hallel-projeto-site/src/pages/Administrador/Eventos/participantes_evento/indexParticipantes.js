import React, {useEffect, useMemo, useState} from "react";
import {Table} from "react-bootstrap";
import './participantes_evento.css'
import axios from "axios";
import {useParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {eventoListarParticipantes} from '../../../../api/uris/EventosURLS';
import Alert from "@mui/material/Alert";
import {eventoListarParticipantesService} from "../../../../service/EventoService";

const ParticipantesEvento = () => {

    const id = useParams();

    const [eventosParticipantes, setEventosParticipantes] = useState()
    useMemo(() => {
        eventoListarParticipantesService(id).then((response) => {
            console.log(response)
            setEventosParticipantes(response);
        });
    }, []);


    return (

        <div className="participantes-container">

            <label className="titulo-evento">Participantes do Evento</label>

            <div style={{
                width: "100%",
                marginTop: '40px', display: 'flex', justifyContent: 'center'
            }}>

                {eventosParticipantes.length === null ? (

                    <Alert style={{margin: "5em 0"}} severity="info">Nenhum participante encontrado.</Alert>
                ) : (

                    <Table
                        hover
                        style={{
                            width: "100%",
                            maxWidth: "70%",
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
                            )
                        })}
                        </tbody>
                    </Table>
                )
                }

            </div>
        </div>
    )
}
export default ParticipantesEvento;