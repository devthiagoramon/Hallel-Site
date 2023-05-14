import "./styleDoacaoform.css"

const  Form2 = ({setEstado2, estado2, setEstado3, estado3}) =>{

    function mudarSinais(){


        return(

        setEstado2(!estado2),
        setEstado3(!estado3)
        )
    }

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
       <button id="avancaButton" onClick={mudarSinais}>Avançar</button>
   </div>
    </section>
);
} 
export default Form2;