import { Link } from "react-router-dom";
import "./topbar.css";
import Logo from "../../images/LogoHallel.png";
import { useMemo, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Down from "./DropDown.js";
import Modal from "./entrar/modal";
import ModalPerfil from "./perfil/modal";
import { IconButton } from "@mui/material";
import { AccountCircle, Login } from "@mui/icons-material";
import ModalPerfilAdm from "./perfilAdm";

function Header() {
  const [isModalVisible, setisModalVisible] = useState();
  const [isModalPerfilVisible, setisModalPerfilVisible] = useState(false);
  const [isExpired, setIsExpired] = useState();

  const [openAdm, setOpenAdm] = useState(false);

  function isTokenExpired() {
    let url = "http://localhost:8080/api/isTokenExpired/" + String(localStorage.getItem("token"));
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((object) => {
        if (object === true) {
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

  

  useMemo(() => isTokenExpired(), []);

  const handleClose=()=> {
    setOpenAdm(false);
  }

  function showModalPerfil() {
    setisModalPerfilVisible(!isModalPerfilVisible);
    setOpenAdm(true);
  }

  return (
    <div>
      <nav id="topbar">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu_btn" htmlFor="menu_toggle">
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
          <Link id="item" to="/">
            Início
          </Link>
          <Link id="item" to="/eventos">
            Eventos
          </Link>
          <Down id="item" />
          <Link id="item" to="/">
            Ministérios
          </Link>
          <Link id="item" to="/">
            Agenda
          </Link>
          <Link id="item" to="/">
            Loja
          </Link>
          <Link id="item" to="/doacoes">
            Doações
          </Link>
          <Link id="item" to="/">
            Contato
          </Link>
        </div>
        {isNotUsuario() ? (
          <IconButton
            sx={{ width: "60px", height: "60px", color: "#252525" }}
            onClick={() => (window.location.href = "/entrar")}
          >
            <Login />
          </IconButton>
        ) : (
          <div className="contPerfilTopBar">
            <IconButton
              className="perfilHomepage"
              onClick={() => showModalPerfil()}
            >
              <AccountCircle sx={{ width: "55px", height: "55px" }} />
            </IconButton>
          </div>
        )}
      </nav>
      {isModalVisible && localStorage.getItem("token") === null ? (
        <Modal hide={() => setisModalVisible(false)} />
      ) : (
        ""
      )}
      {isModalPerfilVisible && localStorage.getItem("R0l3s") === "ROLE_USER" ? (
        <ModalPerfil />
      ) : (
        ""
      )}
      {isModalPerfilVisible &&
      localStorage.getItem("R0l3s") === "ROLE_ADMIN,ROLE_USER" ? (
        <ModalPerfilAdm isOpen={openAdm} handleClose={handleClose} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
