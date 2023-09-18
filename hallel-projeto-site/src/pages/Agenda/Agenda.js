import React from 'react'
import "./agenda.css"
import EsquerdaAgenda from './EsquerdaAgenda'
import DireitaAgenda from './DireitaAgenda'

export const Agenda = () => {
  return (
    <div className='cont_agenda'>
        <div className='header_agenda'>
          <h1>Agenda de Eventos</h1>
        </div>
        <div className='body_agenda'>
          <EsquerdaAgenda/>
          <DireitaAgenda/>
        </div>
    </div>
  )
}
