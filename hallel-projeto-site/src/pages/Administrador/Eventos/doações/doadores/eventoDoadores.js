import React, { useMemo, useState, useEffect } from "react";
import { CDBCard, CDBCardBody, CDBContainer, CDBDataTable } from "cdbreact";
import "./listar_adm_eventos.css";
import { CircularProgress, Menu, MenuItem } from "@mui/material";
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ArchiveRounded, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { eventoListarTodasDoacoesDinheiro, eventoListarTodasDoacoesObjeto } from "../../../../../service/EventoService";
import formatarData from "../../../../../utils/Functions";
import GuiaAdm from "../../../../../components/GuiaAdm";

function ListarDoadores() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabelaVazia, setTabelaVazia] = useState(true);
  const [timer, setTimer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventoIdClick, setEventoIdClick] = useState("");
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const idEvento = params.get("eventId");
  const [eventosObjeto, setEventosObjeto] = useState([]);

  useEffect(() => {
    Promise.all([
      eventoListarTodasDoacoesDinheiro(idEvento),
      eventoListarTodasDoacoesObjeto(idEvento)
    ]).then(([doacoesDinheiroResponse, doacoesObjetoResponse]) => {
      if (doacoesDinheiroResponse.length !== 0 || doacoesObjetoResponse.length !== 0) {
        setTabelaVazia(false);
      }
      setTimer(true);
      setEventos(doacoesDinheiroResponse);
      setEventosObjeto(doacoesObjetoResponse);
      setLoading(false);
    });
  }, []);
  

  const handleOpenMenu = (e, id) => {
    setAnchorEl(e.currentTarget);
    setEventoIdClick(id);
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setEventoIdClick("");
    setOpenMenu(false);
  };

const data = useMemo(() => {
  return {
    columns: [
      {
        label: "Doador",
        field: "nome",
        width: "auto",
      },
      {
        label: "Data",
        field: "data",
        width: "auto",
      },
      {
        label: "Forma de pagamento",
        field: "quantidadeDoadores",
        width: "auto",
      },
      {
        label: "Valor",
        field: "valor",
        width: "auto",
      },
    ],
    rows: eventos.flatMap((evento) => (
      (evento.doacoesDinheiro ?? []).map((doacao) => ({
        nome: doacao.emailDoador,
        data: formatarData(doacao.dataDoacao),
        quantidadeDoadores: doacao.formaDePagamento,
        valor: doacao.valorDoado,
      }))
    )),    
  };  
}, [eventos]);

const dataObj = useMemo(() => {
  return {
    columns: [
      {
        label: "Doador",
        field: "nome",
        width: "auto",
      },
      {
        label: "Data",
        field: "data",
        width: "auto",
      },
      {
        label: "Objeto",
        field: "quantidadeDoadores",
        width: "auto",
      },
      {
        label: "Quantidade",
        field: "valor",
        width: "auto",
      },
    ],
    rows: eventosObjeto.flatMap((evento) => (
      (evento.doacoesObjetos ?? []).map((doacao) => ({
        nome: doacao.emailDoador,
        data: formatarData(doacao.dataDoacao),
        quantidadeDoadores: doacao.nomeDoObjeto,
        valor: doacao.quantidade,
      }))
    )),    
  };  
}, [eventosObjeto]);
 
  return (
    <GuiaAdm title={"Doações para eventos"}>
      <h2 className="titleMoney">Doações em dinheiro</h2>
      <div className="painelEventos">
        <div className="container-tb">
          {loading ? (
            <div className="loaderEventos">
              <CircularProgress style={{ margin: "10em 0" }} />
            </div>
          ) : (
            <CDBContainer style={{ width: "100%" }}>
              <CDBCard>
                <CDBCardBody>
                  {timer && (
                    <CDBDataTable
                      entriesLabel="Mostrar doadores"
                      searchLabel="Pesquisar"
                      paginationLabel={["Anterior", "Próximo"]}
                      infoLabel={["Mostrando de", "até", "de", "doadores"]}
                      noRecordsFoundLabel="Nenhum doador encontrado"
                      hover
                      materialSearch
                      bordered
                      entriesOptions={[5, 10, 20, 30]}
                      entries={15}
                      pagesAmount={4}
                      maxHeight="10vh"
                      fixed
                      theadColor="#BF25E6"
                      data={data}
                    />
                  )}
                </CDBCardBody>
              </CDBCard>
            </CDBContainer>
          )}
        </div>
      </div>

<h2 className="titleObj">Doações de objetos</h2>

      <div className="painelEventos">
        <div className="container-tb">
          {loading ? (
            <div className="loaderEventos">
              <CircularProgress style={{ margin: "10em 0" }} />
            </div>
          ) : (
            <CDBContainer style={{ width: "100%", marginTop: '-50px' }}>
              <CDBCard>
                <CDBCardBody>
                  {timer && (
                    <CDBDataTable
                      entriesLabel="Mostrar doadores"
                      searchLabel="Pesquisar"
                      paginationLabel={["Anterior", "Próximo"]}
                      infoLabel={["Mostrando de", "até", "de", "doadores"]}
                      noRecordsFoundLabel="Nenhum doador encontrado"
                      hover
                      materialSearch
                      bordered
                      entriesOptions={[5, 10, 20, 30]}
                      entries={15}
                      pagesAmount={4}
                      maxHeight="10vh"
                      fixed
                      theadColor="#BF25E6"
                      data={dataObj}
                    />
                  )}
                </CDBCardBody>
              </CDBCard>
            </CDBContainer>
          )}
        </div>  
      </div>
    </GuiaAdm>
  );
}

export default ListarDoadores;
