import React from 'react'
import ListaDespesasEvento from './ListaDespesasEvento'

const EsquerdaBodyDespesasEvento = (props) => {
  return (
    <div className='esquerda_body_despesas_evento'>
        <ListaDespesasEvento evento={props.evento}/>
    </div>
  )
}

export default EsquerdaBodyDespesasEvento