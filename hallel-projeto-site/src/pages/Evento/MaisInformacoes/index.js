import React, { Component, useState } from "react";
import "./eventInfo.css";


class Corpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: this.props.evento,
    };
  }

  render() {
    return (
      <div className="corpo1">
        <div className="imagem">
          <img
            className="imagemCp1"
            src={this.state.evento.imagem} 
            alt="imagem"
          ></img>
        </div>
        <div className="descCp1">
          <h2>DESCRIÇÃO</h2>
          <p>{this.state.evento.descricao}</p>
        </div>
        <div className="voltar">
          <button onClick={this.props.hide}>Voltar</button>
        </div>
      </div>
    );
  }
}

class Infos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: this.props.evento,
    };
  }
  render() {
    return (
      <div className="infos">
        <div className="sub">
          <ul id="topicosInfo">
            <li>
              <a>Endereço: {this.state.evento.localidade}</a>
            </li>
            <br />
            <br />
            <li>
              <a>Data: {this.state.evento.date}</a>
            </li>
            <br />
            <br />
            <li>
              <a>Horário: {this.state.evento.horario}</a>
            </li>
            <br />
            <br />
          </ul>
        </div>
        <div className="participantes">
          <h2>PARTICIPANTES:</h2>
        </div>
      </div>
    );
  }
}

class InfoEventos extends Component {

  constructor(props){
    super(props);
    this.state = {
      evento: this.props.evento
    }
  }

  render() {
    return (
      <div>
        <h1 className="titulo">Hallel</h1>
        <Corpo evento={this.state.evento} hide={this.props.hide}/>
        <hr></hr>
        <Infos evento={this.state.evento}/>
      </div>
    );
  }
}

export default InfoEventos;
