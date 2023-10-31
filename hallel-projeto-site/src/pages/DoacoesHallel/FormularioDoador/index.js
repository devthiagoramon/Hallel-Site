import React from 'react'
import HeaderDoacoes from '../HeaderDoacoes'
import FormsDoador from './FormsDoador'

const FormularioDoador = ({setEtapa}) => {
  return (
    <div>
      <HeaderDoacoes text={"Preencha o formulário e seja um doador"} />
      <FormsDoador setEtapa={setEtapa} />
    </div>
  )
}

export default FormularioDoador
