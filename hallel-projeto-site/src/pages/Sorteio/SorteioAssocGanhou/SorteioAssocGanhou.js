import React from 'react'
import "./sorteio_assoc_ganhou.css"
import EsquerdaSorteioAssocGanhou from './EsquerdaSorteioAssocGanhou'
import DireitaSorteioAssocGanhou from './DireitaSorteioAssocGanhou'

const SorteioAssocGanhou = () => {
  return (
    <div className='cont_sort_assoc_ganhou'>
        <div className='header_sort_assoc_ganhou'>
          <h1>Sorteio</h1>
        </div>
        <div className='body_sort_assoc_ganhou'>
        <EsquerdaSorteioAssocGanhou/>
        <DireitaSorteioAssocGanhou/>
        </div>
    </div>
  )
}

export default SorteioAssocGanhou