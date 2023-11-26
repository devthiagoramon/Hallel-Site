import React from 'react'
import "./formulario_adm.css"
import HeaderFormsAdm from './HeaderForms'
import FormsAdm from './Forms'

const FormularioAdm = () => {
  return (
    <div className='container_forms_adm'>
      <HeaderFormsAdm/>
      <FormsAdm/>
    </div>
  )
}

export default FormularioAdm