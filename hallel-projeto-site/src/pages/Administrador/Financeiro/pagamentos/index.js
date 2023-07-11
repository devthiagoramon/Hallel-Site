import React from "react";
import "./pagamentos.css";
import { useMemo } from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@mui/material";

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


        {pagamentosAssociados.length == 0    
        ?
          
        <div className="CircularProgress" style={{marginBottom: "10em"}}>
          <CircularProgress/>
        </div>
          
        :
        <Table style={{ width: "100%" }} striped hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Mês de pagamento</th>
              <th>Tipo de pagamento</th>
            </tr>
          </thead>
          <tbody>


            {/* parametros falta */}
            {pagamentosAssociadosFiltrado.map((item) => {
              return (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.dataFinalPagamento}</td>
                  <td>{item.dataFinalPagamento}</td>
                  <td>{item.dataFinalPagamento}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        }
      </div>
    </div>
  );
};

export default PagamentosAssociado;
