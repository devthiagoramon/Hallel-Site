import React, { Component } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import Chart from "react-google-charts";
import "./painelFin.css";
class PainelFinanceiro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ["Dia", "Valor", {role:"style"}],
      ],
      gastos: 0,
      lucros: 0,
      saldo: 0,
      receitas: [],
    };
    this.loadSaldo = this.loadSaldo.bind(this);
    this.loadLucro = this.loadLucro.bind(this);
    this.loadGastos = this.loadGastos.bind(this);
    this.loadDataFromAPI = this.loadDataFromAPI.bind(this);
    this.loadUltimasReceitas = this.loadUltimasReceitas.bind(this);
    this.loadGraficoRendaDia = this.loadGraficoRendaDia.bind(this);
    this.loadGraficoRendaMes = this.loadGraficoRendaMes.bind(this);
    this.loadGraficoRendaSemana = this.loadGraficoRendaSemana.bind(this);
    this.loadGraficoRendaSemana();
  }

  loadDataFromAPI() {
    this.loadSaldo();
    this.loadGastos();
    this.loadLucro();
    this.loadUltimasReceitas();
  }

  loadUltimasReceitas() {
    let url = "http://localhost:8080/api/financeiro/ultimasReceitas";

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
      .then((receitasBD) => {
        this.setState({ receitas: receitasBD });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadLucro() {
    let url = "http://localhost:8080/api/financeiro/lucroMensal";
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
        this.setState({ lucros: object });
      })
      .catch(console.warn("Error in API: in request of lucros"));
  }

  loadGastos() {
    let url = "http://localhost:8080/api/financeiro/gastoMensal";
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

  loadGraficoRendaMes() {}

  loadGraficoRendaSemana(){
    let url = "http://localhost:8080/api/financeiro/receita/semana";
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
        let index = 0;
        let dias = object.datas;
        let valores = object.valores;
        let arrayObject = [["Dia", "Valor", {role:"style"}]]
        dias.map((dia) => {
          arrayObject.push([dia, valores[index], "#FFCC6C"]);
          this.setState({data: arrayObject})
          index++;
        });
      })
      .catch(console.warn("Error in API: in request of actual date receita"));
  }

  loadGraficoRendaDia() {
    let url = "http://localhost:8080/api/financeiro/receita/dia";
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
        let arrayObject = [object.dia, object.valorTotal];
        this.setState({ data: arrayObject });
      })
      .catch(console.warn("Error in API: in request of actual date receita"));
  }

  componentDidMount() {
    this.loadDataFromAPI();
  }

  render() {
    return (
      <div className="containerFinanceiro">
        <div className="tituloPainelFinanceiro">
          <label>Painel Financeiro</label>
        </div>
        <div className="cards">
          <div className="cardLucroTotal">
            <label className="tituloCard">Saldo</label>
            <label className="valorNum">R$ {this.state.saldo}</label>
          </div>
          <div className="cardLucroMensal">
            <label className="tituloCard">Lucro Mensal</label>
            <label className="valorNum">R$ {this.state.lucros}</label>
            <a
              className="saibaMaisFin"
              href="/administrador/painelFinanceiro/rendas"
            >
              Saber mais
            </a>
          </div>
          <div className="cardDespesaMensal">
            <label className="tituloCard">Gasto Mensal</label>
            <label className="valorNum">R$ {this.state.gastos}</label>
            <a
              className="saibaMaisFin"
              href="/administrador/painelFinanceiro/gastos"
            >
              Saber mais
            </a>
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
        <div className="ultimasRendas">
          <label className="tituloUltimasRendas" style={{ color: "#363636" }}>
            Ultimas rendas
          </label>
          <Table
            hover
            style={{
              width: "95%",
              maxWidth: "95%",
              marginLeft: "2.5rem",
              marginTop: "1.5rem",
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
              {this.state.receitas.map((item) => {
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
      </div>
    );
  }
}

export default PainelFinanceiro;
