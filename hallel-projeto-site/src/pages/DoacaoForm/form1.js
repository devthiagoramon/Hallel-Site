import "./styleDoacaoform.css"

const  Form1 = ({estado1}) => {


    const mudarEstado = () =>{

        return(

            <>





            
            </>

    
        

    
        
        )

    }

    

    return(

        <section className="container-form1">

            <div className="breadNav">

            <button>1</button>
            <button>2</button>
            <button>3</button>
            </div>

            <label>Selecione a sua forma de doação</label>

            <div className="forms1">

                <button>Dinheiro</button>
                <hr/>
                <button>Objetos/Alimentos</button>
                <hr/>
            </div>

            <div className="button-area">
           
                <button>Voltar</button>
                <button id="avancaButton" onClick={ () => mudarEstado()}>Avançar</button>
            </div>
        
        </section>

    );
}

export default Form1;