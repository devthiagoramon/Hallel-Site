import { useState } from "react";
import './desp.css'
import { Table } from "react-bootstrap";
import {BsPencilFill} from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"

function DespesaListagem(){

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