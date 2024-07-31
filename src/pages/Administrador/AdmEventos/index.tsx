import { Button } from "@mui/material";
import TitleH from "components/TitleH";
import { useListEventsAdm } from "hooks/admin/useListEventsAdm";
import { Plus } from "phosphor-react";
import { useState } from "react";
import CardAdmEvents from "./components/CardAdmEvents";
import ExibitionEventOption from "./components/ExibitionEventOption";
import TableAdmEvents from "./components/TableAdmEvents";
import {
  AdmEventosContainer,
  AdmEventosHeaderContainer,
  AdmEventosTableContainer,
} from "./style";

const AdmEventos = () => {
  const [option, setOption] = useState<string>("table");
  const events = useListEventsAdm().data;

  return (
    <AdmEventosContainer>
      <AdmEventosHeaderContainer>
        <TitleH color="black" size="medium">
          Eventos da comunidade
        </TitleH>
        <div className="end">
          <ExibitionEventOption setValue={setOption} value={option} />
          <Button
            className="add_button_container"
            variant="contained"
            startIcon={<Plus size={28} />}
          >
            Adicionar evento
          </Button>
        </div>
      </AdmEventosHeaderContainer>
      <AdmEventosTableContainer>
        {option === "table" ? (
          <TableAdmEvents events={events || []} />
        ) : (
          <CardAdmEvents events={events || []} />
        )}
      </AdmEventosTableContainer>
    </AdmEventosContainer>
  );
};

export default AdmEventos;
