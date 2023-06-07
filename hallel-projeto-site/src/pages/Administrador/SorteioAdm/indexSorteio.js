import { Tab } from "bootstrap";
import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import Drop from "react-bootstrap/Dropdown"
import MenuItem from "react-bootstrap/DropdownItem"
import './styleSorteio.css';

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
    
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem("token"));
    
        fetch(url, {
          headers: myHeaders,
          method: "GET",
        })
          .then((r) => r.json())
          .then((object) => {
            setSorteio(object);
          })
          .catch((r) => {
            console.log("Erro ao carregar os dados dos sorteios da API");
          });
      });

    return(
        
        <section className="table-sorteados">

            <div className="head-table">

                <label>Ganhadores</label>

                
            </div>

            <Table style = {{backgroundColor: "#FCFBF8"}} bordered striped hover size="sm">

            <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Prêmio</th>
                <th>Data do Sorteio</th>
            </tr>
            </thead>

            <tbody>

            {sorteio.map((item) => {
                return (
                <tr key={item.id}>
                    <td>{item.titulo}</td>
                    <td>{item.descricao}</td>
                    <td>{item.data}</td>
                </tr>
                );
            })}
            </tbody>
            </Table>


        </section>
    )
}

function MeioConteudo(){

    const [show, setShow] = useState(false);

    function invertBoolean(){

        setShow(true);
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