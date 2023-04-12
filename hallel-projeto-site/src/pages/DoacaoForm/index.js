import './styleDoacaoform.css'
import React, {useState} from 'react';
const form1 = <Form1/>;
const form2 = <Form2/>;
const form3 = <Form3/>;
const form4 = <Form4/>;


export default function DoacaoForm(){

   

    return(

        <div className="container-DoacaoForm">

            

            <div className="container-right">

                <label>doações</label>

                <div>

                
                </div>

            </div>
        </div>
    );
}

function Form1(){

    return(

        <div className = "container-form1">


            <h1>Sou o 1 form teste</h1>

        


        </div>
    );
}

function Form2(){
    return(

        <div className = "container-form2">

            
            <h1>Sou o 2 form</h1>


        </div>
    );
}

function Form3(){
    return(

        <div className = "container-form3">

            
            <h1>Sou o 3 form</h1>


        </div>
    );
}

function Form4(){
    return(

        <div className = "container-form4">

            
            <h1>Sou o 4 form</h1>

        </div>
    );
}