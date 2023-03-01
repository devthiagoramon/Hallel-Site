import React, { Component } from "react";
import Chart from "react-google-charts";
import "./painelFin.css";

export default class PainelFinanceiro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opcoesGrafico: {
        hAxis: { title: "Dia", viewWindow: { min: 0, max: 31 } },
        vAxis: { title: "Valor", viewWindow: { min: 0, max: 500 } },
        legend: "none",
      },
      data: [
        ["Dia", "Valor"],
        [1, 100],
        [2, 120],
        [3, 29],
        [4, 190],
        [5, 40],
        [6, 200],
        [7, 90],
        [8, 100],
        [9, 24],
        [10, 200],
        [11, 20],
        [12, 400],
        [13, 40],
        [14, 215],
        [15, 253],
        [16, 125],
        [17, 95],
        [18, 93],
        [19, 24],
        [20, 16],
        [21, 20],
        [22, 59],
        [23, 29],
        [24, 59],
        [25, 49],
      ],
      gastos: 0,
      lucros: 0,
      saldo: 0,
    };
    this.loadSaldo = this.loadSaldo.bind(this)
    this.loadDataFromAPI = this.loadDataFromAPI.bind(this)
  }

  loadDataFromAPI() {
    this.loadSaldo()
  }

  /*
  loadLucro() {
    let url = "http://localhost:8080/api/financeiro/receita";
    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));
    fetch(url, {
      headers: myHeaders,
      method: "GET",
    }).then((res) => {
      return res.json();
    }).then((object) => {
      this.setState({lucros:object})
    }).catch((console.warn("Error in API: in request of lucros")));
  }
  */
  /*
  loadGastos() {
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
      .then((object) => {
        this.setState({ gastos: object });
      })
      .catch(console.warn("Error in API: in request of gastos"));
  }
  */
  loadSaldo() {
    let url = "http://localhost:8080/api/financeiro/lucro";
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
      .then((object) => {
        this.setState({ saldo: object });
      })
      .catch(console.warn("Error in API: in request of saldo"));
  }

  componentDidMount() {
    this.loadDataFromAPI()
  }

  render() {
    return (
      <div className="containerFinanceiro">
        <div className="titulo">
          <p>Painel Financeiro</p>
        </div>
        <div className="cards">
          <div className="cardLucroTotal">
            <p className="tituloCard">Saldo</p>
            <p className="valorNum">{this.state.saldo}</p>
          </div>
          <div className="cardLucroMensal">
            <p className="tituloCard">Lucro Mensal</p>
            <p className="valorNum">R$ 1500.0</p>
          </div>
          <div className="cardDespesaMensal">
            <p className="tituloCard">Gasto Mensal</p>
            <p className="valorNum">R$ 1000.0</p>
          </div>
        </div>
        <div className="painelGrafico">
          <div className="graficoEsquerda">
            <p>Gráfico de Renda</p>
            <Chart
              style={{ marginLeft: "20px", marginTop: "40px" }}
              width="95%"
              height={"17rem"}
              chartType="ColumnChart"
              data={this.state.data}
              options={this.state.opcoesGrafico}
            />
          </div>
          <div className="escolhaDireita">
            <button>Dia Atual</button>
            <button className="selecionado">Semana atual</button>
            <button>Mês atual</button>
            <button>Ano atual</button>
          </div>
        </div>
        <div className="ultimosAssociado">
          <p className="tituloAssociado" style={{ color: "#363636" }}>
            Ultimos associados
          </p>
        </div>
      </div>
    );
  }
}
