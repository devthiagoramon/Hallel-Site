import { CircularProgress, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { localEventoListar } from "../../../../../api/uris/EventosURLS";

const ModalListarLocalEvento = (props) => {
  const openLocaisEvento = Boolean(props.anchorEl);
  const [LocaisEventos, setLocaisEventos] = useState([]);

  useEffect(() => {
    axios
      .get(localEventoListar(), {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setLocaisEventos(res.data);
      })
      .catch((error) => {
        console.error("Error na listagem de locais eventos; " + error);
      });
  }, []);

  function retornarLocalEvento(id, localizacao) {
    const localEvento = {
      id: id,
      localizacao: localizacao,
    };
    props.setLocalEvento(localEvento);
    props.setAnchorEl(null);
  }

  return (
    <Menu
      open={openLocaisEvento}
      onClose={props.handleCloseLocaisEvento}
      anchorEl={props.anchorEl}
      sx={{ maxWidth: "400px", maxHeight: "400px" }}
    >
      {LocaisEventos?.map((locais) => {
        return (
          <MenuItem
            key={locais.id}
            onClick={() => {
              retornarLocalEvento(locais.id, locais.localizacao);
            }}
          >
            {locais.localizacao}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default ModalListarLocalEvento;
