import React, { useMemo, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { purple } from "@mui/material/colors";
import dayjs from "dayjs";
import {
  entradaUltimasEntradasService,
  saidaUltimasSaidaService,
} from "../../../../service/FinanceiroService";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
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
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const UltimasRendas = () => {
  const navigate = useNavigate();
  const [entradas, setEntradas] = useState([]);

  useMemo(() => {
    entradaUltimasEntradasService().then((res) => {
      setEntradas(res);
    });
  }, []);

  return (
    <div className="tabela-ultimas-rendas">
      <div className="div-header">
        <div className="cont-header-finaceiro">
          <h3 className="financeiro-labels">Últimas Entradas</h3>
          <Fab
            size="small"
            color="white"
            aria-label="avançar"
            onClick={() => navigate("/administrador/painelFinanceiro/entradas")}
          >
            <East />
          </Fab>
        </div>
        <div className="cont-header-financeiro">
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Pago com</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entradas?.map((entrada) => (
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
  useMemo(() => {
    saidaUltimasSaidaService().then((response) => {
      setSaidas(response);
    });
  }, []);

  return (
    <div className="tabela-ultimas-saidas">
      <div className="div-header">
        <div className="cont-header-finaceiro">
          <h3 className="financeiro-labels">Últimas saídas</h3>
          <Fab
            size="small"
            color="white"
            aria-label="avançar"
            onClick={() => navigate("/administrador/painelFinanceiro/saidas")}
          >
            <East />
          </Fab>
        </div>
        <div className="cont-header-financeiro">
          <ColorButton
            onClick={() => navigate("/administrador/financeiro/gerarPDFSaida")}
            variant="contained"
            sx={{ borderRadius: "24px" }}
          >
            Gerar PDF
          </ColorButton>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Pago com</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saidas?.map((saida) => (
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

  const theme = useTheme();

  return (
    <div
      style={{
        justifyContent: "flex-start",
        display: "flex",
        marginLeft: "2rem",
        marginTop: "1.5rem",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              DashBoard
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Gráficos do financeiro
            </Typography>
          </CardContent>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <div style={{ justifyContent: "flex-start", display: "flex" }}>
              <ColorButton
                onClick={() => navigate("/administrador/painelFinanceiro")}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Acessar
              </ColorButton>
            </div>
          </CardContent>
        </Box>
        {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image= "https://img.icons8.com/?size=512&id=vFqlDrzMYOT0&format=png"
        alt="Live from space album cover" */}
      </Card>
    </div>
  );
};

const CardEntradasFinanceiro = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <div
      style={{
        justifyContent: "flex-start",
        display: "flex",
        marginLeft: "2rem",
        marginTop: "1.5rem",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Códigos Financeiro
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Códigos dos Financeiro
            </Typography>
          </CardContent>

          <CardContent sx={{ flex: "1 0 auto" }}>
            <div style={{ justifyContent: "flex-start", display: "flex" }}>
              <ColorButton
                onClick={() =>
                  navigate("/administrador/financeiro/codigosFinanceiro")
                }
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Acessar
              </ColorButton>
            </div>
          </CardContent>
        </Box>
        {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image= "https://img.icons8.com/?size=512&id=vFqlDrzMYOT0&format=png"
        alt="Live from space album cover" */}
      </Card>
    </div>
  );
};

const Financeiro = () => {
  return (
    <div className="financeiro-tabelas-principal">
      <h1 style={{ marginLeft: "2rem" }}>Financeiro</h1>
      <div className="header_cont_cards_financeiro">
        <CardDashboard />
        <CardEntradasFinanceiro />
      </div>
      <UltimasRendas />
      <UltimasSaidas />
    </div>
  );
};
export default Financeiro;
