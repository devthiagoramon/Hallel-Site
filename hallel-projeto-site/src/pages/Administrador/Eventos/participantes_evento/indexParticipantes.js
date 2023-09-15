import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import './participantes_evento.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { eventoListarParticipantes } from  '../../../../api/uris/EventosURLS';

const ParticipantesEvento = () =>{

  const id = useParams();

  const [eventosParticipantes, setEventosParticipantes] = useState([]);

  useEffect(() => {

      axios.get(eventoListarParticipantes(id.idEvento), {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then((res) => {
        console.log("Teste::" +eventosParticipantes);
        setEventosParticipantes(res.data);
      
        
      }).catch((error) => {
        console.error("Erro na requisição de listar participantes: " + error);
      })


    },[]);

  //falta apenas a listagem
    return(

      <div className="participantes-container">

        <label className="titulo-evento">Participantes do Evento</label>

        <div style={{width: "100%",
        marginTop: '40px', display: 'flex', justifyContent: 'center'}}>
          

        {eventosParticipantes.length == 0 ?(

          <CircularProgress className="evento-loading-partipantes"/>
        ): eventosParticipantes.length == null ?(

          <h2>Nenhum participante encontrado</h2>
        ):(

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

         {eventosParticipantes.map((participante)=>{




            return(

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