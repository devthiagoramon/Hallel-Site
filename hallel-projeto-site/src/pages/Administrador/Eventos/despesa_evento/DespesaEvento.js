import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./despesa_evento.css"
import HeaderDespesasEventos from './HeaderDespesasEventos';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import BodyDespesaEvento from './BodyDespesaEvento';


const DespesaEvento = () => {

    const { idEvento } = useParams();
    const [evento, setEvento] = useState(null);

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

    return (
        <div className='container_despesas_eventos'>
            {evento !== null ?
                <>
                    <HeaderDespesasEventos evento={evento} />
                    <BodyDespesaEvento evento={evento}/>
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