import { OutputRounded } from '@mui/icons-material'
import React from 'react'

const HeaderDespesasEventos = (props) => {
    return (
        <div className='header_despesa_evento'>
            <div className='container_titulo_despesa_evento'>
                <label className='titulo_despesa_evento'>{props.evento?.titulo}</label>
            </div>
            <OutputRounded style={{height: "28px", width: "28px"}}/>
        </div>
    )
}

export default HeaderDespesasEventos