import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import './participantes_evento.css'

function ParticipantesEvento(){


  //falta apenas a listagem, amanha ve


    return(

      <div className="participantes-container">

        <label className="titulo-evento">Participantes do Evento</label> 
        <TabelaArea/>

      </div>

    )
}


const TabelaArea = ()=>{

    return(



      <div style={{width: "100%",
        marginTop: '40px', display: 'flex', justifyContent: 'center'}}>
        <Table
            hover
            style={{
              width: "100%",
              maxWidth: "70%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                <td></td>
                <td></td>
                </tr>
                
            </tbody>
        </Table>
        </div>

    );
}
    
export default ParticipantesEvento;