import React from 'react'
import "./titulo_adm.css"

const TituloAdm = ({title}) => {
  return (
    <div className='container_title_adm'>
      <h1>{title}</h1>
    </div>
  )
}

export default TituloAdm