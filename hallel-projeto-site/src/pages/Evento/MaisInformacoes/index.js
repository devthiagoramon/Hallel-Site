import React, { Component, useState } from "react";
import "./eventInfo.css";
import {BsArrowReturnLeft} from "react-icons/bs"

class InfoEventos extends Component {

  constructor(props){
    super(props);
    this.state = {
      evento: this.props.evento
    }
  }

  render() {
    return (
          
          <section className="containerEvents">

                      <div className="voltar">
                          
                          <button onClick={this.props.hide}><BsArrowReturnLeft style={{fontSize: "1.8em"}}/></button>
                    </div>
                            

            <div className="area-infos">
                
                <Corpo evento={this.state.evento} hide={this.props.hide}/>
                <hr/>
                <Infos evento={this.state.evento}/>
            </div>

          </section>
      
    );
  }
}

class Corpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: this.props.evento,
    };
  }

  render() {

     console.log(this.state.evento)
    return (
      <div className="corpo_evento">

        <div className="evento_banner">

          <div className= "titulo_evento">

          <h1 className="tituloEventos">{this.state.evento.titulo}</h1>
          </div>
        <div className="imagem">
          <img
            className="imagemCp1"
            src={this.state.evento.imagem} 
            alt="imagem"
          ></img>
        </div>

        </div>
        <div className="descricaoEvento">
          <h2>Descrição</h2>
          <p>{this.state.evento.descricao}</p>
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
        <div className="subtopicos">
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
          <h2>Participantes:</h2>
        </div>
      </div>
    );
  }
}
export default InfoEventos;
