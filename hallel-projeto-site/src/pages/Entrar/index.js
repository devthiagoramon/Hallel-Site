import React from "react";
import logo from "./../../images/LogoHallel.png";
import "./entrar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import PopUpMensagem from "../../components/popUpMensagem";


function Entrar() {
  const [emailInput, setEmail] = useState();
  const [senhaInput, setSenha] = useState();

  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const [isValid, setisValid] = useState(false);

  function entrar() {
   

    let url = "http://localhost:8080/api/login";
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        senha: senhaInput
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((object) => {
        let rolesName = [];

        console.log(object);

        localStorage.setItem("token", object.token);
        localStorage.setItem("name", object.objeto.nome);
        localStorage.setItem("email", object.objeto.email);
        object.objeto.roles.map((role) => {
          rolesName.push(role.name);
        });
        localStorage.setItem("R0l3s", rolesName);
        setMostrarPopUp(true)
        setisValid(true)
        setTimeout(() => {
          window.location.href = "/"
        }, 4200);
      }).catch((e) => {
        console.log(e)
        setMostrarPopUp(true)
        setisValid(false)
        setTimeout(() => {
          setMostrarPopUp(false);
        }, 4200);
      });
  }

  return (
    <div className="containerlogin">
      <header>
        <img src={logo} alt="Workflow" />
        <p> </p>
        <span className="log"> Log </span>
        <span className="in"> in </span>
      </header>

      <div className="formulario">
        <div className="inputContainerEmail">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Endereço de e-mail"
            value={emailInput}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="inputContainerSenha">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={senhaInput}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </div>

        <a href=""> Esqueceu sua senha?</a>

        <button className="buttonEntrar" onClick={entrar}>
          {" "}
          Entrar
        </button>

        <div className="footerEntrar">
          <p>Não tem uma conta? </p>
          <a href="/solicitarCadastro"> Solicite seu cadastro </a>
        </div>
      </div>
      {mostrarPopUp === true ? (
        <div>
          {isValid === true ? (
            <div>
              <PopUpMensagem
                mensagem="Login realizado com sucesso"
                color="#63DA98"
              />
            </div>
          ) : (
            <div>
              <PopUpMensagem mensagem="Erro no login" color="#F54C4C" />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Entrar;
