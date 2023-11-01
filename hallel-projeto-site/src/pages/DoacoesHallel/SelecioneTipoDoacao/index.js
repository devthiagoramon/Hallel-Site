import React from 'react'
import HeaderDoacoes from '../HeaderDoacoes'
import FormsTipoDoacao from './FormsTipoDoacao'

const SelecioneTipoDoacao = ({setEtapa}) => {
  return (
    <div>
      <HeaderDoacoes text={"Selecione o tipo de doação"} />
      <FormsTipoDoacao setEtapa={setEtapa} />
    </div>
  )
}

export default SelecioneTipoDoacao
