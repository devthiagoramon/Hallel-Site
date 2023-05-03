import "./historico_curso.css";
import Table from "react-bootstrap/Table";
import Search from "react-bootstrap/FormGroup";
import {AiOutlineSearch} from 'react-icons/ai';
import Button from "react-bootstrap/Button";

const TabelaDesempenho = () =>{

    return(

        <section className="section-tabelaDesempenho">

            <Table style = {{backgroundColor: "#FCFBF8"}} bordered striped hover size="sm" >

                <thead>

                    <tr >

                        <th>Código</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Nota</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>

                        <td>1</td>
                        <td>Fulano da Silva</td>
                        <td>Concluído</td>
                        <td>9.7</td>
                    </tr>

                    
                    <tr>

                        <td>2</td>
                        <td>Eurica da Silva</td>
                        <td>Em andamento</td>
                        <td>-</td>
                    </tr>

                    
                    <tr>

                        <td>3</td>
                        <td>Francisca Nunes Barroso</td>
                        <td>Não iniciado</td>
                        <td>-</td>
                    </tr>

                    <tr>

                        <td>4</td>
                        <td>Raimundo Augusto da Paixão</td>
                        <td>Em andamento</td>
                        <td>-</td>
                    </tr>

                    <tr>

                        <td>5</td>
                        <td>Luis do Carmo</td>
                        <td>Concluído</td>
                        <td>10</td>
                    </tr>

                    <tr>

                        <td>6</td>
                        <td>Bastião dos Santos</td>
                        <td>Em andamento</td>
                        <td>7.6</td>
                    </tr>
                

                <tr>

                        <td>7</td>
                        <td>Amaltion Correia</td>
                        <td>Concluído</td>
                        <td>7.6</td>
                    </tr>

                    <tr>

                        <td>8</td>
                        <td>Amanda Queiroz</td>
                        <td>Não iniciado</td>
                        <td>-</td>
                    </tr>

                    <tr>

                        <td>9</td>
                        <td>Henrique Peixoso</td>
                        <td>Em andamento</td>
                        <td>-</td>
                    </tr>

                    </tbody>
            </Table>
        </section>
    );
}

const  BarraPesquisa = () =>{

    return(

        <div className="barra-body">

            <Search className="searchbar">

                <input type="search" name = "q" placeholder="Pesquisar.." className="form-control"/>

                <Button type="button" className="primary">

                    <i><AiOutlineSearch/></i>

                </Button>
            </Search>
        </div>
    );
}

function HistoricoCurso(){

    return(
    
        <section className = "desempenhoUser-body">

            <label>Nome do curso</label>

            <BarraPesquisa/>
            <TabelaDesempenho />
        </section>
    );
}
export default HistoricoCurso;