import React from 'react'
import HeaderDoacoes from '../HeaderDoacoes'
import FormsDoador from './FormsDoador'

const FormularioDoador = ({userDoacao, setUserDoacao,setEtapa}) => {
  return (
    <div>
      <HeaderDoacoes text={"Preencha o formulário e seja um doador"} />
      <FormsDoador userDoacao={userDoacao} setUserDoacao={setUserDoacao} setEtapa={setEtapa} />
    </div>
  )
}

export default FormularioDoador
