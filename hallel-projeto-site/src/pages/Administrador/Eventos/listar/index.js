import React, { useState, useEffect, useMemo } from "react";
import "./index.css";

function Evento() {
  const [eventos, setEventos] = useState([]);

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
  useMemo(() => renderizarEventos(), []);

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
      <table className="tabelaEvento">
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Descrição</td>
            <td>Local</td>
          </tr>
        </thead>
        <tbody>
          {eventos.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.descricao}</td>
                <td>{item.localidade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Evento;
