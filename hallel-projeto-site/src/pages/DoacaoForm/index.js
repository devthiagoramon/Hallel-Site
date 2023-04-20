import "./styleDoacaoform.css"
import Form from "react-bootstrap/Form"
import Confirmar from "../../images/Confirmado.png"

function Form1(){

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
                <button id="avancaButton">Avançar</button>
            </div>
        
        </section>

    );
    }

function Form2(){


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

function Form3(){

    return(

        <section className = "container-form3">
  
            <div className="breadNav">

                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>

            <label>Informe seus dados</label>
            
            <Form id = "formsDoar">


                <Form.Group className="mb-3 row">

                    <Form.Label className="labelforms" for = "cpfTitular">CPF:</Form.Label>

                    <input type="number" id ="cpfTitular"/>
                </Form.Group>

                <Form.Group className="mb-3 row">

                    <Form.Label  className="labelforms" for = "NomeTitular">Nome do titular:</Form.Label>
                    <input type="text"/>
                </Form.Group>

                <Form.Group className="mb-3 row">

                    <Form.Label  className="labelforms" for ="NumeroCartao">Número do cartão</Form.Label>
                    <input type = "NumeroCartao"/>
                </Form.Group>

                <Form.Group className= "mb-3 row">

                    <Form.Label  className="labelforms" for = "DateVenc">Data de vencimento:</Form.Label>
                    <input type="date"></input>
                </Form.Group>
            </Form>
            <div className= "button-area">

                <button>Voltar</button>
                <button>Confirmar</button>
            </div>
</section>
    );
}     

function Form3a(){

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

function DoacaoForm(){

    return(

        <div className="container-DoacaoForm">

            <div className="container-right">

                <label>doações</label>

                <div>

                    <Form1/> 
                </div>
            </div>
        </div>
    );
}
export default DoacaoForm;