import "./visualizarCurso.css";
import Img from "../../images/fundoCardTeste.jpg";
import Card from "react-bootstrap/Card";
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useMemo, useRef, useState} from "react";
import axios from "axios";
import {associadoListarMeusCursos} from "../../api/uris/AssociadosURLS";
import {associadoListarMeusCursosService} from "../../service/AssociadoService";

const AreaTopo = (props) => {
    return (
        <div className="containerAreaTopo">
            <label>Filtrar por:</label>

            <div className="blococursos">
                <select name="selector" id="filtroCursos">
                    <option value="categoria">Categoria</option>
                    <option value="todos">Todos</option>
                    <option value="fav">Favoritos</option>
                </select>

                <select name="selector" id="statusCurso">
                    <option value="status">Status</option>
                    <option value="concluido">Concluídos</option>
                    <option value="iniciado">Iniciados</option>
                </select>

                <select name="selector" id="acessos">
                    <option value="recente">Recentes</option>
                    <option value="antigos">Antigos</option>
                </select>

                <label className="search-box">
                    <input
                        style={{padding: "3px"}}
                        type="search"
                        name="q"
                        placeholder="Pesquisar.."
                    />
                    <button style={{padding: "3px"}}>
                        <AiOutlineSearch/>
                    </button>
                </label>
            </div>
        </div>
    );
};

const AreaCurso = (props) => {
    const [meusCursos, setMeusCursos] = useState();
    useMemo(() => {
        associadoListarMeusCursosService(localStorage.getItem("HallelId")).then((response) => {
            setMeusCursos(response)
        });
    }, []);

    return (
        <div className="containerCursos">
            {meusCursos.map((curso) => {
                return (
                    <Card key={curso.id} style={{width: "18rem"}}>
                        <Link id="linkcard" to="/desempenhoUser">
                            <Card.Img variant="top" src={curso.imagem}/>
                        </Link>
                        <Card.Body>
                            <Card.Title>{curso.nome}</Card.Title>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default function VisualizarCurso() {
    return (
        <div className="containerVisuCurso">
            <h1>Seus cursos</h1>
            <AreaTopo/>
            <AreaCurso/>
        </div>
    );
}
