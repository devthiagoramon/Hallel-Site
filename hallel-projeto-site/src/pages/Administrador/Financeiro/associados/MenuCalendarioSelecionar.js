import { Menu } from "@mui/material";
import { DateCalendar, MonthCalendar } from "@mui/x-date-pickers";
import React from "react";

const MenuCalendarioSelecionar = (props) => {
  const openMenu = Boolean(props.anchorMenuCalendario);

  const handleCloseMenuCalendario = () =>{
    props.setAnchorMenuCalendario(null);
  }

  const handleMudarMesCalendario = (e) => {
    props.setMesSelecionado(e);
  }

  return (
    <Menu
      anchorEl={props.anchorMenuCalendario}
      open={openMenu}
      onClose={handleCloseMenuCalendario}
    >
      <DateCalendar
        views={['year','month']}
        value={props.mesSelecionado}
        onChange={handleMudarMesCalendario}
        openTo="month"
      />
    </Menu>
  );
};

export default MenuCalendarioSelecionar;
