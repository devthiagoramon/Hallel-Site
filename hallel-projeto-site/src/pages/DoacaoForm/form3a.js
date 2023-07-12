import Confirmar from "../../images/Confirmado.png";
import "./styles/styleForm3a.css"
import { Link } from "react-router-dom";

const  Form3a = ({setEstado3a, estado3a}) =>{

    
    function mudarSinais(e){

        setEstado3a(!estado3a);
    }

    return(

        <section className="forms-container3_1">

            <div className="breadNav">
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>

        <div className="infoDoar">

            <label>Sua doação foi recebida</label>

            <img src={Confirmar} alt="Doar Confirmação"></img>
            <label>Agracemos a sua coloboração!</label>
        </div>

        <div className="button-area">
           
        
           <Link to ="/"><button id="avancaButton" onClick={mudarSinais}>Home</button></Link>
       </div>


        </section>
    )
}


export default Form3a;