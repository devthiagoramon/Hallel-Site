import React, {useMemo, useState} from 'react'
import {useParams} from 'react-router-dom'
import "./despesa_evento.css"
import HeaderDespesasEventos from './HeaderDespesasEventos';
import {Alert, CircularProgress, Snackbar} from '@mui/material';
import BodyDespesaEvento from './BodyDespesaEvento';
import ModalEditDespesaEvento from './ModalEditDespesaEvento';
import ModalDeleteEvento from './ModalDeleteEvento';
import {eventoListarPorIdService} from "../../../../service/EventoService";


const DespesaEvento = () => {

    const {idEvento} = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [despesaSelected, setDespesaSelected] = useState(null);
    const [editPopUp, setEditPopUp] = useState(null);
    const [openPopUp, setopenPopUp] = useState(false);
    const [changedTabela, setChangedTabela] = useState(false);
    const [openModalDelete, setopenModalDelete] = useState(false);
    const [evento, setEvento] = useState()
    useMemo(() => {
        return eventoListarPorIdService(idEvento).then((response) => {
            setEvento(response)
        });
    }, [])

    const handleClosePopUp = () => {
        setEditPopUp(null);
        setopenPopUp(false);
    }

    return (
        <div className='container_despesas_eventos'>
            {evento !== null ?
                <>
                    <HeaderDespesasEventos evento={evento}/>
                    <BodyDespesaEvento setOpenModal={setOpenModal} setDespesaSelected={setDespesaSelected}
                                       changedTabela={changedTabela} setChangedTabela={setChangedTabela} evento={evento}
                                       setopenModalDelete={setopenModalDelete}/>
                    <ModalEditDespesaEvento changedTabela={changedTabela} setChangedTabela={setChangedTabela}
                                            openModal={openModal} setOpenModal={setOpenModal} idEvento={idEvento}
                                            despesaSelected={despesaSelected} setEditarPopUp={setEditPopUp}
                                            setOpenPopUp={setopenPopUp} setDespesaSelected={setDespesaSelected}/>
                    <ModalDeleteEvento openModalDelete={openModalDelete} setDespesaSelected={setDespesaSelected}
                                       setopenModalDelete={setopenModalDelete} despesaSelected={despesaSelected}
                                       setChangedTabela={setChangedTabela} changedTabela={changedTabela}
                                       idEvento={idEvento}/>
                    {editPopUp !== null &&
                        <>
                            {editPopUp === true &&
                                <Snackbar open={openPopUp} onClose={handleClosePopUp} autoHideDuration={3000}>
                                    <Alert severity='success' sx={{width: "100%"}}>Editado com sucesso</Alert>
                                </Snackbar>
                            }
                            {editPopUp === false &&
                                <Snackbar open={openPopUp} onClose={handleClosePopUp} autoHideDuration={3000}>
                                    <Alert severity='error' sx={{width: "100%"}}>Error na edição</Alert>
                                </Snackbar>
                            }
                        </>
                    }
                </> :
                <>
                    <div className='container_load_despesas_eventos'>
                        <label>Carregando...</label>
                        <CircularProgress/>
                    </div>
                </>
            }
        </div>
    )
}

export default DespesaEvento