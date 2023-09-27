import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const ErrorParticiparEvento = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="error">Não foi possivel participar do evento</Alert>
    </Snackbar>
  );
};

const SucessoParticiparEvento = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
        <Alert severity="success">Sucesso ao participar do evento</Alert>
      </Snackbar>
    );
}


const ErrorLoadingIsParticipando = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="error">Error na verificação de participação de evento</Alert>
    </Snackbar>
  );
}

export {ErrorParticiparEvento, SucessoParticiparEvento, ErrorLoadingIsParticipando};
