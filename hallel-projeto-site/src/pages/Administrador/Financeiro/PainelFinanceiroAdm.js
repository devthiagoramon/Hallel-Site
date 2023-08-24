import React from 'react'
import "./painelFin.css"
import HeaderPainelFinanceiroAdm from './HeaderPainelFinanceiroAdm'
import FragmentoOnePainelFinanceiro from './FragmentoOnePainelFinanceiro'
import FragmentoTwoPainelFinanceiro from './FragmentoTwoPainelFinanceiro'
import FragmentoThreePainelFinanceiro from './FragmentoThreePainelFinanceiro'

const PainelFinanceiroAdm = () => {
  return (
    <div className='container_painel_financeiro'>
      <HeaderPainelFinanceiroAdm/>

      <FragmentoTwoPainelFinanceiro/>
      <FragmentoOnePainelFinanceiro/>
      <FragmentoThreePainelFinanceiro/>
    </div>
  )
}
export default PainelFinanceiroAdm;