import React from 'react'
import InputsBodyDespesasEvento from './InputsBodyDespesasEvento'

const DireitaBodyDespesasEvento = (props) => {
  return (
    <div className='direita_body_despesas_evento'>
        <InputsBodyDespesasEvento evento={props.evento} />
    </div>
  )
}

export default DireitaBodyDespesasEvento