import { Box, Button, Modal } from "@mui/material";
import axios from "axios";
import React from "react";

const ModalDeleterSaida = (props) => {
  const {
    idSaida,
    openModalDeletar,
    setOpenModalDeletar,
    setAlterou,
    alterou,
  } = props;

  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  const deletarSaida = () => {
    axios
      .get("http://localhost:8080/api/financeiro/gasto/deletar/" + idSaida, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        setAlterou(!alterou);
        setOpenModalDeletar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseModal = () => {
    setOpenModalDeletar(false);
  };

  return (
    <Modal open={openModalDeletar} onClose={handleCloseModal}>
      <Box sx={styleInnerModal}>
        <div className="head_edit_despesas_evento">
          <label>Certeza de deletar a saida?</label>
        </div>
        <div className="body_delete_despesas_evento">
          <Button variant="contained" color="error" onClick={deletarSaida}>
            Sim
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ABB2B9" }}
            onClick={handleCloseModal}
          >
            Não
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDeleterSaida;
