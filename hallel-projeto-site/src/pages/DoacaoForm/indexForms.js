import { useState } from "react";
import "./styleDoacaoform.css";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form3a from "./form3a";

function FormInterface(){

    const [estado1, setEstado1] = useState(true);
    const [estado2, setEstado2] = useState(false);
    const [estado3, setEstado3] = useState(false);
    const [estado3a, setEstado3a] = useState(false);


    const testaForm = () => {

        if(estado1){
            return <Form1 setEstado1 = {setEstado1} setEstado2 = {setEstado2}/>            
        } else{

            return <Form2 setEstado1 = {setEstado1} setEstado2 = {setEstado2}/> 
        }
    
             
        
             

        if(estado2){

            return <Form2 setEstado2 = {setEstado2}/>
        }
        if(estado3){

            return <Form3/>
        }
        if(estado3a){

            return <Form3a/>
        }
    }

    function mudarEstado(estado){

        return estado = !estado
    }

    return(

        <>

            <div className="container-DoacaoForm">

                <div className="container-right">

                    <label>doações</label>

                    {

                        testaForm()
                    }

            
                    
                </div>
            </div>
        </>
    );
}

export default FormInterface;