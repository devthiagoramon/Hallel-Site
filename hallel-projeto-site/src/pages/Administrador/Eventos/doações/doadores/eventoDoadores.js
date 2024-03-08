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
import { eventoListarTodasDoacoesDinheiro } from "../../../../../service/EventoService";
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
  useEffect(() => {
    eventoListarTodasDoacoesDinheiro(idEvento).then((response) => {
      console.log(response);
      if (response.length !== 0) {
        setTabelaVazia(false);
      }
      setTimer(true);
      setEventos(response);
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
 
  return (
    <GuiaAdm title={"Doações para eventos"}>
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
    </GuiaAdm>
  );
}

export default ListarDoadores;
