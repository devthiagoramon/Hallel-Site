import "./styles/styleForm3.css"
import Form from "react-bootstrap/Form"

const Form3 = ({setEstado2, estado2, setEstado3, estado3, setEstado3a, estado3a, setDoacao, addDoar}) =>{

    function mudarSinais(e){

        if(e == 1){
            return(
            addDoar(),
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
                          return{... prevState, valorDoacao: e.target.value}
                        })
                      }} type="text" id ="cpfTitular"/>
                </Form.Group>

            </Form>
            <div className= "button-area">

                <button onClick={()=> mudarSinais(0)}>Voltar</button>
                <button id="avancaButton" onClick={addDoar}>Confirmar</button>
            </div>
        </section>
    );
}     


export default Form3;