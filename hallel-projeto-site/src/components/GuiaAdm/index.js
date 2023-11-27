import React from 'react'
import BarraLateralAdm from '../BarraLateralAdm'
import TituloAdm from '../TituloAdm'

const GuiaAdm = ({title, children}) => {
  return (
    <div style={{display: 'flex', width: "100vw", height: "100vh"}}>
        <BarraLateralAdm/>
        <TituloAdm title={title}/>
        {children}
    </div>
  )
}

export default GuiaAdm