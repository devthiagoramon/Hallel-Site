import React, { useMemo, useState, useEffect } from "react";
import { CDBCard, CDBCardBody, CDBContainer, CDBDataTable } from "cdbreact";
import "./listar_adm_eventos.css";
import { CircularProgress, Menu, MenuItem } from "@mui/material";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ArchiveRounded, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { eventoListarTodasDoacoes } from "../../../../service/EventoService";
import formatarData from "../../../../utils/Functions";
import GuiaAdm from "../../../../components/GuiaAdm";
import ListarDoadores from "./doadores/eventoDoadores";

function ListarDoacoes() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabelaVazia, setTabelaVazia] = useState(true);
  const [timer, setTimer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventoIdClick, setEventoIdClick] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    eventoListarTodasDoacoes().then((response) => {
      console.log(response);
      if (response.length !== 0) {
        setTabelaVazia(false);
      }
      setTimer(true);
      setEventos(response);
      setLoading(false);
    });
  }, []); 

  const handleClickEvento = (id) => {
    navigate(`/administrador/eventos/${id}/verDoadores`);
    console.log(id);
  };
  

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
        label: "Nome do Evento",
        field: "nome",
        width: "auto",
      },
      {
        label: "Data",
        field: "data",
        width: "auto",
      },
      {
        label: "Quantidade de Doadores",
        field: "quantidadeDoadores",
        width: "auto",
      },
    ],
    rows: eventos.map((evento) => ({
      nome: evento.nomeEvento,
      data: formatarData(evento.dataEvento),
      quantidadeDoadores: evento.totalDeDoacoes,
      clickEvent: () => handleClickEvento(evento.idEvento),
    })),
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
                      onRowClick={true}
                      entriesLabel="Mostrar eventos"
                      searchLabel="Pesquisar"
                      paginationLabel={["Anterior", "Próximo"]}
                      infoLabel={["Mostrando de", "até", "de", "eventos"]}
                      noRecordsFoundLabel="Nenhum evento encontrado"
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
        <Menu
          className="menu_evento"
          open={openMenu}
          onClose={handleCloseMenu}
          anchorEl={anchorEl}
        >
          <MenuItem onClick={() => navigate(`/administrador/eventos/${eventoIdClick}/editar`)}>
            Editar Evento
          </MenuItem>
        </Menu>
      </div>
    </GuiaAdm>
  );
}

export default ListarDoacoes;
