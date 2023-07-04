import React from 'react'
import DireitaBodyDespesasEvento from './DireitaBodyDespesasEvento'
import EsquerdaBodyDespesasEvento from './EsquerdaBodyDespesasEvento'

const BodyDespesaEvento = (props) => {
  return (
    <div className='body_despesas_evento'>
        <EsquerdaBodyDespesasEvento/>
        <DireitaBodyDespesasEvento evento={props.evento}/>
    </div>
  )
}

export default BodyDespesaEvento