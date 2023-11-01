import React from "react";
import "./modal_perfil.css";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BsPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectInfosModalUser } from "../../pages/Entrar/loginSlice";

const ModalPerfilHallel = ({ openModal, setOpenModal }) => {
  const { nome, imagem } = useSelector(selectInfosModalUser);
  return (
    <>
      {openModal && (
        <div className="cont_modal_perfil">
          <div className="cont_header_modal_perfil">
            {imagem === "undefined" ? (
              <BsPersonFill size={60} />
            ) : (
              <img
                className="imagem_modal_perfil"
                alt={"Foto de perfil"}
                src={imagem}
              />
            )}

            <div className={"cont_infos_perfil_modal"}>
              <h3>{nome}</h3>
              <Link to={"/"} className={"visualizar_perfil_modal"}>
                Visualizar perfil
              </Link>
            </div>
            <RxCross2
              size={30}
              className="x_icon_modal_perfil"
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </div>
          <div className="line_divider_modal_perfil"></div>
          <div className="body_modal_perfil">
            <Link to={"/"} className={"links_perfil_modal"}>
              Editar Perfil
            </Link>
            <Link to={"/"} className={"links_perfil_modal"}>
              Tornar-se associado
            </Link>
            <Link
              to={"/"}
              className={"links_perfil_modal"}
              style={{ color: "red" }}
            >
              Sair da conta
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPerfilHallel;
