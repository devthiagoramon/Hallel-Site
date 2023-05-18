import './visualizarCurso.css'
import Img from "../../images/fundoCardTeste.jpg";
import Card from 'react-bootstrap/Card';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";

function AreaTopo() {


    return (

        <div className='containerAreaTopo'>

            <label>Filtrar por:</label>

            <div className='blococursos'>

                <select name="selector" id="filtroCursos">

                    <option value="categoria">Categoria</option>
                    <option value="todos">Todos</option>
                    <option value="fav">Favoritos</option>
                    <option value="arquivado">Arquivados</option>
                </select>

                <select name="selector" id="statusCurso">

                    <option value="status">Status</option>
                    <option value="concluido">Concluídos</option>
                    <option value="iniciado">Iniciados</option>
                    <option value="naoIniciado">Não Iniciados</option>
                </select>

                <select name="selector" id="acessos">

                    <option value="recente">Recentes</option>
                    <option value="antigos">Antigos</option>
                </select>

                <label className='search-box'>

                    <input type="search" name="q" placeholder="Pesquisar.." />
                    <button><AiOutlineSearch /></button>
                </label>
            </div>

        </div>

    );
}

function AreaCurso() {

    const cartao = [CursosCards(), CursosCards(), CursosCards(), CursosCards(), CursosCards(), CursosCards(), CursosCards(), CursosCards(), CursosCards(), CursosCards()];

    return (

        <div className='containerCursos'>

            {cartao.map((card, i) => {

                return (

                    <div className='cartoes' id="i">

                        {card}
                        

                    </div>
                );
            })}
        </div>
    );
}

function CursosCards() {

    return (

        <Card style={{ width: '18rem' }}>


        <Link id='linkcard' to = "/desempenhoUser"><Card.Img variant="top" src={Img} /></Link>
            <Card.Body>

                <Card.Title>Nome do Curso</Card.Title>
                <Card.Text>

                    <div className='tag-bloco'>

                        <label id="tag">tag</label>
                        <label id="tag">tag</label>
                        <label id="tag">tag</label>
                        <label id="tag">tag</label>
                        <label id="tag">tag</label>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default function VisualizarCurso() {

    return (

        <div className='containerVisuCurso'>

            <h1>Seus cursos</h1>
            <AreaTopo />
            <AreaCurso />
        </div>
    );
}