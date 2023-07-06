import { Box, Button, Modal } from '@mui/material'
import axios from 'axios';
import React from 'react'

const ModalDeleteEvento = (props) => {

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

    const handleCloseModal = () => {
        props.setopenModalDelete(false);
        props.setDespesaSelected(null);
    }

    const deletarDespesaEvento = () => {
        axios.delete("http://localhost:8080/api/administrador/eventos/" + props.idEvento + "/despesa/" + props.despesaSelected.id + "/delete", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(() => {
            props.setopenModalDelete(false);
            props.setDespesaSelected(null);
            props.setChangedTabela(!props.changedTabela);
        }).catch((error) => {
            console.log("Error deletando a despesa")
        })
    }

    return (
        <Modal open={props.openModalDelete} onClose={handleCloseModal} tabIndex={-1} >
            <Box sx={styleInnerModal}>
                <div className='head_edit_despesas_evento'>
                    <label>Certeza de Deletar?</label>
                </div>
                <div className='body_delete_despesas_evento'>
                    <Button variant='contained' color='error' onClick={deletarDespesaEvento}>Sim</Button>
                    <Button variant='contained' sx={{ backgroundColor: "#ABB2B9" }} onClick={handleCloseModal}>Não</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalDeleteEvento    