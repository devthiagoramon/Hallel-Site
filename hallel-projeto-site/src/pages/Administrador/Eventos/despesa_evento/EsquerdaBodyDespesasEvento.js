import React from 'react'
import ListaDespesasEvento from './ListaDespesasEvento'

const EsquerdaBodyDespesasEvento = (props) => {
  return (
    <div className='esquerda_body_despesas_evento'>
        <ListaDespesasEvento setOpenModal={props.setOpenModal} changedTabela={props.changedTabela}  setDespesaSelected={props.setDespesaSelected} evento={props.evento} setopenModalDelete={props.setopenModalDelete}/>
    </div>
  )
}

export default EsquerdaBodyDespesasEvento