import {Box, Button, Modal} from "@mui/material";
import React from "react";
import {arquivarEventoService} from "../../../../service/EventoService";

const ModalArquivarEvento = (props) => {
    const {
        idEvento,
        openModalArquivar,
        setOpenModalArquivar,
        setAtualizarTabela,
        atualizarTabela,
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

    const arquivarEvento = () => {
        arquivarEventoService(idEvento).then((response) => {
            if (response) {
                // Deu certo
            } else {
                // Deu errado
            }
        });
        setOpenModalArquivar(false);
        setAtualizarTabela(!atualizarTabela);
    }

    const handleCloseModal = () => {
        setOpenModalArquivar(false);
    }

    return (
        <Modal open={openModalArquivar} onClose={handleCloseModal}>
            <Box sx={styleInnerModal}>
                <div className="head_edit_despesas_evento">
                    <label>Certeza de arquivar?</label>
                </div>
                <div className="body_delete_despesas_evento">
                    <Button variant="contained" color="error" onClick={arquivarEvento}>
                        Sim
                    </Button>
                    <Button
                        variant="contained"
                        sx={{backgroundColor: "#ABB2B9"}}
                        onClick={handleCloseModal}
                    >
                        Não
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalArquivarEvento;
