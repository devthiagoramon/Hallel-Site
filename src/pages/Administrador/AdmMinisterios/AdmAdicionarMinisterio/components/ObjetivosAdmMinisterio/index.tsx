import Textarea from "@mui/joy/Textarea";
import { IconButton, Tooltip } from "@mui/material";
import { Plus, Warning } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import {
  BodyObjetivosAdmMinisterio,
  ContainerObjetivosAdmMinisterio,
  HeaderObjetivosAdmMinisterio,
} from "./style";

interface ObjetivosAdmMinisterioProps {
  objetivos: string[];
  error: boolean;
  setObjetivos: Dispatch<SetStateAction<string[]>>;
}

const ObjetivosAdmMinisterio = ({
  objetivos,
  setObjetivos,
  error,
}: ObjetivosAdmMinisterioProps) => {
  const [addingNewObjetivo, setAddingNewObjetivo] =
    useState<boolean>(false);
  const [objetivoAdd, setObjetivoAdd] = useState<string>("");

  const startAddNewObjetivo = () => {
    setAddingNewObjetivo(true);
  };

  const handleAddNewObjetivo = () => {
    if (objetivoAdd == "") {
      setAddingNewObjetivo(false);
      return;
    }
    setObjetivos((prev: string[]) => [...prev, objetivoAdd]);
    setAddingNewObjetivo(false);
    setObjetivoAdd("");
  };

  return (
    <ContainerObjetivosAdmMinisterio>
      <HeaderObjetivosAdmMinisterio>
        <div>
          <label>Objetivos do ministério</label>
          {error && <Tooltip title="Digite um objetivo do ministério!"><Warning size={24} color="#F44336" /></Tooltip>}
        </div>
        <Tooltip title="Adicionar objetivo">
          <IconButton onClick={startAddNewObjetivo}>
            <Plus size={24} />
          </IconButton>
        </Tooltip>
      </HeaderObjetivosAdmMinisterio>
      <BodyObjetivosAdmMinisterio>
        <ul>
          {objetivos.map((objetivo, index) => {
            return <li key={index}>{objetivo}</li>;
          })}
        </ul>
        {addingNewObjetivo && (
          <Textarea
            sx={{ width: "100%" }}
            minRows={1}
            onChange={(e) => setObjetivoAdd(e.target.value)}
            onBlur={handleAddNewObjetivo}
            value={objetivoAdd}
            autoFocus
          />
        )}
      </BodyObjetivosAdmMinisterio>
    </ContainerObjetivosAdmMinisterio>
  );
};

export default ObjetivosAdmMinisterio;
