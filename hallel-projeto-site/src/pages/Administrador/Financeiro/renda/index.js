import React from "react";
import "./renda.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";

const Renda = () => {
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
              <td>Descrição da renda</td>
              <td>Para</td>
              <td>Valor</td>
              <td>Data do gasto</td>
              <td>Feito por</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
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
