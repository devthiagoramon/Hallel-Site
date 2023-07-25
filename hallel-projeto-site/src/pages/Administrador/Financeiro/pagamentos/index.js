import React from "react";
import "./pagamentos.css";
import { useMemo } from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@mui/material";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import { associadosGetAllPagamentosAPI } from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";

const PagamentosAssociado = () => {
  const [pagamentosAssociados, setpagamentosAssociados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useMemo(() => {
    let url = associadosGetAllPagamentosAPI();

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setpagamentosAssociados(res.data);
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

  const data = () => {
    return {
      columns: [
        {
          label: "Nome",
          field: "nome",
          width: 50,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Nome",
          },
        },
        {
          label: "Valor",
          field: "valor",
          width: 150,
        },
        {
          label: "Data de pagamento",
          field: "datadepagamento",
          width: 150,
        },
        {
          label: "Tipo de pagamento",
          field: "tipo",
          width: 150,
        },
      ],

      rows: pagamentosAssociados.map((item) => ({
        nome: item.nome,
        valor:
          item.transacao == null || item.transacao.mensalidade == null
            ? ""
            : item.transacao.mensalidade + ",00 R$",
        datadepagamento:
          item.transacao == null || item.transacao.dataExp == null
            ? ""
            : item.transacao.dataExp,
        tipo:
          item.transacao == null || item.transacao.metodoPagamento == null
            ? ""
            : item.transacao.metodoPagamento == "CARTAO_CREDITO"
            ? "Crédito"
            : "",
      })),
    };
  };

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
          {/* <div className="pesquisaHeadContTabelaPagamentos">
            <Form.Control
              onChange={(e) => {
                setPesquisa(e.target.value);
              }}
              placeholder="Pesquisar pagamento (Nome)"
            />
          </div> */}
        </div>

        {pagamentosAssociados.length == 0 ? (
          <div className="CircularProgress" style={{ marginBottom: "10em" }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            {/* parametros falta */}
            <CDBContainer>
              <CDBCard>
                <CDBCardBody>
                  <CDBDataTable
                    entriesLabel="Mostrar associados"
                    searchLabel="Pesquisar"
                    paginationLabel={["Anterior", "Próximo"]}
                    infoLabel={["Mostrando de", "até", "de", "associados"]}
                    noRecordsFoundLabel="Nenhum associado encontrado"
                    hover
                    materialSearch
                    bordered
                    entriesOptions={[10, 20, 30]}
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
          </>
        )}
      </div>
    </div>
  );
};

export default PagamentosAssociado;
