import React from "react";
import "./gastos.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import Add from "./../../../../images/addCircle.svg";
import { useMemo } from "react";
import { useState } from "react";
import ModalAddDespesa from "./addModal";
import gastosPDF from "../../../../Reports/gastos/gastos";
import { SaveAlt } from "@mui/icons-material";

const Gasto = () => {

  const [gastos, setgastos] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

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

  function getSaldoTotal() {
    let saldoTotal = 0;
    gastos.forEach((item) => {
      saldoTotal += item.valor;
    });
    return saldoTotal;
  }

  function dataAtual() {
    let date = new Date();
    let dia = String(date.getDay());
    let mes = String(date.getMonth());
    let ano = String(date.getFullYear());

    return dia + "/" + mes + "/" + ano;
  }
  return (
    <div className="containerGasto">
      <div className="cabecalhoGasto">
        <a>Gastos</a>
      </div>
      <div className="containerTabela">
        <div className="headContTabela">
          <div className="tituloHeadContTabela">
            <a>Tabela de gasto</a>
          </div>
          <div className="iconsHeadContTabela">
            <a href="#" onClick={() => setisModalOpen(true)}>
              <img src={Add} />
              Adicionar Despesa
            </a>
            <a href="#">
              <SaveAlt style={{width: "55px", height: "55px", color: "#333"}} className="icons" onClick={() => gastosPDF(gastos)}/>
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
              <th>Data do gasto</th>
              <th>Feito por</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((item) => {
              return (
                <tr>
                  <td>{item.descricaoGasto}</td>
                  <td>{item.finalidadeGasto}</td>
                  <td>{item.dataGasto}</td>
                  <td>{item.usuarioGasto}</td>
                  <td>R$ {item.valor}</td>
                </tr>
              );
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
              <td>Teste</td>
              <td>Teste</td>
            </tr>
          </table>
        </div>
      </div>
      {isModalOpen === true ? (
        <ModalAddDespesa hide={() => setisModalOpen(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Gasto;
