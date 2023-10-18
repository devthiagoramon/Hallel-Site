import React from 'react'
import "./agenda.css"
import EsquerdaAgenda from './EsquerdaAgenda'
import DireitaAgenda from './DireitaAgenda'

export const Agenda = () => {
  return (
    <div className='cont_agenda'>
        <div className='header-agenda'> 
          <span>Agenda de Eventos</span>
         </div>

        <div className='body_agenda'><div className='quadd'>
          <EsquerdaAgenda/></div>
          <DireitaAgenda/>
       
      </div>
    </div>
  )
}
