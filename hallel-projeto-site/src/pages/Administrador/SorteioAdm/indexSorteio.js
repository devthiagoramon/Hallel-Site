import { useState, useEffect } from "react";
import "./styleSorteio.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress, IconButton, Tooltip, Typography } from "@mui/material";
import EsquerdaBodySortAdm from "./EsquerdaBodySortAdm";
import DireitaBodySortAdm from "./DireitaBodySortAdm";
import dayjs from "dayjs";
import { CalendarMonth } from "@mui/icons-material";
import MenuCalendarioSelecionar from "../Financeiro/associados/MenuCalendarioSelecionar";

const SorteioAdm = () => {

  const [mesSelecionado, setMesSelecionado] = useState(dayjs());
  const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);

  function handleClickAbrirMenuCalendario(e) {
    setAnchorMenuCalendario(e.currentTarget);
  }

  return (
    <div className="sorteioAdm">
      <div className="sortAdm_header">
        <h1>Sorteio de Associados</h1>
        <div className="selecionar_mes_header">
          <div className="cont_mes_header_selecionado">
            <Typography variant="subtitle1">Mês selecionado</Typography>
            <label>{mesSelecionado.format("MM/YYYY")}</label>
          </div>
          <Tooltip title="Selecionar o mês">
            <IconButton
              id="btn_abrir_calendario"
              onClick={(e) => {
                handleClickAbrirMenuCalendario(e);
              }}
            >
              <CalendarMonth
                sx={{ color: "blue", height: "35px", width: "35px" }}
              />
            </IconButton>
          </Tooltip>
          <MenuCalendarioSelecionar
            anchorMenuCalendario={anchorMenuCalendario}
            setAnchorMenuCalendario={setAnchorMenuCalendario}
            mesSelecionado={mesSelecionado}
            setMesSelecionado={setMesSelecionado}
          />
        </div>
      </div>
      <div className="sortAdm_body">
        <EsquerdaBodySortAdm />
        <DireitaBodySortAdm mesSelecionado={mesSelecionado} />
      </div>
    </div>
  );
};


export default SorteioAdm;
