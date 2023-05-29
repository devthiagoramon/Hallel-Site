import React from "react";
import "./pagamentos.css";
import { useMemo } from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";

const PagamentosAssociado = () => {
  const [pagamentosAssociados, setpagamentosAssociados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useMemo(() => {
    let url = "http://localhost:8080/api/associados/getAllPagamentos";

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

  const pagamentosAssociadosFiltrado = useMemo(() => {
    let lowerPesquisa = pesquisa.toLowerCase();
    return pagamentosAssociados.filter((pagamento) =>
      pagamento.nome.toLowerCase().includes(lowerPesquisa)
    );
  }, [pagamentosAssociados, pesquisa]);

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
          <div className="pesquisaHeadContTabelaPagamentos">
            <Form.Control
              onChange={(e) => {
                setPesquisa(e.target.value);
              }}
              placeholder="Pesquisar pagamento (Nome)"
            />
          </div>
        </div>
        <Table style={{ width: "100%" }} striped hover>
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
            {pagamentosAssociadosFiltrado.map((item) => {
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
        </Table>
      </div>
    </div>
  );
};

export default PagamentosAssociado;
