import React from "react";
import EsquerdaBodyLocaisEventos from "./EsquerdaBodyAdicionarLocais";
import DireitaBodyLocaisEventos from "./DireitaBodyLcoaisEventos";
import { useState } from "react";
import ModalEditLocalEvento from "./ModalEditLocalEvento";
import { Alert, Snackbar } from "@mui/material";

const BodyLocaisEventos = () => {
  const [enviadoSucesso, setEnviadoSucesso] = useState(false);
  const [idLocalEvento, setIdLocalEvento] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [textSnackBar, setTextSnackBar] = useState("");

  function handleCloseSnackBar() {
    setOpenSnackbar(false);
    setTextSnackBar("");
  }

  return (
    <div className="bodyAdicionarLocais">
      <EsquerdaBodyLocaisEventos
        enviadoSucesso={enviadoSucesso}
        setEnviadoSucesso={setEnviadoSucesso}
      />
      <DireitaBodyLocaisEventos
        enviadoSucesso={enviadoSucesso}
        setIdLocalEvento={setIdLocalEvento}
      />
      <ModalEditLocalEvento
        idLocalEvento={idLocalEvento}
        setIdLocalEvento={setIdLocalEvento}
        setEnviadoSucesso={setEnviadoSucesso}
        enviadoSucesso={enviadoSucesso}
        openModal={openModal}
        setOpenModal={setOpenModal}
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        textSnackBar={textSnackBar}
        setTextSnackBar={setTextSnackBar}
      />
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackBar}
        autoHideDuration={3000}
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          {textSnackBar}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BodyLocaisEventos;
