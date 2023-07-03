import React, { useState, useEffect, useMemo } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import "./index.css";
import Table from "react-bootstrap/Table";
import {CircularProgress, Skeleton } from "@mui/material";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Evento() {
  const [eventos, setEventos] = useState([]);

  function renderizarEventos() {
    let url = "http://localhost:8080/api/eventos";

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
  useMemo(() => renderizarEventos(), []);

  const data = () => {
    return {
      columns: [
        {
          label: 'Nome',
          field: 'nome',
          width: 50,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Nome',
          },
        },
        {
          label: 'E-mail',
          field: 'email',
          width: 100,
        },
        {
          label: 'Status',
          field: 'status',
          width: 150,
        },
  
      ],

      rows: eventos.map((item) => ({
        nome: item.titulo,
        email: item.descricao,
        status: item.localidade,
      })),
      
    };
  };

  return (
    <div className="painelEventos">
      <h1>Eventos</h1>
      <div className="options">
        <button
          className="btnAdicionar"
          onClick={() => {
            window.location.href =
              "http://localhost:3000/administrador/eventos/criar";
          }}
        >
          Adicionar Evento
        </button>
        <button className="btnAltera">Alterar Evento</button>
        <button className="btnExcluir">Excluir</button>
      </div>

      <div className="container-tb">

      {eventos.length === 0 ? <div className="loaderEventos"><CircularProgress style={{margin: "10em 0"}} /></div> :
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
            entriesOptions={[10, 20, 30]}
            entries={15}
            pagesAmount={4}
            maxHeight = "10vh"
            fixed
          theadColor="#BF25E6"
            data={data()}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>}
      </div>
    </div>
  );
}
export default Evento;
