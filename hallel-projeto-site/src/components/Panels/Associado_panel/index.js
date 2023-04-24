import './style.css';
import { Link } from "react-router-dom";

function PanelDoacao(){

    return(

        <div className ="container_panel">

            

            <label>Seja um associado Hallel</label>

            <p>Conheça os Eventos da Comunidade Hallel e entenda por que<br/>precisamos de sua ajuda.</p>
            
            <Link to="/associado">
                <button className='btnAssociado'>Saiba mais
                </button>
            </Link>
            </div>
    );
}
export default PanelDoacao;