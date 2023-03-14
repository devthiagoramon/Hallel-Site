import './style.css';
import { Link } from "react-router-dom";

function PanelDoacao(){

    return(

        <div className ="container_panel">

            <div className ="container_panel2">

            <h1>Seja um associado Hallel</h1>

            <p>Conheça os Eventos da Comunidade Hallel e entenda por que<br/>precisamos de sua ajuda.</p>



            
            <Link to="/associado"><button>Saiba mais</button></Link>
            </div>
        </div>
    );
}
export default PanelDoacao;