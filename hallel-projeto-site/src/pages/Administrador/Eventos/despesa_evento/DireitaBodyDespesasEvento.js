import React from 'react'
import InputsBodyDespesasEvento from './InputsBodyDespesasEvento'

const DireitaBodyDespesasEvento = (props) => {
  return (
    <div className='direita_body_despesas_evento'>
        <InputsBodyDespesasEvento changedTabela={props.changedTabela} setChangedTabela={props.setChangedTabela} evento={props.evento} />
    </div>
  )
}

export default DireitaBodyDespesasEvento