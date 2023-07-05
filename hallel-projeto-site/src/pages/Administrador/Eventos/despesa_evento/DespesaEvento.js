import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./despesa_evento.css"
import HeaderDespesasEventos from './HeaderDespesasEventos';
import axios from 'axios';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import BodyDespesaEvento from './BodyDespesaEvento';
import ModalEditDespesaEvento from './ModalEditDespesaEvento';


const DespesaEvento = () => {

    const { idEvento } = useParams();
    const [evento, setEvento] = useState(null);
    const [openModal, setOpenModal] = useState(true);
    const [despesaSelected, setDespesaSelected] = useState(null);
    const [editPopUp, setEditPopUp] = useState(null);
    const [openPopUp, setopenPopUp] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/administrador/evento/" + idEvento + "/list", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {

            setEvento(res.data);
        }).catch((error) => {
            console.error("Error no requerimento para listar por id: " + error);
        })
    }, [])

    const handleClosePopUp = () => {
        setEditPopUp(null);
        setopenPopUp(false);
    }

    return (
        <div className='container_despesas_eventos'>
            {evento !== null ?
                <>
                    <HeaderDespesasEventos evento={evento} />
                    <BodyDespesaEvento evento={evento} />
                    <ModalEditDespesaEvento openModal={openModal} setOpenModal={setOpenModal} />
                    {editPopUp !== null &&
                        <>
                            {editPopUp === true &&
                                <Snackbar open={openPopUp} onClose={handleClosePopUp} autoHideDuration={3000} >
                                    <Alert severity='success' sx={{width: "100%"}}>Editado com sucesso</Alert>
                                </Snackbar>
                            }
                            {editPopUp === false &&
                                <Snackbar open={openPopUp} onClose={handleClosePopUp} autoHideDuration={3000} >
                                    <Alert severity='success' sx={{width: "100%"}}>Error na edição</Alert>
                                </Snackbar>
                            }
                        </>
                    }
                </> :
                <>
                    <div className='container_load_despesas_eventos'>
                        <label>Carregando...</label>
                        <CircularProgress />
                    </div>
                </>
            }
        </div>
    )
}

export default DespesaEvento