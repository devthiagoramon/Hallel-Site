import React from "react";
import "./barra_lateral_adm.css";
import Logo from "../../images/LogoHallel.png";
import ButtonBarraLateral from "./ButtonBarraLateral";
import { CiCalendar, CiHome } from "react-icons/ci";
import { useState } from "react";

const BarraLateralAdm = () => {
  const [buttonClicked, setButtonClicked] = useState("inicio");

  function handleClickButtonLateral(text) {
    setButtonClicked(text);
  }

  return (
    <div className="container_barra_lateral_adm">
      <img
        style={{ width: 125, height: 81, alignSelf: "center", marginTop: 28 }}
        src={Logo}
      />
      <ButtonBarraLateral
        selected={buttonClicked === "inicio"}
        to={"inicio"}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Inicio"}
        icon={<CiHome color="#FFF" size={24} />}
      />
      <ButtonBarraLateral
        selected={buttonClicked === 'eventos'}
        to={'eventos'}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Eventos"}
        icon={<CiCalendar size={24} color="#FFF" />}
      />
    </div>
  );
};

export default BarraLateralAdm;
