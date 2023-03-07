import React, { Component, useEffect, useState } from "react";
import "./style.css";
import Logo from "../../images/LogoHallel.png";
import PopUpMensagem from "../../components/popUpMensagem";

const SolicitarCadastro = (props) => {

  const [nomeInput, setNome] = useState();
  const [emailInput, setEmail] = useState();
  const [senhaInput, setSenha] = useState();
  const [senha2Input, setSenha2] = useState();

  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const [isValid, setisValid] = useState(false);

  function solicitar() {
    if (senhaInput === senha2Input) {
      let url = "http://localhost:8080/api/solicitarCadastro";
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch(url, {
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify({
          nome: nomeInput,
          email: emailInput,
          senha: senhaInput,
        }),
      })
        .then(() => {
          setMostrarPopUp(true)
          setisValid(true)
          setTimeout(() => {
            window.location.href = "/"
          }, 4200);
        })
        .catch((error) => {
          console.log(error)
          setMostrarPopUp(true)
          setisValid(false)
          setTimeout(() => {
            setMostrarPopUp(false);
          }, 4200);

        })
    }
  }


  return (
    <div>
      <section className="containerGeralSC">
        <section className="containerSecSC">
          <div className="headSC">
            <img id="ImgLogoSC" src={Logo} alt="logo site"></img>
            <div className="textoHeadSC">
              <h1 id="solicitarSC">SOLICITAR</h1>
              <h1 id="cadSC">CADASTRO</h1>
            </div>
          </div>
          <div className="informacoesSC">
            <input itemType="text" placeholder="Nome completo" value={nomeInput} onChange={(e) => setNome(e.target.value)}></input>
            <input itemType="text" placeholder="Insira seu email" value={emailInput} onChange={(e) => setEmail(e.target.value)}></input>
            <input itemType="text" placeholder="Crie uma senha" value={senhaInput} onChange={(e) => setSenha(e.target.value)}></input>
            <input itemType="text" placeholder="Confirme sua senha" value={senha2Input} onChange={(e) => setSenha2(e.target.value)}></input>
          </div>
          <div className="footerSC">
            <button id="JatemSC" onClick={solicitar}>ENVIAR</button>
            <div className="textoFooterSC">
              <a id="textoJatemSC">JA TEM UMA CONTA?</a>
              <a href="/entrar" id="entreSC">
                Entre aqui
              </a>
            </div>
          </div>
        </section>
      </section>
      {mostrarPopUp === true ? (
        <div>
          {isValid === true ? (
            <div>
              <PopUpMensagem
                mensagem="Solicitação realizada com sucesso"
                color="#63DA98"
              />
            </div>
          ) : (
            <div>
              <PopUpMensagem mensagem="Erro ao solicitar cadastro" color="#F54C4C" />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SolicitarCadastro;
