import React from "react";
import "./gerar_pdf.css";
import {
  Button,
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  CalendarMonth,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import MenuCalendarioSelecionar from "../associados/MenuCalendarioSelecionar";
import { useState } from "react";
import dayjs from "dayjs";
import { Table } from "react-bootstrap";

const GerarPDFEntrada = () => {
  const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);

  function handleClickAbrirMenuCalendario(e) {
    setAnchorMenuCalendario(e.currentTarget);
  }

  const [mesSelecionado, setMesSelecionado] = useState(dayjs());

  const [entradas, setentradas] = useState([]);

  function createDataSaidas(id, data, valor, metodoPagamentod) {
    return { id, data, valor, metodoPagamentod };
  }

  const rows = [
    createDataSaidas(1, "17/06/2023", "R$ " + 10, "PIX"),
    createDataSaidas(2, "25/07/2023", "R$ " + 30, "PIX"),
    createDataSaidas(3, "05/06/2023", "R$ " + 60, "TED"),
    createDataSaidas(4, "20/06/2023", "R$ " + 120, "TED"),
    createDataSaidas(5, "15/06/2023", "R$ " + 110, "TED"),
  ];

  return (
    <div className="container_gerar_pdf">
      <div className="header_gerar_pdf">
        <div className="cont_header_gerar_pdf">
          <h2>Gerar PDF (Entrada)</h2>
        </div>
        <div className="cont_header_gerar_pdf selecionar_mes_gerar_pdf">
          <div className="cont_mes_header_selecionado">
            <Typography variant="subtitle1">Mês selecionado</Typography>
            <label>{mesSelecionado.format("MM/YYYY")}</label>
          </div>
          <Tooltip title="Selecionar o mês">
            <IconButton
              id="btn_abrir_calendario"
              onClick={(e) => {
                handleClickAbrirMenuCalendario(e);
              }}
            >
              <CalendarMonth
                sx={{ color: "blue", height: "35px", width: "35px" }}
              />
            </IconButton>
          </Tooltip>
          <MenuCalendarioSelecionar
            anchorMenuCalendario={anchorMenuCalendario}
            setAnchorMenuCalendario={setAnchorMenuCalendario}
            mesSelecionado={mesSelecionado}
            setMesSelecionado={setMesSelecionado}
          />
        </div>
      </div>
      <div className="body_gerar_pdf">
        <div className="esquerda_body_gerar_pdf">
          <div className="informacoes_gerar_pdf">
            <Typography variant="h6">
              Informações de como funciona para gerar o PDF:
            </Typography>
            <ul>
              <li>Você poderá verificará todos os dados</li>
              <li>
                Você poderá adicionar descrição a cada linha da tabela para
                melhor organização
              </li>
              <li>
                Selecione um mês para visualizar informações referente ao mês
              </li>
              <li>
                Você poderá visualizar uma pré-visualização clicando em{" "}
                <span className="pre_visualizar_info_span">Pré-Visualizar</span>
              </li>
            </ul>
          </div>
          <div className="tabela_gerar_pdf">
            <div className="header_tabela_gerar_pdf">
              <div className="buttons_header_tabela_gerar_pdf">
                <Tooltip title="Pagina anterior">
                  <IconButton>
                    <NavigateBefore />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Pagina seguinte">
                  <IconButton>
                    <NavigateNext />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="text_header_tabela_gerar_pdf">
                <Typography variant="body1">Pagina: </Typography>
                <Typography variant="caption" sx={{ textAlign: "right" }}>
                  De:
                </Typography>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 300, maxWidth: 500 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Pago com</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((rows) => (
                    <TableRow
                      key={rows.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {rows.id}
                      </TableCell>
                      <TableCell>
                        <TextareaAutosize className="input_tabela_gerar_pdf" />
                      </TableCell>
                      <TableCell>
                        {dayjs(rows.data).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        {rows.valor.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>
                        {rows.metodoPagamento === "CARTAO_CREDITO"
                          ? "Cartão de Crédito"
                          : ""}
                        {rows.metodoPagamento === "CARTAO_DEBITO"
                          ? "Cartão de Débito"
                          : ""}
                        {rows.metodoPagamento === "CARTAO_MAQUINA"
                          ? "Cartão de Crédito"
                          : ""}
                        {rows.metodoPagamento === "PIX" ? "PIX" : ""}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="direita_body_gerar_pdf">
          <div className="header_preview_gerar_pdf">
            <Typography variant="h5" sx={{ color: "#F4F4F4" }}>
              Pré-visualização
            </Typography>
          </div>
          <div className="body_preview_gerar_pdf">
            <Button variant="contained">Pré-Visualizar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerarPDFEntrada;
