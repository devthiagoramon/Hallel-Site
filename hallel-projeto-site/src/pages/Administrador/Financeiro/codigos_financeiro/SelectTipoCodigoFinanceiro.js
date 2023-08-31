import {
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  createTheme,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  palette: {
    secondary: purple,
  },
});

const SelectTipoCodigoFinanceiro = ({
  entradaSelecionada,
  setEntradaSelecionada,
  setSaidaSelecionada,
}) => {
  const selecionado = entradaSelecionada ? "entrada" : "saida";

  const handleChangeToggleButton = (event, value) => {
    if (value === "entrada") {
      setEntradaSelecionada(true);
      setSaidaSelecionada(false);
    } else {
      setEntradaSelecionada(false);
      setSaidaSelecionada(true);
    }
  };

  return (
    <div className="cont_select_tipo_cod_fin">
      <div className="header_select_tipo_cod_fin">
        <h5>Selecione:</h5>
      </div>
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          color="secondary"
          value={selecionado}
          exclusive
          onChange={handleChangeToggleButton}
        >
          <ToggleButton value={"entrada"}>Entradas</ToggleButton>
          <ToggleButton value={"saida"}>Saidas</ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
};

export default SelectTipoCodigoFinanceiro;
