import React from 'react'
import "./doacoesHallel.css"
import FormularioDoador from './FormularioDoador'
import SelecioneTipoDoacao from './SelecioneTipoDoacao'
import PagamentoDoacao from './PagamentoDoacao'

const DoacoesHallel = () => {
  return (
    <div className='container-doacoes'>
      {/* <FormularioDoador/> */}
      {/* <SelecioneTipoDoacao/> */}
      <PagamentoDoacao />
    </div>
  )
}

export default DoacoesHallel
