import { CircularProgress, Menu, MenuItem } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ModalListarLocalEvento = (props) => {

    const openLocaisEvento = Boolean(props.anchorEl);
    const [LocaisEventos, setLocaisEventos] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/locais/listLocalizacao", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setLocaisEventos(res.data)
        }).catch((error) => {
            console.error("Error na listagem de locais eventos; " + error)
        })

    }, [])

    function retornarLocalEvento(id, localizacao) {
        const localEvento = {
            id: id,
            localizacao: localizacao
        }
        props.setLocalEvento(localEvento);
        props.setAnchorEl(null)
    }


    return (
        <Menu
            open={openLocaisEvento}
            onClose={props.handleCloseLocaisEvento}
            anchorEl={props.anchorEl}
            sx={{ maxWidth: "400px", maxHeight: "400px"}}
        >
            {LocaisEventos.length !== 0 ?
                <>
                    {LocaisEventos.map((locais) => {
                        return (
                            <MenuItem key={locais.id} onClick={() => { retornarLocalEvento(locais.id, locais.localizacao) }}>{locais.localizacao}</MenuItem>
                        )
                    })}</> : <>
                    <CircularProgress /></>
            }
        </Menu>
    )
}

export default ModalListarLocalEvento