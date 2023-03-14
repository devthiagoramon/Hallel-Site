import React from "react";
import "./renda.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";

const Renda = () => {

  const [receitas, setReceitas] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/financeiro/receita";

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
      .then((receitas) => {
        setReceitas(receitas);
        console.log(receitas)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <div className="containerRenda">
      <div className="cabecalho">
        <p>Rendas</p>
      </div>
      <div className="containerTabela">
        <div className="headContTabela">
          <div className="tituloHeadContTabela">
            <p>Tabela de receitas</p>
          </div>
          <div className="iconsHeadContTabela">
            <a href="#">
              <img src={Printer} className="icons" />
            </a>
            <a href="#">
              <img src={Arrow} className="icons" />
            </a>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Descrição da renda</th>
              <th>Valor</th>
              <th>Data da receita</th>
              <th>Objeto</th>
              <th>Feito por</th>
            </tr>
          </thead>
          <tbody>
            {receitas.map((item) => {
              return (
                <tr>
                  <td>{item.descricaoReceita}</td>
                  <td>{item.valor}</td>
                  <td>{item.dataReceita}</td>
                  <td>{item.objeto === false ? "Não" : "Sim"}</td>
                  <td>{item.usuarioReceita}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="containerUltRenda">
        <div className="headUltRenda">
          <p>Ultimas Rendas</p>
        </div>
        <div className="containerTabelaUltRenda">
          <table>
            <tr>
              <td>
                Teste
              </td>
              <td>
                Teste
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Renda;
