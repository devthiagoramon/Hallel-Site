import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/LogoHallel.png";
import { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Down from "./DropDown.js";
import Modal from "./entrar/modal";
import ModalPerfil from "./perfil/modal";

function Header() {
  const [isModalVisible, setisModalVisible] = useState();
  const [isModalPerfilVisible, setisModalPerfilVisible] = useState(false);
  const [isExpired, setIsExpired] = useState();
  const stylePerfil = {
    "background-color": "#333",
    "border-radius": "50%",
  };

  function isTokenExpired() {
    let url = "http://localhost:8080/api/isTokenExpired";
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: localStorage.getItem("token"),
    })
      .then((res) => {
        return res.json();
      })
      .then((object) => {
        if (object === false) {
          // Token expioru
          localStorage.clear();
          setIsExpired(true);
        } else {
          setIsExpired(false);
        }
      })
      .catch((error) => {
        console.warn(error);
        setIsExpired(true);
      });
  }

  function isNotUsuario() {
    if (localStorage.getItem("token") === null) {
      // Token inexistente, caso for null, pessoa tem que se logar
      return true;
    } else if (isExpired === true) {
      // Token está expirado, caso for true, pessoa tem que se logar
      return true;
    } else if (isExpired === false) {
      // Token valido, pessoa ta logada
      return false;
    }
  }

  function showModalPerfil(){
    if(isModalPerfilVisible === true){
      setisModalPerfilVisible(false)
    }else{
      setisModalPerfilVisible(true)
    }
  }

  return (
    <div>
      <nav id="topbar">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <a className="menu__item" href="/">
                Inicio
              </a>
            </li>
            <li>
              <a className="menu__item" href="/">
                Eventos
              </a>
            </li>
            <li>
              <a className="menu__item" href="/">
                Ministerios
              </a>
            </li>
            <li>
              <a className="menu__item" href="/">
                Agenda
              </a>
            </li>
            <li>
              <a className="menu__item" href="/">
                Loja
              </a>
            </li>
            <li>
              <a className="menu__item" href="/">
                Doacoes
              </a>
            </li>
            <li>
              <a className="menu__item" href="/">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div id="cont-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div id="space"></div>

        <div id="topicos">
          <Link to="/">Início</Link>
          <Link to="/eventos">Eventos</Link>
          <Down />
          
          <Link to="/">Ministérios</Link>
          <Link to="/">Agenda</Link>
          <Link to="/">Loja</Link>
          <Link to="/">Doações</Link>
          <Link to="/">Contato</Link>
        </div>
        {isNotUsuario() ? (
          <button
            id="btn"
            onClick={() => {
              setisModalVisible(true);
            }}
          >
            Entre
          </button>
        ) : (
          <button style={stylePerfil} onClick={() => showModalPerfil()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="white"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </button>
        )}
      </nav>
      {isModalVisible && localStorage.getItem("token") === null ? (
        <Modal hide={() => setisModalVisible(false)} />
      ) : (
        ""
      )}
      {isModalPerfilVisible ? <ModalPerfil/> : ""}
      
    
    </div>
    
   
  );
}

export default Header;
