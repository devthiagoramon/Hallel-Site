import React from 'react'
import DireitaBodyDespesasEvento from './DireitaBodyDespesasEvento'
import EsquerdaBodyDespesasEvento from './EsquerdaBodyDespesasEvento'

const BodyDespesaEvento = (props) => {

  return (
    <div className='body_despesas_evento'>
        <EsquerdaBodyDespesasEvento setOpenModal={props.setOpenModal} changedTabela={props.changedTabela} setDespesaSelected={props.setDespesaSelected} evento={props.evento} setopenModalDelete={props.setopenModalDelete} />
        <DireitaBodyDespesasEvento changedTabela={props.changedTabela} setChangedTabela={props.setChangedTabela} evento={props.evento}/>
    </div>
  )
}

export default BodyDespesaEvento