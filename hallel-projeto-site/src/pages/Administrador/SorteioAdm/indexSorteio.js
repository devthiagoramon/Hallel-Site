import { useState, useEffect } from "react";
import "./styleSorteio.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EsquerdaBodySortAdm from "./EsquerdaBodySortAdm";
import dayjs from "dayjs";
import { CalendarMonth } from "@mui/icons-material";
import MenuCalendarioSelecionar from "../Financeiro/associados/MenuCalendarioSelecionar";
import { DireitaBodySortAdm } from "./DireitaBodySortAdm.1";

const SorteioAdm = () => {
  const [mesSelecionado, setMesSelecionado] = useState(dayjs());
  const [sorteioSelec, setSorteioSelec] = useState(null);

  return (
    <div className="sorteioAdm">
      <div className="sortAdm_header">
        <h1>Sorteio de Associados</h1>
      </div>
      <div className="sortAdm_body">
        <EsquerdaBodySortAdm />
        <DireitaBodySortAdm
          mesSelecionado={mesSelecionado}
          setSorteioSelec={setSorteioSelec}
          sorteioSelec={sorteioSelec}
        />
      </div>
    </div>
  );
};

export default SorteioAdm;
