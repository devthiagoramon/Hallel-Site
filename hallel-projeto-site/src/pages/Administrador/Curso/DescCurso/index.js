import './styleCursoDesc.css'
import Banner from "../../../../images/fundoCardTeste.jpg";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Pretexto(){

    return(

        <div className='containerDesc-pretexto'>

            <img src= {Banner} alt = "banner"/>

            <label>Título do curso</label>


            <hr />
        </div>
    );
}

function Postexto(){

    const [modulo1_show, setModulo1_show] = useState(false);
    const [modulo2_show, setModulo2_show] = useState(false);
    const [modulo3_show, setModulo3_show] = useState(false);

    const handleMuda= ()=>{

        setModulo1_show(!modulo1_show);
    }

    const handleMuda2= ()=>{

        setModulo2_show(!modulo2_show);
    }

    const handleMuda3= ()=>{

        setModulo3_show(!modulo3_show);
    }


    return(

        <div className='containerDesc-postexto'>


        <div>
            <label id="labelTitle">Requisitos</label>

                <ul>

                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Duis facilisis mattis orci, eget lacinia est posuere sed. In hac habitasse platea dictumst.</li>
                    <li>In hac habitasse platea dictumst.</li>
                </ul>
        </div>

        <div className="conteudoCurso">
            <label id="labelTitle">Conteúdo</label>


                <div className="container-labels">

                    <label onClick={handleMuda}>Módulo 1</label>
               
                        {modulo1_show  ?
                        "" : <ul>
                        <li>Aula 1</li>
                        <li>Aula 2</li>
                        <li>Aula 3</li>
                        <li>Aula 4</li>
                        <li>Atividade</li>
                        <hr/></ul>}
                

                     <label onClick={handleMuda2}>Módulo 2</label>
               
                        {modulo2_show  ?
                        "" : <ul>
                        <li>Aula 6</li>
                        <li>Aula 7</li>
                        <li>Aula 8</li>
                        <li>Aula 9</li>
                        <li>Atividade</li>
                        <hr/></ul>}
               

                    <label onClick={handleMuda3}>Módulo 3</label>
               
                        {modulo3_show  ?
                        "" : <ul>
                        <li>Aula 10</li>
                        <li>Aula 11</li>
                        <li>Aula 12</li>
                        <li>Aula 13</li>
                        <li>Prova final</li>
                        <hr/></ul>}
                </div>
        </div>


        <div>
            <label id="labelTitle">Descrição</label>


            <label id = "textoDescCurso"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis mattis orci, eget lacinia est posuere sed. In hac habitasse platea dictumst. Nam ut felis vulputate, rutrum tortor eu, porta arcu. Nulla pretium felis ac dui semper maximus. Nam fringilla eu nisi id feugiat. Donec commodo vitae tortor et gravida.</label>

        </div>

        </div>
    );
}

function ButtonArea(){

    return(

        <div className='containerAreaButton'>

            <Link className="link" to="/administrador/cursos"><button id = 'buttonVoltarCurso'>Voltar</button></Link>

            <Link className="link" to="/administrador/cursos/editar/:idCurso"><button id = 'buttonInscricaoCurso'>Alterar</button></Link>
            
        </div>
    );
}


export default function DescCurso(){

    return(

        <div className='containerDescCurso'>

            <Pretexto/>
            <Postexto/>
            <ButtonArea/>

        </div>
    )
}