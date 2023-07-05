import React, { useState, useEffect, useMemo } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import "./listar_adm_eventos.css";
import Table from "react-bootstrap/Table";
import { Button, CircularProgress, Menu, MenuItem, Skeleton } from "@mui/material";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Evento() {
  const [eventos, setEventos] = useState([]);

  const [eventoIdClick, setEventoIdClick] = useState("");
  const [anchorEl, setanchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const navigator = useNavigate();

  function renderizarEventos() {
    let url = "http://localhost:8080/api/eventos/listar";

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
        console.log(evento);
        setEventos(evento);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => renderizarEventos(), []);

  const data = () => {
    return {
      columns: [
        {
          label: 'Titulo',
          field: 'titulo',
          width: "auto",
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Nome',
          },
        },
        {
          label: 'Data',
          field: 'date',
          width: "auto",
        },
        {
          label: 'Horario',
          field: 'horario',
          width: "auto",
        },
        {
          label: 'Localização',
          field: "localizacao",
          width: "auto"
        }

      ],

      rows: eventos.map((item) => ({
        titulo: item.titulo,
        date: item.date,
        horario: item.horario,
        localizacao: item.localEvento === null ? "Nenhuma localização adicionada" : item.localEvento.localizacao,
        clickEvent: (e) => abrirMenuEvento(e, item.id)
      })),

    };
  };

  function abrirMenuEvento(e, id) {
    setanchorEl(e.currentTarget);
    setEventoIdClick(id);
  }

  const handleClickLocaisEvento = () => {
    navigator("/administrador/locaisEvento");
  }

  const handleCloseMenuEvento = () => {
    setanchorEl(null)
    setEventoIdClick("");
  }

  return (
    <div className="painelEventos">
      <h1>Eventos</h1>
      <div className="options">
        <div className="esquerda_options">
          <LocationOn sx={{ marginRight: "10px" }} />
          <Button style={{ width: "15em" }} onClick={handleClickLocaisEvento}>
            Locais de Evento
          </Button>
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
        {eventos.length === 0 ? <div className="loaderEventos"><CircularProgress style={{ margin: "10em 0" }} /></div> :
          <CDBContainer>
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
          </CDBContainer>}
      </div>
      <Menu className="menu_evento" open={openMenu} onClose={handleCloseMenuEvento} anchorEl={anchorEl}>
        <MenuItem>
          Editar Evento
        </MenuItem>
        <MenuItem>Excluir Evento</MenuItem>
        <MenuItem onClick={() => { navigator("/administrador/eventos/" + eventoIdClick + "/despesas") }}>Despesas</MenuItem>
      </Menu>
    </div>
  );
}
export default Evento;
