import React, { Component } from "react";
import "./eventInfo.css";
import {  } from "react-icons/bs";
import { ConnectWithoutContactRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

class InfoEventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: this.props.evento,
    };
  }

  render() {
    return (
      <section className="containerEvents">
        <div className="area-infos">
          <Corpo evento={this.state.evento} hide={this.props.hide} />
          <hr style={{marginTop: "30px", marginBottom: "30px"}}/>
          <Infos evento={this.state.evento} />
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
    console.log(this.state.evento);
    return (
      <div className="corpo_evento">
        <div className="cont_titulo_desc_evento_user">
          <h1 className="titulo_evento">{this.state.evento.titulo}</h1>
          <div className="descricao_evento_user">
            <label style={{ justifySelf: "flex-start" }}>Descrição</label>
            <p style={{wordBreak: "break-word"}}>{this.state.evento.descricao}</p>
          </div>
          <div className="container_participar_evento">
            <Button
              sx={{ background: "#1a0631" }}
              variant="contained"
              endIcon={<ConnectWithoutContactRounded />}
            >
              Participar do evento
            </Button>
          </div>
        </div>
        <div className="container_imagem_evento_user">
          <img
            style={{ maxHeight: "450px", marginRight: "3rem" }}
            className="imagemCp1_evento_user"
            src={this.state.evento.imagem}
            alt="imagem"
          />
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
        <div className="container_infos_desc_evento">
          <div className="subtopicos">
            <label>Informações</label>
            <ul className="topicosInfo">
              <li>Endereço: {this.state.evento.localEvento.localizacao}</li>
              <li>Data: {this.state.evento.date}</li>
              <li>Horário: {this.state.evento.horario}</li>
            </ul>
          </div>
          <div className="participantes">
            <label>Participantes:</label>
            <ul className="topicosInfo">
              {this.state.evento.palestrantes.map((palestrante) => {
                return <li>{palestrante}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default InfoEventos;
