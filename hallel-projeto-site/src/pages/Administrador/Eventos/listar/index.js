import React, { useState, useEffect, useMemo } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import "./listar_adm_eventos.css";
import {
  Button,
  CircularProgress,
  Menu,
  MenuItem,
} from "@mui/material";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ArchiveRounded, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ModalArquivarEvento from "./ModalArquivarEvento";
import { VscKebabVertical } from "react-icons/vsc";
import { eventoListar } from "../../../../api/uris/EventosURLS";

function Evento() {
  const [eventos, setEventos] = useState([]);

  const [eventoIdClick, setEventoIdClick] = useState("");
  const [eventoIsDestaque, setEventoIsDestaque] = useState(false);
  const [anchorEl, setanchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const [openModalArquivar, setOpenModalArquivar] = useState(false);
  const [atualizarTabela, setAtualizarTabela] = useState(false);

  const [tabelaVazia, setTabelaVazia] = useState(true);
  const [timer, setTimer] = useState(false);
  const navigator = useNavigate();

  function renderizarEventos() {
    let url = eventoListar();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((evento) => {
        if (evento.length !== 0) {
          setTabelaVazia(false);
        }
        setEventos(evento);
        setTimer(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useMemo(() => renderizarEventos(), [atualizarTabela]);

  const data = () => {
    return {
      columns: [
        {
          label: "Titulo",
          field: "titulo",
          width: "auto",
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Nome",
          },
        },
        {
          label: "Data",
          field: "date",
          width: "auto",
        },
        {
          label: "Horario",
          field: "horario",
          width: "auto",
        },
        {
          label: "Localização",
          field: "localizacao",
          width: "auto",
        },
      ],

      rows: eventos?.map((item) => ({
        titulo: (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>{item.titulo}</label>
            <VscKebabVertical
              id="icKebab"
              onClick={(e) => abrirMenuEvento(e, item?.id, item?.destaque)}
            />
          </div>
        ),
        date: item.date,
        horario: item.horario,
        localizacao:
          item.localEvento === null
            ? "Nenhuma localização adicionada"
            : item.localEvento.localizacao,
      })),
    };
  };

  function abrirMenuEvento(e, id, destaque) {
    setanchorEl(e.currentTarget);
    setEventoIdClick(id);
    setEventoIsDestaque(destaque);
  }

  const handleClickLocaisEvento = () => {
    navigator("/administrador/locaisEvento");
  };

  const handleClickArquivados = () => {
    navigator("/administrador/eventos/arquivados");
  };

  const handleCloseMenuEvento = () => {
    setanchorEl(null);
    setEventoIdClick("");
  };

  return (
    <div className="painelEventos">
      <h1>Eventos</h1>
      <div className="options">
        <div className="esquerda_options">
          <div>
            <LocationOn sx={{ marginRight: "10px" }} />
            <Button style={{ width: "15em" }} onClick={handleClickLocaisEvento}>
              Locais de Evento
            </Button>
          </div>
          <div>
            <ArchiveRounded sx={{ marginRight: "10px" }} />
            <Button style={{ width: "15em" }} onClick={handleClickArquivados}>
              Eventos arquivados
            </Button>
          </div>
        </div>
        <div className="direita_options">
          <button
            className="btnAdicionar"
            onClick={() => {
              window.location.href =
                "http://localhost:3000/administrador/eventos/criar";
            }}
          >
            Adicionar Evento
          </button>
        </div>
      </div>
      <div className="container-tb">
        {tabelaVazia ? (
          <>
            {timer === false && (
              <div className="loaderEventos">
                <CircularProgress style={{ margin: "10em 0" }} />
              </div>
            )}
            {timer === true && (
              <CDBContainer style={{ width: "100%" }}>
                <CDBCard>
                  <CDBCardBody>
                    <CDBDataTable
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
                      data={data()}
                    />
                  </CDBCardBody>
                </CDBCard>
              </CDBContainer>
            )}
          </>
        ) : (
          <CDBContainer style={{ width: "100%" }}>
            <CDBCard>
              <CDBCardBody>
                <CDBDataTable
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
                  data={data()}
                />
              </CDBCardBody>
            </CDBCard>
          </CDBContainer>
        )}
      </div>
      <Menu
        className="menu_evento"
        open={openMenu}
        onClose={handleCloseMenuEvento}
        anchorEl={anchorEl}
      >
        <MenuItem
          onClick={() => {
            navigator("/administrador/eventos/" + eventoIdClick + "/editar");
          }}
        >
          Editar Evento
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenModalArquivar(true);
          }}
        >
          Arquivar Evento
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator("/administrador/eventos/" + eventoIdClick + "/despesas");
          }}
        >
          Despesas
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator("/administrador/eventos/addDestaque" + eventoIdClick);
          }}
        >Destacar Evento</MenuItem>
      </Menu>
      <ModalArquivarEvento
        setAtualizarTabela={setAtualizarTabela}
        atualizarTabela={atualizarTabela}
        idEvento={eventoIdClick}
        openModalArquivar={openModalArquivar}
        setOpenModalArquivar={setOpenModalArquivar}
      />
    </div>
  );
}
export default Evento;
