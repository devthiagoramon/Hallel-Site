import React from 'react'
import "./painelFin.css"
import HeaderPainelFinanceiroAdm from './HeaderPainelFinanceiroAdm'
import FragmentoOnePainelFinanceiro from './FragmentoOnePainelFinanceiro'
import FragmentoTwoPainelFinanceiro from './FragmentoTwoPainelFinanceiro'

const PainelFinanceiroAdm = () => {
  return (
    <div className='container_painel_financeiro'>
      <HeaderPainelFinanceiroAdm/>
      <FragmentoOnePainelFinanceiro/>
      <FragmentoTwoPainelFinanceiro/>
    </div>
  )
}

export default PainelFinanceiroAdm
