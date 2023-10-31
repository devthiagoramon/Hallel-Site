import React from 'react'
import HeaderDoacoes from '../HeaderDoacoes'
import FormsDoador from './FormsDoador'

const FormularioDoador = () => {
  return (
    <div>
      <HeaderDoacoes text={"Preencha o formulário e seja um doador"} />
      <FormsDoador />
    </div>
  )
}

export default FormularioDoador
