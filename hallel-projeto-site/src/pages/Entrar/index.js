import React, {useState} from "react";
import logo from "./../../images/LogoHallel.png";
import "./entrar.css";
import {Alert, CircularProgress, Snackbar} from "@mui/material";
import {loginService} from "../../service/HomeService";

function Entrar() {
  const [emailInput, setEmail] = useState();
  const [senhaInput, setSenha] = useState();

  const [isValid, setisValid] = useState(null);
  const [isValidError, setisValidError] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  function entrar() {
    setisLoading(true);
    let login = {
      email: emailInput,
      senha: senhaInput
    }
    loginService(login).then((response) => {
      // Verfica se há erro
      if (!response) {
        setisValid(false);
        setisValidError(true);
        setTimeout(() => {
          setisLoading(false);
        }, 3000);
        return;
      }
      let rolesName = [];
      localStorage.setItem("token", response.token);
      localStorage.setItem("HallelId", response.objeto.id);
      localStorage.setItem("HallelEmail", response.objeto.email);
      response.objeto.roles.map((role) => {
        rolesName.push(role.name);
      });
      localStorage.setItem("R0l3s", rolesName);
      setisValid(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    })
  }

  const handleClose = () => {
    setisValid(null);
    setisValidError(false);
  };

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
            type="email"
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

        {isLoading === true ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <button className="buttonEntrar" onClick={entrar}>
              {" "}
              Entrar
            </button>
          </div>
        )}
        <div className="footerEntrar">
          <p>Não tem uma conta? </p>
          <a href="/solicitarCadastro"> Solicite seu cadastro </a>
        </div>
      </div>
      {isValid !== null && (
        <>
          {isValid === false && (
            <Snackbar
              open={isValidError}
              onClose={handleClose}
              autoHideDuration={3000}
            >
              <Alert severity="error">Error no login</Alert>
            </Snackbar>
          )}
          {isValid === true && (
            <Snackbar
              open={isValid}
              onClose={handleClose}
              autoHideDuration={3000}
            >
              <Alert severity="success">
                Logado com sucesso, redirecionando...
              </Alert>
            </Snackbar>
          )}
        </>
      )}
    </div>
  );
}

export default Entrar;
