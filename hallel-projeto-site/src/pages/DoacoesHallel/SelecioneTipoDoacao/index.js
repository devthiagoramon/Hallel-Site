import React from 'react'
import HeaderDoacoes from '../HeaderDoacoes'
import FormsTipoDoacao from './FormsTipoDoacao'

const SelecioneTipoDoacao = () => {
  return (
    <div>
      <HeaderDoacoes text={"Selecione o tipo de doação"} />
      <FormsTipoDoacao />
    </div>
  )
}

export default SelecioneTipoDoacao
