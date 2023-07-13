import "./styles/styleForm3.css"
import Form from "react-bootstrap/Form"

const Form3 = ({setEstado2, estado2, setEstado3, estado3, setEstado3a, estado3a, doacao, setDoacao, postDoacao}) =>{

    function mudarSinais(e){

        if(e == 1){
            return(
            console.log("email: "+doacao.emailDoador),
            postDoacao(),
            setEstado3(!estado3), setEstado3a(!estado3a)
            )
        } else{
            
            return(
            setEstado2(!estado2), setEstado3(!estado3)
        
            )
        }
        }

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

                    <Form.Label className="labelforms" for = "cpfTitular"
                    
                    
                    >Email:</Form.Label>

                    <input onChange={(e) =>{
                        setDoacao(prevState =>{
                          return{... prevState, emailDoador: e.target.value}
                        })
                      }} type="text" id ="emailTitular"/>
                </Form.Group>

            </Form>
            <div className= "button-area">

                <button onClick={()=> mudarSinais(0)}>Voltar</button>
                <button id="avancaButton" onClick={() =>mudarSinais(1)}>Confirmar</button>
            </div>
        </section>
    );
}     


export default Form3;