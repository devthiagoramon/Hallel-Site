import './stylePagamento.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import HeaderLoja from "../../../../components/HeaderLoja/indexTopLoja";


function LojaPagamento(){

    

    return(



        <div className='pagamentoLoja'>
            <HeaderLoja/>

            <label>Revise o seu pedido e escolha o método de pagamento</label>


            <div className='componenteReviewLoja'>

                <div>

                    <label>Pedido</label>
                    <TabelaProdutos/>

                </div>

                <div>

                    <label>Método de pagamento</label>
                    <MetodoPagamento/>
                </div>
            </div>


        </div>
    )
}

const TabelaProdutos = () =>{

    const [produtos, setProdutos] = useState("Produto");
    const [precos, setPrecos] = useState("R$0,00");

        return(

            <Table  border={2} striped bordered size="md">

                <thead>
                <tr>

                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>{produtos}</td>
                        <td>{precos}</td>
                    </tr>

                    
                        <tr>
                            Total {precos}
                        </tr>
                    
                </tbody>
            </Table>
        )
}

const MetodoPagamento = () =>{

    return(

        <>
        <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Pix
        </AccordionSummary>
        <AccordionDetails>
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            Cartão de Crédito
        </AccordionSummary>
        <AccordionDetails>
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          
        </AccordionDetails>
      </Accordion>

    </>
  
    )
}
export default LojaPagamento;