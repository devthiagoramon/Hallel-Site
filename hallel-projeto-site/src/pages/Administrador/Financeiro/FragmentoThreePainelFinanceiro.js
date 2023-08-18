import { useState } from "react"
import Chart from "react-google-charts"

const FragmentoThreePainelFinanceiro = () =>{

    return(


        <section className="fragmento-financeiro-grafico">

            <div className="div-grafico-primeira">


                <GraficoPagamentos/>
                <GraficoTiposPagamentos/>

            </div>

            <div className="div-grafico-segunda">

                <div className="div-subgrafico-segunda">
                <GraficoEntradaSaida/>
                </div>
    
            </div>
            
        
        </section>
    )
}
const GraficoTiposPagamentos= () =>{

    const dataPagamentos = [
        ["Pagamentos", "Números"],
        ["PIX", 11],
        ["Crédito", 2],
        ["Débito", 2],
        ["Máquina", 2],
      ];

      const optionsPagamentos = {
        title: "Tipos de Pagamentos",
      };
    return(

        <>
            <Chart
              chartType="PieChart"
              data={dataPagamentos}
              options={optionsPagamentos}
              width="100%"
              height="300px"
            /> 
        </>
    )
}

const GraficoPagamentos= () =>{


      const dataDespesas = [

        ["Tipos", "Gastos"],
        ["Água", 100.0],
        ["Energia", 150.0],
        ["Alimentos", 130.0],
        ["Outros", 190.0],

      ]

      const optionsDespesas = {

        title: "Tipos de despesas"
      }
    return(

        <>

            <Chart
              chartType="PieChart"
              data={dataDespesas}
              options={optionsDespesas}
              width="100%"
              height="300px"
            /> 
        </>
    )
}
const GraficoEntradaSaida= () =>{


    const dataEntradaSaida = [

        ["Tipo", "Valor"],
        ["Entrada", 500],
        ["Saída", 800],
    ]

    const optionsEntradaSaida = {
        title: "Entradas e saídas"
    }

    return(

            <Chart
              chartType="PieChart"
              data={dataEntradaSaida}
              options={optionsEntradaSaida}
              width="100%"
              height="300px"
              className="div-grafico-segunda"
            /> 
    )
}
export default FragmentoThreePainelFinanceiro;