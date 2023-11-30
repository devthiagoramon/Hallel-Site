import React from "react";
import "./barra_lateral_adm.css";
import Logo from "../../images/LogoHallel.png";
import ButtonBarraLateral from "./ButtonBarraLateral";
import { CiCalendar, CiHome } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  alternateRouteName,
  expandMore,
  selectExpandMoreName,
  selectRouteName,
} from "./barraLateralSlice";
import ButtonInnerTabs from "./ButtonOtherTabs";
import LeftLineInnerTabs from "./LeftLineInnerTabs";

const BarraLateralAdm = () => {
  const routeName = useSelector(selectRouteName);
  const expandRouteName = useSelector(selectExpandMoreName);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function handleClickButtonLateral(text) {
    dispatch(alternateRouteName(text));
    switch (text) {
      case "inicio":
        navigator("/administrador");
        break;
      case "eventos":
        navigator("/administrador/eventos");
        break;
      case "adicionar_evento":
        navigator("/administrador/eventos/adicionar");
        break;
      case "eventos_arquivados":
        navigator("/administrador/eventos/arquivados");
        break;
      default:
        break;
    }
  }

  function expandMoreFunction(text) {
    dispatch(expandMore(text));
  }

  return (
    <div className="container_barra_lateral_adm">
      <img
        style={{ width: 125, height: 81, alignSelf: "center", marginTop: 28 }}
        src={Logo}
      />
      <ButtonBarraLateral
        selected={routeName === "inicio"}
        to={"inicio"}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Inicio"}
        icon={<CiHome color="#FFF" size={24} />}
      />
      <ButtonBarraLateral
        selected={routeName === "eventos"}
        to={"eventos"}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Eventos"}
        icon={<CiCalendar size={24} color="#FFF" />}
        isToShowInnerTabs
        showInnerTabs={expandRouteName === "show_inner_eventos"}
        handleExpandMore={() => expandMoreFunction("show_inner_eventos")}
      />
      {expandRouteName && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 90%",
            gridTemplateRows: "1fr 1fr 1fr",
          }}
        >
          <LeftLineInnerTabs />
          <ButtonInnerTabs
            style={{ grid: 2 }}
            text={"Adicionar evento"}
            selected={routeName === "adicionar_evento"}
            to={"adicionar_evento"}
            handleClickButtonLateral={handleClickButtonLateral}
          />
          <LeftLineInnerTabs />
          <ButtonInnerTabs
            style={{ grid: 4 }}
            text={"Eventos arquivados"}
            selected={routeName === "eventos_arquivados"}
            to={"eventos_arquivados"}
            handleClickButtonLateral={handleClickButtonLateral}
          />
        </div>
      )}
    </div>
  );
};

export default BarraLateralAdm;
