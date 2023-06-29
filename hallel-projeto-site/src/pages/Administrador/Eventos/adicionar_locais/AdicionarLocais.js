import React from 'react'
import BodyAdicionarLocais from './BodyAdicionarLocais'
import HeaderAdicionarLocais from './HeaderAdicionarLocais'
import "./adicionar_local.css"

const AdicionarLocais = () => {
  return (
    <div className='containerAdicionarLocais'>

        <HeaderAdicionarLocais/>
        <BodyAdicionarLocais/>

    </div>
  )
}

export default AdicionarLocais