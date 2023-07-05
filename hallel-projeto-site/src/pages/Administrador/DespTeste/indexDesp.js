import { useState } from "react";
import './desp.css'
import { Table } from "react-bootstrap";
import {BsPencilFill} from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

function DespesaListagem(){

  const items = [
    <div className="item" data-value="1">
        

    </div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Carousel = () => {

  return(
  <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
  />

  )

}



    return(

        <section className="body_despesas">

            <label>Despesa</label>
            
            <TabelaDespesa/>
        </section>
    )
}

const TabelaDespesa = () =>{

  

    const [eventos, setEvento] = useState([]);

    return(

        <section className="sessao_tabela">


            <div>

                <button>Adicionar despesa</button>

            </div>

          

            <Table
            hover
            style={{
              width: "70%",
              maxWidth: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              marginLeft: "8rem",
              marginRight: "8rem",
            }}
          >
            <thead>
              <tr>
                <th>Valor</th>
                <th>Finalidade</th>
                <th>Data do gasto</th>
                <th>Emissor</th>
                <th style={{textAlign: "center"}}>Opções</th>
              </tr>
            </thead>
            <tbody>
              
                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">

                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>


                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>


                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>

                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>


                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>

                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>

                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>

                  <tr>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td>valor</td>
                    <td >

                        <div className="row_opcoes">
                            
                            <AiFillDelete/>
                            <BsPencilFill/>
                        </div>
                    </td>
                  </tr>
              
            </tbody>
            </Table>

        </section>
    )
}
export default DespesaListagem;