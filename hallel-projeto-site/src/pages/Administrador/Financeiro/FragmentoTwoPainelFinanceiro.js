import React from "react";
import { Table } from "react-bootstrap";
import Chart from "react-google-charts";

const FragmentoTwoPainelFinanceiro = () => {
  const dataPizza = [
    ["Tipo", "Valor"],
    ["Entrada", 3000],
    ["Saida", 750],
  ];

  const optionsGraficoPizza = {
    title: "Saldo Total",
    slices: {
      0: { color: "#58D68D" },
      1: { color: "#E74C3C" },
    },
  };
  return (
    <div className="cont_frag_two_painel_financeiro">
      <div className="cont_esquerda_frag_two_painel_financeiro">
        <div className="cont_tabelas_ultimas_painel_financeiro">
          <label>Ultimas Saidas</label>
          <Table
            hover
            style={{
              width: "100%",
              maxWidth: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
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
              <tr>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="cont_direita_frag_two_painel_financeiro">
        <div className="cont_info_frag_two_painel">
          <span>Saldo</span>
          <label>R$ 2.500,00</label>
        </div>
        <div className="cont_grafico_pizza_frag_two_painel_financeiro">
          <Chart
            chartType="PieChart"
            options={optionsGraficoPizza}
            data={dataPizza}
            width={"400px"}
            height={"350px"}
          />
        </div>
      </div>
    </div>
  );
};

export default FragmentoTwoPainelFinanceiro;
