import React from 'react'
import HeaderDoacoes from '../HeaderDoacoes'
import FormsTipoDoacao from './FormsTipoDoacao'

const SelecioneTipoDoacao = ({setEtapa, etapa}) => {
  return (
    <div>
      <HeaderDoacoes text={"Selecione o tipo de doação"} />
      <FormsTipoDoacao setEtapa={setEtapa} etapa={etapa} />
    </div>
  )
}

export default SelecioneTipoDoacao
