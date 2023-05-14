import { useState } from "react"
import "./styleDoacaoform.css"


const  Form1 = ({setEstado2, estado1, setEstado1, estado2}) => {


    const [showDoacao, setShowDoacao] = useState(false);


    function mudarSinais(){

        return(
            setEstado2(!estado2),
            setEstado1(!estado1)
        )

    }

    function showDonation(){

        return(
         
            {

            }
         
        )
    }


    function elementos(){
        

        return(

            <section className="container-form1">

            <div className="breadNav">

            <button>1</button>
            <button>2</button>
            <button>3</button>
            </div>

            <label>Selecione a sua forma de doação</label>

            <div className="forms1">

                <button onClick={showDonation}>Dinheiro</button>
                
                <hr/>
                <button>Objetos/Alimentos</button>
                <hr/>
            </div>

            <div className="button-area">
           
                <button>Voltar</button>
                <button id="avancaButton" onClick={mudarSinais}>Avançar</button>
            </div>
        </section>
        )
    }
    return(

            elementos()

    );
   
}

export default Form1;