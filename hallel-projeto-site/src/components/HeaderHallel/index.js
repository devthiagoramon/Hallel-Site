import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../images/LogoHallel.png";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { verificarTokenService } from "../../service/HomeService";
import { Link, useNavigate } from "react-router-dom";
import LabelForDropDown from "./LabelForDropDown";
import DropDownHeaderHallel from "./DropDownHeaderHallel";
import LinkForDropDown from "./LinkForDropDown";
import ModalPerfilHallel from "../ModalPerfilHallel";
import { atualizarToken, selectToken } from "../../pages/Entrar/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/utilToken";

const HeaderHallel = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [openInfoIgreja, setOpenInfoIgreja] = useState(false);
  const [openLinksCurso, setOpenLinksCurso] = useState(false);
  const [openModalPerfil, setOpenModalPerfil] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const token = useSelector(selectToken);
  const dispacher = useDispatch();
  let navigate = useNavigate();

  const handleOpenInfoIgreja = () => {
    setOpenInfoIgreja(!openInfoIgreja);
    setOpenLinksCurso(false);
  };

  const handleOpenLinksCurso = () => {
    setOpenLinksCurso(!openLinksCurso);
    setOpenInfoIgreja(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 764) {
        setOpenMenu(true);
      }
    });
  }, []);
  useEffect(() => {
    if (openModalPerfil) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openModalPerfil]);

  function isNotUsuario() {
    if (token === "") {
      // Token inexistente, caso for "", pessoa tem que se logar
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    // verifica se o token ja expirou
    let token = getToken();
    if (token !== "" && token !== null) {
      verificarTokenService(getToken()).then((response) => {
        if (response) {
          localStorage.clear();
          dispacher(atualizarToken(""));
        }
      });
    }else{
      localStorage.clear()
      dispacher(atualizarToken(""));
    }
  }, []);

  const handleClickPerfil = () => {
    if (isNotUsuario()) {
      navigate("/entrar");
      return;
    }
    setOpenModalPerfil(!openModalPerfil);
  };

  return (
    <>
      <header className="header_hallel">
        <div className="cont_imagem_hallel">
          <img className={"imagem_hallel"} src={logo} alt={"Logo Hallel"} />
          <FiMenu
            size={24}
            onClick={() => {
              setOpenMenu(!openMenu);
              setOpenLinksCurso(false);
              setOpenInfoIgreja(false);
            }}
            className={"menu_icon"}
          />
        </div>
        {openMenu && (
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Inicio</Link>
              </li>
              <li>
                <Link to={"/eventos"}>Eventos</Link>
              </li>
              <li>
                <Link to={"/ministerios"}>Ministérios</Link>
              </li>
              <li>
                <Link to={"/doacoes"}>Doações</Link>
              </li>
              <li>
                <LabelForDropDown
                  id={"links_info_igreja"}
                  onClick={handleOpenInfoIgreja}
                  titulo={"Igreja"}
                  isOpen={openInfoIgreja}
                />
              </li>
              <li>
                <LabelForDropDown
                  id={"links_cursos"}
                  onClick={handleOpenLinksCurso}
                  titulo={"Cursos"}
                  isOpen={openLinksCurso}
                />
              </li>
              <li>
                <Link to={"/"}>Loja</Link>
              </li>
              <li>
                <span className="perfil_span">Perfil</span>
                <CgProfile
                  onClick={handleClickPerfil}
                  className="icon_perfil_header"
                  size={32}
                />
              </li>
            </ul>
          </nav>
        )}
      </header>
      <DropDownHeaderHallel
        id={"links_info_igreja"}
        openDropDown={openInfoIgreja}
        titulo={"Igreja"}
      >
        <LinkForDropDown to={"/fundadora"} titulo={"Fundadora"} />
        <LinkForDropDown to={"/sobre"} titulo={"Quem somos"} />
        <LinkForDropDown to={"/"} titulo={"Sorteio"} />
      </DropDownHeaderHallel>
      <DropDownHeaderHallel
        id={"links_cursos"}
        openDropDown={openLinksCurso}
        titulo={"Cursos"}
      >
        <LinkForDropDown to={"/"} titulo={"Cursos"} />
        <LinkForDropDown to={"/"} titulo={"Meus cursos"} />
      </DropDownHeaderHallel>
      <ModalPerfilHallel
        classname={"outer_modal_perfil"}
        openModal={openModalPerfil}
        setOpenModal={setOpenModalPerfil}
      />
    </>
  );
};

export default HeaderHallel;
