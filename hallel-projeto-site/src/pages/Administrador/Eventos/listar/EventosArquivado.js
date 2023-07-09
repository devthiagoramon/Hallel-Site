import { CircularProgress, Menu, MenuItem } from "@mui/material";
import { CDBCard, CDBCardBody, CDBContainer, CDBDataTable } from "cdbreact";
import React, { useMemo, useState } from "react";
import ModalDesarquivarEvento from "./ModalDesarquivarEvento";

const EventosArquivado = () => {
  const [eventos, setEventos] = useState([]);

  const [eventoIdClick, setEventoIdClick] = useState("");
  const [anchorEl, setanchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const [tabelaVazia, setTabelaVazia] = useState(true);
  const [timer, setTimer] = useState(false);

  const [OpenModalDesarquivar, setOpenModalDesarquivar] = useState(false);
  const [atualizarTabela, setAtualizarTabela] = useState(false);

  const handleCloseMenuEvento = () => {
    setanchorEl(null);
    setEventoIdClick("");
  };

  function abrirMenuEvento(e, id) {
    setanchorEl(e.currentTarget);
    setEventoIdClick(id);
  }

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

      rows: eventos.map((item) => ({
        titulo: item.titulo,
        date: item.date,
        horario: item.horario,
        localizacao:
          item.localEvento === null
            ? "Nenhuma localização adicionada"
            : item.localEvento.localizacao,
        clickEvent: (e) => abrirMenuEvento(e, item.id),
      })),
    };
  };

  function renderizarEventos() {
    let url = "http://localhost:8080/api/administrador/evento/arquivados";

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

  return (
    <div className="painelEventos">
      <h1>Eventos arquivados</h1>
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
                      entriesLabel="Mostrar eventos arquivados"
                      searchLabel="Pesquisar arquivados"
                      paginationLabel={["Anterior", "Próximo"]}
                      infoLabel={["Mostrando de", "até", "de", "eventos"]}
                      noRecordsFoundLabel="Nenhum evento arquivado encontrado"
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
                  entriesLabel="Mostrar eventos arquivados"
                  searchLabel="Pesquisar arquivados"
                  paginationLabel={["Anterior", "Próximo"]}
                  infoLabel={["Mostrando de", "até", "de", "eventos"]}
                  noRecordsFoundLabel="Nenhum evento arquivado encontrado"
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
            setOpenModalDesarquivar(true);
          }}
        >
          Desarquivar Evento
        </MenuItem>
      </Menu>
      <ModalDesarquivarEvento
        setAtualizarTabela={setAtualizarTabela}
        atualizarTabela={atualizarTabela}
        idEvento={eventoIdClick}
        OpenModalDesarquivar={OpenModalDesarquivar}
        setOpenModalDesarquivar={setOpenModalDesarquivar}
      />
    </div>
  );
};

export default EventosArquivado;
