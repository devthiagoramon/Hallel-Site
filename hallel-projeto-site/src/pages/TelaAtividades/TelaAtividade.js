import "./telaAtividade.css";

const ContainerAtividade = () => {
    
    return(
        
        <div className="atividade-curso">

            <section className="list-curso-atividades">
         
                    <label>Exercícios</label>
                    <ul>
                        <li>Atividade 1</li>
                        <li>Atividade 2</li>
                        <li>Atividade 3</li>
                    </ul>

                    <label>Avaliações</label>
                    <ul>
                        <li>Prova 1</li>
                        <li>Prova 2</li>
                        <li>Prova 3</li>
                    </ul>

    
              
            </section>


            <section className = "section-painel">
            <div className="painelAtividade">

            
                <label>Visão geral</label>

                    <div className='progressAreaAtividades'>

                        <div className="barra-atividades">

                            <label>1/6 concluídas</label>

                        </div>

                        <div className="barra-atividades">

                            <label>0/54 acertos</label>

                            
                        </div>

                        <div className="barra-atividades">

                        <label>- média</label>
                            
                        </div>
                    </div>
            </div>
            </section>

    </div>
    );
}



function TelaAtividade(){

    return(

        <section className="telaAtividades-central">

            <label>Atividades</label>
            <label>Nome do Curso</label>

            <ContainerAtividade/>
        </section>
    );
}
export default TelaAtividade;