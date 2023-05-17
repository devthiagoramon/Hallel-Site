import { ArrowBack } from '@mui/icons-material';
import React, { useMemo, useState } from 'react'
import { Form, Table } from 'react-bootstrap';

const AssociadosADM = () => {
 const [associados, setassociados] = useState([]);
 const [pesquisa, setPesquisa] = useState("");

  useMemo(() => {
    let url = "http://localhost:8080/api/associados";

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
      .then((associados) => {
        setassociados(associados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const associadosFiltrado = useMemo(() => {
    let lowerPesquisa = pesquisa.toLowerCase();
    return associados.filter((associado) =>
      associado.nome.toLowerCase().includes(lowerPesquisa)
    );
  }, [associados, pesquisa]);

  return (
    <div className="containerPagamentos">
      <div className="cabecalhoPagamentos">
        <a>Associados</a>
      </div>
      <div className="containerTabelaPagamentos">
        <div className="headContTabelaPagamentos">
          <div className="tituloHeadContTabelaPagamentos">
            <a>Tabela de Associados</a>
          </div>
          <div className="pesquisaHeadContTabelaPagamentos">
            <Form.Control
              onChange={(e) => {
                setPesquisa(e.target.value);
              }}
              placeholder="Pesquisar Associado"
            />
          </div>
        </div>
        <Table style={{ width: "100%" }} borderless hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Participando dos eventos</th>
              <th>Status</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {associadosFiltrado.map((item) => {
              return (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.eventoParticipando}</td>
                  <td>{item.isAssociado}</td>
                  <td>{item.isPago ? "Sim" : "Não"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AssociadosADM;