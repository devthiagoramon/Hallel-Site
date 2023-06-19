import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import './styleSorteio.css';
import axios from "axios"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@mui/material";

const SorteioAdm = () => {

    return(

        <section className="sorteioAdm">

            <label>Sorteio de Associados</label>

            <MeioConteudo/>
            <Tabela/>

        
        </section>
    )

}

function Tabela(){

    const [sorteio, setSorteio] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/sorteio";

        axios.get(url)

        .then((response) => {

            setSorteio(response.data)

        })
        .catch((response) =>{

            console.log("ERRO AO PUXAR DA API")
        })
      });

    return(
        
        <section className="table-sorteados">

            <div className="head-table">

                <label>Ganhadores</label>

                
            </div>

            {sorteio.length === 0 ?(
                
                <div className="circuloProgresso">
        
                <CircularProgress/>
                </div>
            ): (

                <>

                <Table style = {{backgroundColor: "#FCFBF8"}} bordered striped hover size="sm" border={2}>

                <thead>
                <tr>
                    <th>Id</th>
                    <th>Prêmio</th>
                    <th>Nome do sorteado</th>
                    <th>Data do Sorteio</th>
                </tr>
                </thead>

                <tbody>

                {sorteio.map((item) => {
                    return (
                        <tr key={item.id}>

                            <td>{item.titulo}</td>
                            <td>{item.sorteioAssociados}</td>
                            <td>{item.data}</td>
                        </tr>
                    );
                })}

                     
                </tbody>
                </Table>

                </>
            )}
            {/*<tr>

                <td>1</td>
                <td>Franscisco Ferdinando</td>
                <td>Bíblia</td>
                <td>22/04/06</td>
                </tr>

                <tr>

                <td>2</td>
                <td>Amalia das Neves</td>
                <td>Cesta Básica</td>
                <td>16/03/06</td>
                </tr>

                <tr>

                <td>3</td>
                <td>Hegtor Farias da Silva</td>
                <td>Cruz</td>
                <td>05/02/06</td>
            </tr>
            */}
        </section>
    )
}

function MeioConteudo(){

    const [show, setShow] = useState(false);

    function invertBoolean(){

        setShow(true);
        <CircularProgress/>
    }



    return( 

        
        <div className="label-area">

            <div className="painelSort-bt">
                <label>Sortear associado</label>
                <button onClick={() =>invertBoolean()} >Sortear</button>
            </div>


            {/*pegar os dados da api, falta*/}
            { show &&

                    <div className="painelSort-bt" id="ganhador">
                    <label>Ganhador(a)</label>
                    <label className="associado-sorteado">
                        Nome do associado
                    </label>
            </div>
            }
        </div>   
    )
}

export default SorteioAdm;