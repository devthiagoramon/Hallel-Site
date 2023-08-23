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
import { useEffect } from "react";
import {
  entradasGetAllPaginas,
  entradasListEntradasByPageAndDate,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";

const GerarPDFEntrada = () => {
  const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);

  function handleClickAbrirMenuCalendario(e) {
    setAnchorMenuCalendario(e.currentTarget);
  }

  const [mesSelecionado, setMesSelecionado] = useState(dayjs());
  const [paginaSelecionado, setPaginaSelecionado] = useState(1);

  const [totalPagina, settotalPagina] = useState(0);

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

  useEffect(() => {
    let dataString = mesSelecionado.format("MM/YYYY").toString();
    let mesString = dataString.substring(0, 2);
    let anoString = dataString.substring(3);

    let url = entradasGetAllPaginas(mesString, anoString);

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        settotalPagina(res.data);
      })
      .catch((error) => {
        console.log("Error puxando o total de paginas: " + error);
      });
  }, [mesSelecionado]);

  const handleNextPagina = () => {
    let pagina = paginaSelecionado;
    if (pagina < totalPagina) {
      setPaginaSelecionado(pagina + 1);
    }
  };

  const handlePreviousPagina = () => {
    let pagina = paginaSelecionado;
    if (pagina > 1) {
      setPaginaSelecionado(pagina - 1);
    }
  };

  useEffect(() => {
    let dataString = mesSelecionado.format("MM/YYYY").toString();
    let mesString = dataString.substring(0, 2);
    let anoString = dataString.substring(3);
    let url = entradasListEntradasByPageAndDate(
      paginaSelecionado - 1,
      mesString,
      anoString
    );

    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setentradas(res.data);
      })
      .catch((error) => {
        console.log(
          "Error pegando a lista de entradas por pagina e data: " + error
        );
      });
  }, [paginaSelecionado, mesSelecionado]);

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
                  <IconButton
                    onClick={() => {
                      handlePreviousPagina();
                    }}
                  >
                    <NavigateBefore />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Pagina seguinte">
                  <IconButton
                    onClick={() => {
                      handleNextPagina();
                    }}
                  >
                    <NavigateNext />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="text_header_tabela_gerar_pdf">
                <Typography variant="body1">
                  Pagina: {paginaSelecionado}{" "}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: "right" }}>
                  De: {totalPagina}
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
                        <TextareaAutosize className="input_tabela_gerar_pdf" />
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
