import React from 'react'
import "./FormEvent.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';
const FormEvento = () => {
    return (
        <div className="main">
            <div className="topoSec">
                    <a className="um">Formulario de inscrição para (Nome do Evento)</a>
            </div>
            <div className="cont-form">
                <div className="div1">
                    <div>
                            Nome:
                            <br></br>
                            <input type="text"/>
                    </div>
                    <div>
                            Cpf:
                            <br></br>
                            <input type="text"/>
                    </div>
                    <div>
                            Email:
                            <br></br>
                            <input type="text"/>                        
                    </div>
                    <div className="divBotoes">
                        <br></br>
                        <button id="btnApagar">Apagar informações</button>
                        <button id="btnEnviar">Enviar</button>
                    </div>
                </div>
                <div className="div2">
                    
                </div>

            </div>
        </div>
    )
}

export default FormEvento;