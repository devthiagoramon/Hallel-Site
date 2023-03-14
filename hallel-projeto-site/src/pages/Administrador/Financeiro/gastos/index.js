import React from "react";
import "./gastos.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";

const Gasto = () => {

  const [gastos, setgastos] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/financeiro/gastos";

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
      .then((gastos) => {
        setgastos(gastos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <div className="containerGasto">
      <div className="cabecalhoGasto">
        <p>Gastos</p>
      </div>
      <div className="containerTabela">
        <div className="headContTabela">
          <div className="tituloHeadContTabela">
            <p>Tabela de gasto</p>
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
              <th>Descrição do gasto</th>
              <th>Para</th>
              <th>Valor</th>
              <th>Data do gasto</th>
              <th>Feito por</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((item) => {
              return (
                <tr>
                  <td>{item.descricaoGasto}</td>
                  <td>{item.finalidadeGasto}</td>
                  <td>{item.valor}</td>
                  <td>{item.dataGasto}</td>
                  <td>{item.usuarioGasto}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="containerUltGastos">
        <div className="headUltGastos">
          <p>Ultimas Rendas</p>
        </div>
        <div className="containerTabelaUltGasto">
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

export default Gasto;
