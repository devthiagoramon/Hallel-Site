import React from "react";
import "./barra_lateral_adm.css";
import Logo from "../../images/LogoHallel.png";
import ButtonBarraLateral from "./ButtonBarraLateral";
import { CiCalendar, CiHome } from "react-icons/ci";
import { PiMoneyThin } from "react-icons/pi";
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
import { Group } from "@mui/icons-material";

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
      case "membros":
        navigator("/administrador/membros");
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
      case "locais_eventos":
        navigator("/administrador/eventos/locais");
        break;
      case "painel_financeiro":
        navigator("/administrador/painelfinanceiro");
        break;
      case "pdf_saida":
        navigator("/financeiro/gerarPDFEntrada");
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
        selected={routeName === "membros"}
        to={"membros"}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Membros"}
        icon={<Group sx={{ color: "#FFF" }} size={24} />}
      />

      <ButtonBarraLateral
        key={"eventos"}
        selected={routeName === "eventos"}
        to={"eventos"}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Eventos"}
        icon={<CiCalendar size={24} color="#FFF" />}
        isToShowInnerTabs
        showInnerTabs={expandRouteName === "show_inner_eventos"}
        handleExpandMore={() => expandMoreFunction("show_inner_eventos")}
      />
      {expandRouteName === "show_inner_eventos" && (
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
          <LeftLineInnerTabs />
          <ButtonInnerTabs
            style={{ grid: 6 }}
            text={"Locais de evento"}
            selected={routeName === "locais_eventos"}
            to={"locais_eventos"}
            handleClickButtonLateral={handleClickButtonLateral}
          />
        </div>
      )}

      <ButtonBarraLateral
        key={"painel_finc"}
        selected={routeName === "painel_financeiro"}
        to={"painel_financeiro"}
        handleClickButtonLateral={handleClickButtonLateral}
        text={"Financeiro"}
        icon={<PiMoneyThin size={24} color="#FFF" />}
        isToShowInnerTabs
        showInnerTabs={expandRouteName === "show_inner_financeiro"}
        handleExpandMore={() => expandMoreFunction("show_inner_financeiro")}
      />

      {expandRouteName === "show_inner_financeiro" && (
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
            text={"Gerar PDF saída"}
            selected={routeName === "pdf_saida"}
            to={"pdf_saida"}
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
          <LeftLineInnerTabs />
          <ButtonInnerTabs
            style={{ grid: 6 }}
            text={"Locais de evento"}
            selected={routeName === "locais_eventos"}
            to={"locais_eventos"}
            handleClickButtonLateral={handleClickButtonLateral}
          />
        </div>
      )}
    </div>
  );
};

export default BarraLateralAdm;
