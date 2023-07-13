import { LinearProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Chart from "react-google-charts";

const FragmentoTwoPainelFinanceiro = () => {
  const [ultimasSaidas, setUltimasSaidas] = useState([]);
  const [entradaMensaisValor, setEntradaMensaisValor] = useState(0);
  const [saidaMensaisValor, setSaidaMensaisValor] = useState(0);
  const [saldo, setsaldo] = useState("");
  const [pizzaData, setPizzaData] = useState([
    ["Tipo", "Valor"],
  ]);

  function loadEntradasMensais() {
    let mesString = "0" + String(new Date().getMonth() + 1);
    let anoString = String(new Date().getFullYear());

    let url =
      "http://localhost:8080/api/financeiro/entradasMes/valor" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString;

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setEntradaMensaisValor(res.data);
        setPizzaData((prevArray) => [
          ...prevArray,
          ["Entrada", res.data],
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Load Saidas mensais valor

  function loadSaidaMensais() {
    let mesString = "0" + String(new Date().getMonth() + 1);
    let anoString = String(new Date().getFullYear());
    let url =
      "http://localhost:8080/api/financeiro/saidaMes/valor" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString;

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSaidaMensaisValor(res.data);
        setPizzaData((prevArray) => [
          ...prevArray,
          ["Saida", res.data],
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const optionsGraficoPizza = {
    title: "Saldo Total",
    slices: {
      0: { color: "#58D68D" },
      1: { color: "#E74C3C" },
    },
  };

  useEffect(() => {

    let url = "http://localhost:8080/api/financeiro/ultimasSaida";

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUltimasSaidas(res.data);
      });
  }, []);

  useEffect(() => {
    loadEntradasMensais();
    loadSaidaMensais();
    loadSaldo();
  })

  // Load saldo
  function loadSaldo() {
    let saldoCalc = parseFloat(entradaMensaisValor - saidaMensaisValor);

    let saldoDTO = saldoCalc.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setsaldo(saldoDTO);
  }

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
                <th>Descrição da saida</th>
                <th>Valor da saida</th>
              </tr>
            </thead>
            <tbody>
              {ultimasSaidas.length !== 0 ? (
                <>
                  {ultimasSaidas.map((saida) => {
                    return (
                      <tr>
                        <td>{saida.descricaoSaida}</td>
                        <td>
                          {saida.valorSaida.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <LinearProgress sx={{ backgroundColor: "#1A0631" }} />
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="cont_direita_frag_two_painel_financeiro">
        <div className="cont_info_frag_two_painel">
          <span>Saldo</span>
          <label>{saldo}</label>
        </div>
        <div className="cont_grafico_pizza_frag_two_painel_financeiro">
          <Chart
            chartType="PieChart"
            options={optionsGraficoPizza}
            data={pizzaData}
            width={"400px"}
            height={"350px"}
          />
        </div>
      </div>
    </div>
  );
};

export default FragmentoTwoPainelFinanceiro;
