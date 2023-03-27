import React from "react";
import "./doacoesAdm.css";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";

const DoacoesDinheiroAdm = () => {
  const [doacoes, setdoacoes] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/doacao/list";

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
      .then((doacoes) => {
        setdoacoes(doacoes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="containerDoacoesAdm">
      <div className="cabecalhoDoacoesAdm">
        <a>Doações</a>
      </div>
      <div className="containerTabelaDoacoesAdm">
        <div className="headContTabelaDoacoesAdm">
          <div className="tituloHeadContTabelaDoacoesAdm">
            <a>Tabela de Doações</a>
          </div>
          <div className="iconsHeadContTabelaDoacoesAdm">
            <a href="#">
              <img src={Arrow} className="icons" />
            </a>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Email do Doador</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Data da Doação</th>
              <th>Valor da Doação</th>
            </tr>
          </thead>
          <tbody>
            {doacoes.map((item) => {
              return (
                <tr>
                  <td>{item.emailDoador}</td>
                  <td>{item.descricao}</td>
                  <td>{item.tipo}</td>
                  <td>{item.dataDoacao}</td>
                  <td>{item.valorDoacao}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoacoesDinheiroAdm;
