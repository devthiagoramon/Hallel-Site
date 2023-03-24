import React from "react";
import "./pagamentos.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";
import { SaveAlt } from "@mui/icons-material";

const PagamentosAssociado = () => {
  const [pagamentosAssociados, setpagamentosAssociados] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/associado/getAllPagamentos";

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
      .then((pagAssociados) => {
        setpagamentosAssociados(pagAssociados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="containerPagamentos">
      <div className="cabecalhoPagamentos">
        <a>Pagamentos de Associados</a>
      </div>
      <div className="containerTabelaPagamentos">
        <div className="headContTabelaPagamentos">
          <div className="tituloHeadContTabelaPagamentos">
            <a>Tabela de Pagamentos de Associados</a>
          </div>
          <div className="iconsHeadContTabelaPagamentos">
            <a href="#">
              <img src={Arrow} className="icons" />
            </a>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de expiração</th>
              <th>Metodo</th>
              <th>Mensalidade</th>
              <th>Pago</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {pagamentosAssociados.map((item) => {
              return (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.transacao.dataExp}</td>
                  <td>{item.transacao.metodoPagamento}</td>
                  <td>{item.transacao.mensalidade}</td>
                  <td>{item.isPago ? "Sim" : "Não"}</td>
                  <td>{item.situacao}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagamentosAssociado;
