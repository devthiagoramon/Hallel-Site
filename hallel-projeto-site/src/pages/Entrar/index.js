import React from "react";
import logo from "./../../images/LogoHallel.png"
import "./entrar.css"

function Entrar() {
  return (
    <div className="containerlogin">
      <header>
        <img src={logo} alt="Workflow" />
        <p> </p>
        <span className="log"> Log </span>
        <span className="in"> in </span>
      </header>

      <form>
        <div className="inputContainerEmail">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Endereço de e-mail"
          />
        </div>

        <div className="inputContainerSenha">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
        </div>

        <a href=""> Esqueceu sua senha?</a>

        <button className="buttonEntrar"> Entrar</button>

        <div className="footerEntrar">
          <p>Não tem uma conta? </p>
          <a href="/solicitarCadastro"> Solicite seu cadastro </a>
        </div>
      </form>
    </div>
  );
}

export default Entrar;
