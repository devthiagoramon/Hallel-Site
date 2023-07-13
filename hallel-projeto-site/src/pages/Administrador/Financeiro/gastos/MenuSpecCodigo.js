import { CircularProgress, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MenuSpecCodigo = (props) => {
  const {
    codigoVisualizar,
    anchorMenuSpec,
    setAnchorMenuSpec,
    setCodigoVisualizar,
  } = props;

  const openMenu = Boolean(anchorMenuSpec);
  const [codigoSaida, setcodigoSaida] = useState(null);

  const handleCloseMenuSpecCodigo = () => {
    setCodigoVisualizar(false);
    setAnchorMenuSpec(false);
    setcodigoSaida(null)
  };

  useEffect(() => {
    let url =
      "http://localhost:8080/api/financeiro/codigosSaida/" +
      parseFloat(codigoVisualizar) +
      "/list";
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setcodigoSaida(res.data);
      })
      .catch((error) => {
        console.log("Error fetching the codigoSaida: " + error);
      });
  }, [codigoVisualizar]);

  return (
    <Menu
      open={openMenu}
      anchorEl={anchorMenuSpec}
      onClose={handleCloseMenuSpecCodigo}
    >
      {codigoSaida !== null && (
        <label style={{padding: "10px"}}>
          #{codigoSaida.numCodigo} | {codigoSaida.nomeCodigo}
        </label>
      )}
      {codigoSaida === null && <CircularProgress />}
    </Menu>
  );
};

export default MenuSpecCodigo;
