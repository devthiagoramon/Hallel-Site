import { CircularProgress, Menu, MenuItem } from "@mui/material";
import { CDBCard, CDBCardBody, CDBContainer, CDBDataTable } from "cdbreact";
import React, { useMemo, useState } from "react";
import ModalDesarquivarEvento from "./ModalDesarquivarEvento";
import { listarTodosEventosArquivadosService } from "../../../../service/EventoService";
import GuiaAdm from "../../../../components/GuiaAdm";

const EventosArquivado = () => {
  const [eventoIdClick, setEventoIdClick] = useState("");
  const [anchorEl, setanchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const [tabelaVazia, setTabelaVazia] = useState(true);
  const [timer, setTimer] = useState(false);

  const [OpenModalDesarquivar, setOpenModalDesarquivar] = useState(false);
  const [atualizarTabela, setAtualizarTabela] = useState(false);
  const [eventos, setEventos] = useState([]);
  useMemo(() => {
    listarTodosEventosArquivadosService().then((response) => {
      if (data.length !== 0) {
        setTabelaVazia(false);
      }
      setTimer(true);
      setEventos(response);
    });
  }, [atualizarTabela]);
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

      rows: eventos?.map((item) => ({
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

  return (
    <GuiaAdm title={"Eventos arquivados"}>
      <div className="painelEventos">
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
    </GuiaAdm>
  );
};

export default EventosArquivado;
