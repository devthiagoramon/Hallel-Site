import React, { Component } from "react";
import "./style.css";
import Logo from "../../images/LogoHallel.png";

class Componentes extends Component {
  render() {
    return (
      <section className="containerSecSC">
        <div className="headSC">
          <img id="ImgLogoSC" src={Logo} alt="logo site"></img>
          <div className="textoHeadSC">
            <h1 id="solicitarSC">SOLICITAR</h1>
            <h1 id="cadSC">CADASTRO</h1>
          </div>
        </div>
        <div className="informacoesSC">
          <input itemType="text" placeholder="Nome completo"></input>
          <input itemType="text" placeholder="Insira seu email"></input>
          <input itemType="text" placeholder="Crie uma senha"></input>
          <input itemType="text" placeholder="Confirme sua senha"></input>
        </div>
        <div className="footerSC">
          <button id="JatemSC">ENVIAR</button>
          <div className="textoFooterSC">
            <a id="textoJatemSC">JA TEM UMA CONTA?</a>
            <a href="/entrar" id="entreSC">
              Entre aqui
            </a>
          </div>
        </div>
      </section>
    );
  }
}

class Geral extends Component {
  render() {
    return (
      <section className="containerGeralSC">
        <Componentes />
      </section>
    );
  }
}

function SolicitarCadastro() {
  return (
    <div>
      <Geral />
    </div>
  );
}

export default SolicitarCadastro;
