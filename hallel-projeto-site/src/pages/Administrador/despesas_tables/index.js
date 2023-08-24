import React, { useState } from "react";
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
import { Navigate, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material/styles";
import LineAxisIcon from '@mui/icons-material/LineAxis';
import SvgIcon from "@mui/material/SvgIcon";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

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
            <CardDashboard/>
        </div>
    );
}

const UltimasRendas = () =>{

  const navigate = useNavigate();

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

          <Fab size= "small" color="white" aria-label="avançar" onClick= {()=> navigate('/administrador/painelFinanceiro/entradas')}>

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

  const navigate = useNavigate();


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

          <Fab size= "small" color="white" aria-label="avançar" onClick= {()=> navigate('/administrador/painelFinanceiro/saidas')}>

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

const CardDashboard = () =>{


  const navigate = useNavigate();

  const theme = useTheme();

  return(


     <section style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>

      <div style={{justifyContent: "center", padding: "2em", display:"flex", flexDirection: "row", background: "#756EE0", borderRadius: "1em", width: "20em", height: "10em", fontWeight: "700", color: "#ffffff"}}>
      
            <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>

              <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", alignContent: "center"}}>

                        <label style={{margin: "1em 2em", fontSize:"1.2em"}}>Dashboard</label>
                  <Button color="warning" variant="contained" onClick={()=>navigate("/administrador/painelFinanceiro")}>Clique aqui</Button>
              </div>

              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"flex-end"}}>

                <img src="https://cdn-icons-png.flaticon.com/512/5581/5581393.png" style= {{borderRadius: "50%", width: "5em", height: "5em"}}></img>
        
              </div> 
            </div>

      </div>
    </section>
  )
} 
export default TabelasFinanceiro;