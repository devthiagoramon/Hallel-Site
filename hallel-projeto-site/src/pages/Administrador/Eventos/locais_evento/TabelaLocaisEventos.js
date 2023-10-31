import { Button, LinearProgress } from '@mui/material';
import axios from 'axios';
import React, {useMemo, useState} from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { localEventoListar } from '../../../../api/uris/EventosURLS';
import {eventoListarLocalEventosService} from "../../../../service/EventoService";


const TabelaLocaisEventos = (props) => {
  const [eventosLocais, setEventosLocais] = useState([]);
   useMemo(() => {
     eventoListarLocalEventosService().then((response) => {
       setEventosLocais(response);
     });
  }, [props.enviadoSucesso])
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
            {eventosLocais?.map((local) => {
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