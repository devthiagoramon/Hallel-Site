import { Button, Paper, TableContainer } from '@mui/material';
import React from 'react'
import { Table } from 'react-bootstrap';

const TabelaLocaisEventos = () => {
  return (
    <div className="container_tabela_locais_eventos">
        <Table hover>
          <thead>
            <tr>
              <th>Localização</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Teste</td>
                <td><Button sx={{width:"100%", height: "100%"}} variant='contained'>Editar</Button></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default TabelaLocaisEventos