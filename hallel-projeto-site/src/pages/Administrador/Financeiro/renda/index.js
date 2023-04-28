import React from "react";
import "./renda.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";
import rendasPDF from "../../../../Reports/rendas/rendas";
import { SaveAlt } from "@mui/icons-material";
import { Table } from "react-bootstrap";

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
        <a>Rendas</a>
      </div>
      <div className="containerTabelaRenda">
        <div className="headContTabelaRenda">
          <div className="tituloHeadContTabelaRenda">
            <a>Tabela de receitas</a>
          </div>
          <div className="iconsHeadContTabelaRenda">
            <a href="#">
              <SaveAlt
                style={{ width: "55px", height: "55px", color: "#333" }}
                className="icons"
                onClick={() => rendasPDF(receitas)}
              />
            </a>
            <a href="#">
              <img src={Arrow} className="icons" />
            </a>
          </div>
        </div>
        <Table style={{width: "60vw"}} striped borderless hover>
          <thead>
            <tr>
              <th>Descrição da renda</th>
              <th>Objeto</th>
              <th>Data da receita</th>
              <th>Feito por</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {receitas.map((item) => {
              return (
                <tr>
                  <td>{item.descricaoReceita}</td>
                  <td>{item.objeto === false ? "Não" : "Sim"}</td>
                  <td>{item.dataReceita}</td>
                  <td>{item.usuarioReceita}</td>
                  <td>R$ {item.valor}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="containerUltRenda">
        <div className="headUltRenda">
          <p>Ultimas Rendas</p>
        </div>
        <div className="containerTabelaUltRenda">
          <table>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Renda;
