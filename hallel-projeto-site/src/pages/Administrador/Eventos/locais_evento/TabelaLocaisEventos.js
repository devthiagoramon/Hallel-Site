import { Button, LinearProgress } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const TabelaLocaisEventos = (props) => {

  const [eventosLocais, seteventosLocais] = useState([]);

  useEffect(() => {
    loadEventosLocais();


  }, [props.enviadoSucesso])

  function loadEventosLocais() {
    axios.get("http://localhost:8080/api/locais/listLocalizacao", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      seteventosLocais(res.data);
    }).catch((error) => {
      console.error("Erro na requisição de listar localização: " + error);
    })
  }

  function handleEditarLocal(id){
    props.setIdLocalEvento(id)
  }


  return (
    <div className="container_tabela_locais_eventos">
      <Table hover>
        {eventosLocais.length !== 0 ? <>
          <thead>
            <tr>
              <th>Localização</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {eventosLocais.map((local) => {
              return(
              <tr key={local.localizacao}> 
                <td>{local.localizacao}</td>
                <td><Button sx={{ width: "100%", height: "100%" }} variant='contained' onClick={() => handleEditarLocal(local.id)}>Editar</Button></td>
              </tr>
              )
            })}
          </tbody>
        </> : <>
          <thead>
            <tr>
              <th>Localização</th>
              <th>Editar</th>
            </tr>
          </thead>
          <LinearProgress />
        </>}
      </Table>
    </div>
  );
}

export default TabelaLocaisEventos