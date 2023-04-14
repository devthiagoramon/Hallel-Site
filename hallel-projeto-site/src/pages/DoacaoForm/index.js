import "./styleDoacaoform.css"
{/*import React, {useState, useEffect} from "react";*/}

function Form1(){

{/*const [status, setStatus] = useState(true); */}

    return(

        <>
        
            <h1>SA</h1>
        
        
        </>

    );


    {/*useEffect( () => {

        return handleTrocarPag(), [status]}
    );  */}
        
    

    {/*function handleAlterar() {

        setStatus(!status);

    }  */}

    {/*function handleTrocarPag(){

        return <Form2/>;
    }
    return(

        <div className = "container-form1">            

            <h1>Sou o 1 form teste</h1>

            <button onClick={handleAlterar}>Avançar</button>
        </div>
    );
}; */}

{/*function Form2(){

    const [status2, setStatus] = useState(true);

    return(

        <div className = "container-form2">

            <h1>Sou o 2 form</h1>
        </div>
    );
} */}

{/*function Form3(){

    const [status3, setStatus] = useState(true);

    return(

        <div className = "container-form3">
  
            <h1>Sou o 3 form</h1>

        </div>
    );
}

function Form4(){

    const [status4, setStatus] = useState(true);

    return(

        <div className = "container-form4">
            
            <h1>Sou o 4 form</h1>

        </div>
    );*/}
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