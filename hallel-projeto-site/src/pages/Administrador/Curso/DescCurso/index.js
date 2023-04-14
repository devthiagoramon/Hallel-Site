import './styleCursoDesc.css'
import Banner from "../../../../images/fundoCardTeste.jpg";

function Pretexto(){

    return(

        <div className='containerDesc-pretexto'>

            <img src= {Banner} alt = "banner"/>

            <h3>Título do curso</h3>
            <p>

                <span id = "tag">tag</span>
                <span id = "tag">tag</span>
                <span id = "tag">tag</span>
                <span id = "tag">tag</span>
                <span id = "tag">tag</span>
                <span id = "tag">tag</span>

            </p>

            <button id = "buttonInscricaoCurso">Inscreva-se</button>

            <hr />
        </div>
    );
}

function Postexto(){

    return(

        <div className='containerDesc-postexto'>


        <div>
            <h3>Você aprenderá...</h3>

                <ul>

                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Duis facilisis mattis orci, eget lacinia est posuere sed. In hac habitasse platea dictumst.</li>
                </ul>
        </div>


        <div>
            <h3>Conteúdo</h3>

                 <ul>

                    <li>Lorem ipsum dolor;</li>
                    <li>Duis facilisis mattis orci</li>
                    <li>Eget lacinia est posuere sed</li>
                    <li>In hac habitasse platea dictumst;</li>
                    <li>Quisque vel luctus arcu.</li>

                </ul>
        </div>


        <div>
            <h3>Descrição</h3>


            <p id = "textoDescCurso"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis mattis orci, eget lacinia est posuere sed. In hac habitasse platea dictumst. Nam ut felis vulputate, rutrum tortor eu, porta arcu. Nulla pretium felis ac dui semper maximus. Nam fringilla eu nisi id feugiat. Donec commodo vitae tortor et gravida.</p>

        </div>

        </div>
    );
}

function ButtonArea(){

    return(

        <div className='containerAreaButton'>

            <button id = 'buttonVoltarCurso'>←Voltar</button>

            <button id = 'buttonInscricaoCurso'>Inscrever-se</button>
            
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