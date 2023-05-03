import "./styleDoacaoform.css"
import { useState } from "react";

const  Form2 = () =>{

    const [form2, setForm2] = useState(false);

return(

    <section className="container-form2">

        <div className="breadNav">

            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>

        <form className = "inserirPag">

            <label>Digite a sua quantia:</label>
            <input id = "valorPreço" type= "number" placeholder = "R$ 0,00"></input>
        </form>

        <div className="button-area">
       
       <button>Voltar</button>
       <button id="avancaButton">Avançar</button>
   </div>
    </section>
);
} 
export default Form2;