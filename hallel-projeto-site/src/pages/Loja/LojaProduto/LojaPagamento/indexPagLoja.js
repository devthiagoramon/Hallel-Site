import './stylePagamento.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import HeaderLoja from "../../../../components/HeaderLoja/indexTopLoja";
import  {MdOutlinePix} from "react-icons/md"
import {AiFillCreditCard} from "react-icons/ai"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import  FormControl from '@mui/material/FormControl';

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
                    <Botao/>
                </div>
            </div>


        </div>
    )
}

const TabelaProdutos = () =>{

    const [produtos, setProdutos] = useState("Produto");
    const [precos, setPrecos] = useState("R$0,00");

        return(

            <Table  border={3} striped bordered size="md">

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

        <FormControl>
            <RadioGroup>
        <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Pix <MdOutlinePix/>
        </AccordionSummary>
        <AccordionDetails>
          <div className='colunaAcordeao'>
        O QR Code do Pix será exibido após a confirmação de compra
        <FormControlLabel value="pagamentoPix" control={<Radio />} label="Pix"/>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            Cartão de Crédito <AiFillCreditCard/>
        </AccordionSummary>
        <AccordionDetails>

            <div className='colunaAcordeao'>
          
        Utilizar o cartão de crédito
        <FormControlLabel value="pagamentoCartão" control={<Radio />} label="Cartão de crédito"/>
            </div>
        </AccordionDetails>
      </Accordion>
      </RadioGroup>

    </FormControl>
  
    )
}

const Botao = () => {

    return(

        <button className='botao-loja'>

            <label>Finalizar com o pix</label>


        </button>
    )
}
export default LojaPagamento;