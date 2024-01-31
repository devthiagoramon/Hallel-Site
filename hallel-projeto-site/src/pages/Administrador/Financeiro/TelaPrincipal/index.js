import React, { useEffect, useState } from "react";
import "./styleTableDespesas.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import East from "@mui/icons-material/East";
import Fab from "@mui/material/Fab";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import SvgIcon from "@mui/material/SvgIcon";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import {
  entradasUltimasEntradasAPI,
  saidaUltimasSaidasAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import dayjs from "dayjs";
import GuiaAdm from "../../../../components/GuiaAdm";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "white",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#4caf50'),
  backgroundColor: '#4caf50',
  "&:hover": {
    backgroundColor: '#ef6c00',
  },
}));

const UltimasRendas = () => {
  const navigate = useNavigate();

  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    let url = entradasUltimasEntradasAPI();

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setEntradas(res.data);
      })
      .catch((error) => {
        console.log("Error requereindo as ultimas entradas: " + error);
      });
  }, []);

  return (
    
    <div className="tabela-ultimas-rendas">
      <div className="div-header">
        <div className="cont-header-finaceiro">
        <div className="text-and-buttons">
          <h3 className="financeiro-labels" style={{marginRight:'0.5rem'}}>Últimas Entradas</h3>
          <div className="buttons">
          <Fab
            size="small"
            color="white"
            aria-label="avançar"
            onClick={() => navigate("/administrador/painelFinanceiro/entradas")}
          >
            <East />
          </Fab>
          </div>
          </div>
        </div>
        <div className="cont-header-financeiro">
        <div className="buttons">
          <ColorButton
            onClick={() =>
              navigate("/administrador/financeiro/gerarPDFEntrada")
            }
            variant="contained"
            sx={{ borderRadius: "24px" }}
          >
            Gerar PDF
            
          </ColorButton>
          </div>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Pago com</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entradas.map((entrada) => (
              <TableRow
                key={entrada.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {entrada.codigo !== null && (
                    <label>
                      {" "}
                      {entrada.codigo.numeroCodigo} |{" "}
                      {entrada.codigo.nomeCodigo}{" "}
                    </label>
                  )}
                </TableCell>
                <TableCell>
                  {dayjs(entrada.data).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  {entrada.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>
                  {entrada.metodoPagamento === "CARTAO_CREDITO"
                    ? "Cartão de Crédito"
                    : ""}
                  {entrada.metodoPagamento === "CARTAO_DEBITO"
                    ? "Cartão de Débito"
                    : ""}
                  {entrada.metodoPagamento === "CARTAO_MAQUINA"
                    ? "Cartão de Crédito"
                    : ""}
                  {entrada.metodoPagamento === "PIX" ? "PIX" : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
};

const UltimasSaidas = () => {
  const navigate = useNavigate();

  const [saidas, setSaidas] = useState([]);

  useEffect(() => {
    let url = saidaUltimasSaidasAPI();

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSaidas(res.data);
      })
      .catch((error) => {
        console.log("Error requereindo as ultimas entradas: " + error);
      });
  }, []);

  return (
    <div className="tabela-ultimas-saidas">
      <div className="div-header">
        <div className="cont-header-finaceiro">
        <div className="text-and-buttons">
          <h3 className="financeiro-labels" style={{marginRight:'1rem'}}>Últimas saídas</h3>
          <div className="buttons">
          <Fab
            size="small"
            color="white"
            aria-label="avançar"
            onClick={() => navigate("/administrador/painelFinanceiro/saidas")}
          >
            <East />
          </Fab>
          </div>
          </div>
        </div>
        <div className="cont-header-financeiro">
        <div className="buttons">
          <ColorButton
            onClick={() =>
              navigate("/administrador/financeiro/gerarPDFSaida")
            }
            variant="contained"
            sx={{ borderRadius: "24px" }}
          >
            Gerar PDF
            
          </ColorButton>
          </div>
          </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Pago com</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saidas.map((saida) => (
              <TableRow
                key={saida.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {saida.codigo !== null && (
                    <label>
                      {" "}
                      {saida.codigo.numeroCodigo} | {saida.codigo.nomeCodigo}{" "}
                    </label>
                  )}
                </TableCell>
                <TableCell>{dayjs(saida.data).format("DD/MM/YYYY")}</TableCell>
                <TableCell>
                  {saida.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>
                  {saida.metodoPagamento === "CARTAO_CREDITO"
                    ? "Cartão de Crédito"
                    : ""}
                  {saida.metodoPagamento === "CARTAO_DEBITO"
                    ? "Cartão de Débito"
                    : ""}
                  {saida.metodoPagamento === "CARTAO_MAQUINA"
                    ? "Cartão de Crédito"
                    : ""}
                  {saida.metodoPagamento === "PIX" ? "PIX" : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const CardDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="div-cards">
      <Card sx={{ maxWidth: 500, marginLeft:'2rem' }}>
        <CardContent>
          <Typography variant="h5">DashBoard</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Gráficos do financeiro
          </Typography>
        </CardContent>

        <CardContent>
          <div style={{ justifyContent: "flex-start", marginTop: '1rem' }}>
            <ColorButton
              onClick={() => navigate("/administrador/painelFinanceiro")}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Acessar
            </ColorButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CardEntradasFinanceiro = () => {
  const navigate = useNavigate();

  return (
    <div className="div-cards">
      <Card sx={{ maxWidth: 500, marginLeft:'2rem', marginTop:'2rem' }}>
        <CardContent>
          <Typography variant="h5">Códigos Financeiro</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Códigos dos Financeiro
          </Typography>
        </CardContent>

        <CardContent>
          <div style={{ justifyContent: "flex-start", marginTop: '1rem' }}>
            <ColorButton
              onClick={() => navigate("/administrador/financeiro/codigosFinanceiro")}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Acessar
            </ColorButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Financeiro = () => {
  return (
    <GuiaAdm title={"Financeiro"}>
      <div className="financeiro-tabelas-principal">
        <div className="header_cont_cards_financeiro">
          <div>
            <UltimasRendas />
            <UltimasSaidas />
          </div>
        </div>
        <CardDashboard />
        <CardEntradasFinanceiro />
      </div>
    </GuiaAdm>
  );
};

export default Financeiro;
