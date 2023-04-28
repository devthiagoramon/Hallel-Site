import { ArrowBack } from '@mui/icons-material';
import React, { useMemo, useState } from 'react'
import { Table } from 'react-bootstrap';

const AssociadosADM = () => {
 const [associados, setassociados] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/associado";

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
          <div className="iconsHeadContTabelaPagamentos">
            <a href="#">
              <img src={ArrowBack} className="icons" />
            </a>
          </div>
        </div>
        <Table style={{ width: "90vw" }} borderless hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Participando</th>
              <th>Status</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {associados.map((item) => {
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