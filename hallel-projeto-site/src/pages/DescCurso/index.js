import './descCurso.css'
import CapaCurso from '../../images/capacurso.png'
import Icon1 from '../../images/icon1.png'
import Icon2 from '../../images/icon2.png'
import Icon3 from '../../images/icon3.png'
import Icon4 from '../../images/icon4.png'



function DescCurso() {
    return (
        

        <div className='containerDescCurso'>

            <section className="conteudo-topo">
                <h1>
                    Curso de Liturgia
                </h1>
                <p>
                    Assista as aulas e tenha acesso aos módulos especiais, com exercícios e material exclusivo!
                </p>
            </section>

            <div className='left'>

                <section className="conteudo-curso">
                    <h2> O que você irá aprender: </h2>

                    <ul>
                        <li> Nam suscipit turpis vel diam vestibulum, at volutpat. </li>
                        <li> Mauris quis nisi vestibulum, mollis risus vel, dapibus lorem. </li>
                        <li> Aenean non est consequat, aliquet ipsum ac, pellentesque velit. </li>
                    </ul>

                    <h2> Conteúdo e materiais: </h2>

                    <div id='modulo'> <label> MÓDULO 1 </label> </div>
                    <ul>
                        <li> AULA 01 - TEMA 01 </li>
                        <li> AULA 02 - TEMA 02 </li>
                        <li> MATERIAL AULA 02 </li>
                        <li> AULA 03 - TEMA 03 </li>
                        <li> AULA 04 - TEMA 04 </li>
                        <li> TESTE DE CONHECIMENTO </li>
                    </ul>

                    <div id='modulo'> <label> MÓDULO 2 </label> </div>
                    <ul>
                        <li> AULA 01 - TEMA 01 </li>
                        <li> AULA 02 - TEMA 02 </li>
                        <li> MATERIAL AULA 02 </li>
                        <li> AULA 03 - TEMA 03 </li>
                        <li> AULA 04 - TEMA 04 </li>
                        <li> TESTE DE CONHECIMENTO </li>
                    </ul>
                    <h2> Descrição: </h2>
                    <p>
                        Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico.
                        Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura
                        latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney
                        College na Virginia, pesquisou uma das mais obscuras palavras em latim...
                    </p>

                </section>

            </div>

            <div className='right'>

                <img src={CapaCurso} alt= "capa do curso" className='cart-image'/>

                <section className='capacurso-infos'>
                    <img src={Icon1} alt='icone 1' className='icones' id='icone1'/>
                    <p id='txt-icon1'> 12h de duração </p> <br/>

                    <img src={Icon2} alt='icone 2' className='icones'id='icone2'/> 
                    <p id='txt-icon2'> 05 materias disponíveis para download </p> <br/>

                    <img src={Icon3} alt='icone 3' className='icones' id='icone3' /> 
                    <p id='txt-icon3' > 03 testes de conhecimento </p> <br/>

                    <img src={Icon4} alt='icone 4' className='icones' id='icone4'/> 
                    <p id='txt-icon4'> Certificado assinado pelo professor </p>

                    <button className='button' id='button1'> MATRICULAR-ME </button>
                    <button className='button' id='button2'> ADICIONAR AOS FAVORITOS </button>
                </section>

            </div>

        </div>

    );

}

export default DescCurso;