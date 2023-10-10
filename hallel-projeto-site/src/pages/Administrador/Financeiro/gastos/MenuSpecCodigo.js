import { CircularProgress, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { saidaListarCodigoSaidaAPI } from "../../../../api/uris/FinanceiroURLS";
import {listarSaidaCodigoPorCodigoService} from "../../../../service/FinanceiroService";

const MenuSpecCodigo = (props) => {
  const {
    codigoVisualizar,
    anchorMenuSpec,
    setAnchorMenuSpec,
    setCodigoVisualizar,
  } = props;

  const openMenu = Boolean(anchorMenuSpec);
  const [codigoSaida, setcodigoSaida] = useState(null);
  const [codigoAux, setcodigoAux] = useState(0);

  useEffect(() => {
    setcodigoAux(codigoVisualizar);
  }, [codigoVisualizar]);

  const handleCloseMenuSpecCodigo = () => {
    setCodigoVisualizar(false);
    setAnchorMenuSpec(false);
    setcodigoSaida(null);
  };

  useEffect(() => {
    let response = listarSaidaCodigoPorCodigoService(codigoAux);
    setcodigoSaida(response);
  }, [codigoAux, setcodigoSaida]);

  return (
    <Menu
      open={openMenu}
      anchorEl={anchorMenuSpec}
      onClose={handleCloseMenuSpecCodigo}
    >
      {codigoSaida !== null && (
        <label style={{ padding: "10px" }}>
          #{codigoSaida.numCodigo} | {codigoSaida.nomeCodigo}
        </label>
      )}
      {codigoSaida === null && <CircularProgress />}
    </Menu>
  );
};

export default MenuSpecCodigo;
