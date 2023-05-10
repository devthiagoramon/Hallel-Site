import Confirmar from "../../images/Confirmado.png";
import "./styleDoacaoform.css"

const  Form3a = () =>{

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
           
           <button>Voltar</button>
           <button id="avancaButton">Avançar</button>
       </div>


        </section>
    )
}


export default Form3a;