import React, {useEffect, useState} from "react";
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
import {CalendarMonth, Close, NavigateBefore, NavigateNext,} from "@mui/icons-material";
import MenuCalendarioSelecionar from "../associados/MenuCalendarioSelecionar";
import dayjs from "dayjs";
import {Table} from "react-bootstrap";
import {PDFViewer} from "@react-pdf/renderer";
import PDFEntrada from "./PDFEntrada";
import {entradaGetAllPaginasService, entradaListarByPageAndDateService} from "../../../../service/FinanceiroService";
import GuiaAdm from "../../../../components/GuiaAdm";

const GerarPDFSaida = () => {
    const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);
    const [mesSelecionado, setMesSelecionado] = useState(dayjs());
    const [paginaSelecionado, setPaginaSelecionado] = useState(1);
    const [totalPagina, settotalPagina] = useState(0);
    const [entradas, setentradas] = useState([]);
    const [mostrarPDF, setMostrarPDF] = useState(false);

    useEffect(() => {
        let dataString = mesSelecionado.format("MM/YYYY").toString();
        let mesString = dataString.substring(0, 2);
        let anoString = dataString.substring(3);
        entradaGetAllPaginasService(mesString, anoString).then((response) => {
            settotalPagina(response);
        });
    }, [mesSelecionado]);

    function handleClickAbrirMenuCalendario(e) {
        setAnchorMenuCalendario(e.currentTarget);
    }

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
<<<<<<< HEAD
        entradaListarByPageAndDateService(paginaSelecionado - 1, mesString, anoString).then((response) => {
            setentradas(response)
        });
=======
        let response = saidaGetAllPaginasService(mesString, anoString);
        settotalPagina(response);
    }, [mesSelecionado]);

    useEffect(() => {
        let dataString = mesSelecionado.format("MM/YYYY").toString();
        let mesString = dataString.substring(0, 2);
        let anoString = dataString.substring(3);
       
>>>>>>> efb8a47060b2c4e058d45464fee7501e1447abcc
    }, [paginaSelecionado, mesSelecionado]);

  return (
    <GuiaAdm title={"Pdf saídas"}>
      <div >
      <div>
      <div className="body_gerar_pdf">
        <div className="esquerda_body_gerar_pdf">
          <div className="informacoes_gerar_pdf">
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'20px'}}>
            Instruções sobre a geração do PDF:
            </Typography>
            <ul>
              <li>1. Examine cuidadosamente todos os dados disponíveis;</li>
              <li>
                2. Acrescente uma descrição apropriada a cada entrada na tabela;
              </li>
              <li>
                3. Escolha um mês para visualizar informações específicas correspondentes ao período selecionado.
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
            <label style={{marginTop:"3px",color: "white", marginRight:"-20px"}}>{mesSelecionado.format("MM/YYYY")}</label> 
          <div className="cont_header_gerar_pdf-selecionar_mes_gerar_pdf" style={{alignItems:'center',justifyContent:'center'}}> 
          
          <Tooltip title="Selecionar o mês">
            <IconButton
              id="btn_abrir_calendario"
              onClick={(e) => {
                handleClickAbrirMenuCalendario(e);
              }}
            >
              <CalendarMonth
                sx={{ color: "white", height: "35px", width: "35px",marginTop:"-35px" }}
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
            {mostrarPDF && (
              <IconButton
                onClick={() => {
                  setMostrarPDF(false);
                }}
              >
                <Close sx={{ color: "#F4F4F4" }} />
              </IconButton>
            )}
          </div>
          <div className="body_preview_gerar_pdf" style={{alignItems:'center',lineHeight: '-10rem'}}>
            {mostrarPDF && (
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <PDFEntrada
                  mesSelecionado={mesSelecionado}
                  entradas={entradas}
                />
              </PDFViewer>
            )}
            {!mostrarPDF && (
              <Button className="btn-view" style={{backgroundColor: '#003015'}}
                variant="contained"
                onClick={() => {
                  setMostrarPDF(true);
                }}
                
              >
              
                Veja o PDF
              </Button>
            )}
          </div>
        </div>
      </div>
      </div>  
      </div>
    </GuiaAdm>
  );
};

export default GerarPDFSaida;
