import React, { Component } from 'react';
import './style.css';
import Logo from "../../images/LogoHallel.png"

class Componentes extends Component{
  render(){
    return(
      <section className='containerSec'>
        <div className='logo'>
          <img id = "ImgLogo" src= {Logo} alt="logo site"></img>
        </div>
          <h1 id='solicitar'>SOLICITAR</h1>
          <h1 id='cad'>CADASTRO</h1>
        <div className='informacoes'>
          <ul>
            <li><input itemType='text' placeholder='Nome completo'></input></li>
            <li><input itemType='text' placeholder='Insira seu email'></input></li>
            <li><input itemType='text' placeholder='Crie uma senha'></input></li>
            <li><input itemType='text' placeholder='Confirme sua senha'></input></li>
          </ul>
        </div>
          <button id='Jatem'>ENVIAR</button>
          <a id='textoJatem'>JA TEM UMA CONTA?</a>
          <a href='entreaqui.html' id='entre'>Entre aqui</a>
      </section>
    );
  }
}

class Geral extends Component{
  render(){
    return(
      <section className='containerGeral'>
        <Componentes/>
      </section>
    );
  }
}

function SolicitarCadastro() {
  return (
    <div>
      <Geral/>
    </div>
  );
}

export default SolicitarCadastro;
