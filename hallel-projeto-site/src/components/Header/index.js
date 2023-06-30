import { Link } from "react-router-dom";
import "./topbar.css";
import Logo from "../../images/LogoHallel.png";
import { useMemo, useState, useRef } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Down from "./DropDown.js";
import Modal from "./entrar/modal";
import ModalPerfil from "./perfil/modal";
import { IconButton } from "@mui/material";
import { AccountCircle, Login } from "@mui/icons-material";
import ModalPerfilAdm from "./perfilAdm";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isModalVisible, setisModalVisible] = useState();
  const [isModalPerfilVisible, setisModalPerfilVisible] = useState(false);

  const [isExpired, setIsExpired] = useState();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.remove("");
  };

  const [openAdm, setOpenAdm] = useState(false);

  function isTokenExpired() {
    let url =
      "http://localhost:8080/api/isTokenExpired/" +
      String(localStorage.getItem("token"));
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

  function showModalPerfil() {
    setisModalPerfilVisible(!isModalPerfilVisible);
    setOpenAdm(true);
  }

  return (
    <header className="header_top">
      <div id="cont-logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav id="topbar" ref={navRef}>
        <Link id="item" to="/">
          Início
        </Link>

        <Link id="item" to="/eventos">
          Eventos
        </Link>

        <Down
          id="item"
          titulo="Igreja"
          item1="Quem somos"
          link1="/sobre"
          item2="Fundadora"
          link2="/fundadora"
        />

        <Link id="item" to="/">
          Ministérios
        </Link>

        <Link id="item" to="/">
          Agenda
        </Link>

        <Down
          id="item"
          titulo="Cursos"
          item1="Cursos"
          link1="/cursos"
          item2="Meus Cursos"
          link2="/meuscursos"
        />

        {localStorage.getItem("R0l3s").includes("ROLE_USER") ? (
          <>
            <Link id="item" to="/doacoes">
              Doações
            </Link>
          </>
        ) : (
          <>
            <Link id="item" to="/doacoes">
              Doações
            </Link>
          </>
        )}

        <Link id="item" to="/loja">
          Loja
        </Link>

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
              <AccountCircle sx={{ width: "55px", height: "55px" }} style = {{color: "#f1f1f1"}}/>
            </IconButton>
          </div>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes  style = {{color: "white"}}/>
        </button>
      </nav>

      {isModalVisible && localStorage.getItem("token") === null ? (
        <Modal hide={() => setisModalVisible(false)} />
      ) : (
        ""
      )}
      {isModalPerfilVisible &&
      (localStorage.getItem("R0l3s") === "ROLE_USER" ||
        localStorage.getItem("R0l3s") === "ROLE_ASSOCIADO,ROLE_USER") ? (
        <ModalPerfil  />
      ) : (
        ""
      )}
      {isModalPerfilVisible &&
      localStorage.getItem("R0l3s") ===
        "ROLE_ADMIN,ROLE_ASSOCIADO,ROLE_USER" ? (
        <ModalPerfilAdm
          isOpen={openAdm}
          fecharModal={() => {
            setOpenAdm(false);
            setisModalPerfilVisible(false);
          }}
        />
      ) : (
        ""
      )}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars style = {{color: "white"}} />
      </button>
    </header>
  );
}
export default Header;
