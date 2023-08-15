import React from "react";
import './styleTableDespesas.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from "@mui/material";
import East from  "@mui/icons-material/East";
import Fab from "@mui/material/Fab";

function createDataRendas(id, data, valor, metodoPagamentod) {
  return { id, data, valor, metodoPagamentod};
}

function createDataSaidas(id, data, valor, metodoPagamentod) {
  return { id, data, valor, metodoPagamentod };
}

const TabelasFinanceiro = () =>{

    return(

        <div className="financeiro-tabelas-principal">

            <label className="financeiro-labels">Tabelas financeiro</label>
            <UltimasRendas/> 
            <UltimasSaidas/>
        </div>
    );
}

const UltimasRendas = () =>{

  const rows = [
    createDataRendas(1, "17/06/2023", "R$ "+ 20, "TED"),
    createDataRendas(2, "25/07/2023", "R$ "+ 40, "TED"),
    createDataRendas(3, "05/06/2023", "R$ "+ 60, "TED"),
    createDataRendas(4, "20/06/2023", "R$ "+ 100, "TED"),
    createDataRendas(5, "15/06/2023", "R$ "+ 150, "TED")
  ];
    return(

      <div className="tabela-ultimas-rendas">


      <div className="div-rendas">

        <label className="financeiro-labels">Últimas rendas</label>

          <Fab  color="white" aria-label="avançar">

            <East/>
          </Fab>

      </div>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Valor</TableCell>
                  <TableCell>Método de pagamento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> {row.id}
                    </TableCell>
                    <TableCell>{row.data}</TableCell>
                    <TableCell>{row.valor}</TableCell>
                    <TableCell>{row.metodoPagamentod}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>        
    )
}

const UltimasSaidas = () =>{

  const rows = [
    createDataSaidas(1, "17/06/2023", "R$ "+ 10, "PIX"),
    createDataSaidas(2, "25/07/2023", "R$ "+ 30, "PIX"),
    createDataSaidas(3, "05/06/2023", "R$ "+ 60, "TED"),
    createDataSaidas(4, "20/06/2023", "R$ "+ 120, "TED"),
    createDataSaidas(5, "15/06/2023", "R$ "+ 110, "TED")
  ];

    return(


      <div className="tabela-ultimas-saidas">

       
        <div className="div-rendas">

          <label className="financeiro-labels">Últimas saídas</label>

          <Fab color="white" aria-label="avançar">

          <East/>
          </Fab>

        </div>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Id</TableCell>
                  <TableCell >Data</TableCell>
                  <TableCell >Valor</TableCell>
                  <TableCell >Método de pagamento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> {row.id}
                    </TableCell>
                    <TableCell >{row.data}</TableCell>
                    <TableCell >{row.valor}</TableCell>
                    <TableCell >{row.metodoPagamentod}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          </div>
    )
}
export default TabelasFinanceiro;