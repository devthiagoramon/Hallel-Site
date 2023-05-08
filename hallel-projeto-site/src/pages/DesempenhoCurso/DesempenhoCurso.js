import './desempenhoUser.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PanelDesempenho = () =>{

    return(

    <div className='painelDesempenho'>
        <label>Caminhada</label>

        <div className='progressArea'>
        <ProgressBar variant='progresso1'  now={60} label={`${60}% concluído`} />
        <ProgressBar variant='progresso2' now={95}  label={`${95}% concluído`} />
        <ProgressBar  variant='progresso3' now={100}  label={`${100}% concluído`} />
        </div>
    </div>

    );
}

const SessaoTop = () =>{

    return(

    <div className='SessaoTopDesempenho'>

        <label>Nome do Curso</label>

        <PanelDesempenho/>
    </div>
    )
}

const SessaoMeio = () =>{ 

    return(

    <div className='SessaoMeioDesempenho'>

        <div className='modulos-container'>
            <label>Conteúdo</label>

            <div>
                <label>Módulo 1</label>
                <ul>
                    <li>Aula 1</li>
                    <li>Aula 2</li>
                    <li>Aula 3</li>
                    <li>Aula 4</li>
                    <li>Aula 5</li>
                    <li>Aula 6</li>
                </ul>
            </div>

            <div>
                <label>Módulo 2</label>
                <ul>
                    <li>Aula 7</li>
                    <li>Aula 8</li>
                    <li>Atividade</li>
                    <li>Aula 9</li>
                    <li>Aula 10</li>
                    <li>Prova</li>
                </ul>
            </div>

            

        </div>
        <div className='anotacoes-container'>


            <label>Anotações</label>

            <ul>
                <li>Aula 3</li>
                <li>Aula 4</li>
                <li>Aula 9</li>
            </ul>

        </div>
    </div>
    );
}

function DesempenhoUser(){

    return(

        <section className='sessaoDesempenhoUser'>

            <SessaoTop/>
            <SessaoMeio/>

        </section>
    );
}
export default DesempenhoUser;