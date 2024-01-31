import { CalendarMonth } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import MenuCalendarioSelecionar from "./MenuCalendarioSelecionar";
import { useState } from "react";

const VisualizarPorMesAssociados = (props) => {
  const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);

  function handleClickAbrirMenuCalendario(e) {
    setAnchorMenuCalendario(e.currentTarget);
  }

  return (
    <div className="container_visualizar_por_mes">
      <label>Mês {props.mesSelecionado.format("MM/YYYY")}</label>
      <IconButton
        id="btn_abrir_calendario"
        onClick={(e) => {
          handleClickAbrirMenuCalendario(e);
        }}
      >
        <CalendarMonth
          sx={{ color: "#252525", height: "35px", width: "35px" }}
        />
      </IconButton>
      <MenuCalendarioSelecionar
        anchorMenuCalendario={anchorMenuCalendario}
        setAnchorMenuCalendario={setAnchorMenuCalendario}
        mesSelecionado={props.mesSelecionado}
        setMesSelecionado={props.setMesSelecionado}
      />
    </div>
  );
};

export default VisualizarPorMesAssociados;
