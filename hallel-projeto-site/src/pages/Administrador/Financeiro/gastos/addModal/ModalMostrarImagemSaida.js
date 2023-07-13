import { Box, Modal } from "@mui/material";
import React from "react";

const ModalMostrarImagemSaida = (props) => {
  const { openModalAnexoSaida, setOpenModalAnexoSaida, imagemAnexoSrc } = props;

  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  const handleCloseModalMostrarImagem = () => {
    setOpenModalAnexoSaida(false)
  };

  return (
    <Modal open={openModalAnexoSaida} onClose={handleCloseModalMostrarImagem}>
      <Box sx={styleInnerModal}>
        <div style={{width: "100%"}}>
          <img style={{maxWidth: "100%", maxHeight: "900px", objectFit: "contain", borderRadius: "24px"}} src={imagemAnexoSrc} alt="Imagem Anexo da Saida"></img>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalMostrarImagemSaida;
