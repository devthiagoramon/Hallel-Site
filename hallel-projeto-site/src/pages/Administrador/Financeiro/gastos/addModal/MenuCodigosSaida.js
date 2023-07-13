import { Menu, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MenuCodigosSaida = (props) => {
  const { anchorMenu, setanchorMenu, setSaida } = props;

  const openMenu = Boolean(anchorMenu);
  const [codigosSaida, setCodigosSaida] = useState([]);

  const handleCloseMenu = () => {
    setanchorMenu(null);
  };

  function loadCodigosSaidas() {
    let url = "http://localhost:8080/api/financeiro/codigosSaida/list";
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCodigosSaida(res.data);
      })
      .catch((error) => {
        setCodigosSaida([]);
        console.log(error);
      });
  }

  useEffect(() => {
    loadCodigosSaidas();
  }, [codigosSaida]);

  function retornarCodigoSaida(id, numCodigo, nomeCodigo) {
    let obj = {
      id: id,
      numCodigo: numCodigo,
      nomeCodigo: nomeCodigo,
    };
    setSaida((prev) => {
      return { ...prev, codigo: { ...obj } };
    });
    setanchorMenu(null);
  }

  return (
    <Menu open={openMenu} onClose={handleCloseMenu} anchorEl={anchorMenu}>
      {codigosSaida.length === 0 ? (
        <label>Nenhum Código adicionado</label>
      ) : (
        <div>
          {codigosSaida.map((codigo) => {
            return (
              <MenuItem
                onClick={() =>
                  retornarCodigoSaida(
                    codigo.id,
                    codigo.numCodigo,
                    codigo.nomeCodigo
                  )
                }
              >
                {codigo.numCodigo} | {codigo.nomeCodigo}
              </MenuItem>
            );
          })}
        </div>
      )}
    </Menu>
  );
};

export default MenuCodigosSaida;
