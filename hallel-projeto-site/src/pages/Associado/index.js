import "./associado.css";
import { SlPresent } from "react-icons/sl";

function Associado(){
  
  return(
    
        <div id = "body-associado">
        
          <h1>APOIE A COMUNIDADE</h1>
          
          <p>Seja um associado Hallel, faça parte dos nossos projetos, tenha acesso aos cursos, certificados e outros benefícios</p>
          
          <section className = "imagem-associado">
          
              <div>
                  <h2>Seja um<br/>membro<br/>associado
                  </h2>
                  
                  <p>Ajude a comunidade a continuar crescendo, seja um apoiador!</p>
                  <button>Seja um associado</button>
              </div>
          </section>
          
          <section className = "texto-associado">
          
            <h2>Fique por dentro e receba palavras especiais</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui mi, venenatis sed nunc ut, maximus finibus nulla. Ut lectus diam, commodo id tempor nec, volutpat at dui.</p>
            <p>Suspendisse potenti. Nam mollis metus eget lorem facilisis tincidunt vel a urna. Vestibulum pharetra egestas felis, at ullamcorper arcu porta sit amet. Nullam non dapibus ipsum.</p>
          
          </section>
          
          <section className = "anuncio-associado">
          
            <div>
            
              <h2>Apoio Mensal</h2>
              
              <h2>R$ 25</h2>
              
              <p><SlPresent/> Sem anúncios. Navegue no curso em vídeo sem anúncios no site.</p>
               <p><SlPresent/> Nosso mais sincero agradecimento.</p>
               <p><SlPresent/> Acesso à nossa área de recompensas, com vídeos no formato blog exclusivos.</p>
               
               <button>Apoiar Agora!</button>
            </div>
            
            <div>
               <h2>Apoio Anual</h2>
               <h2>R$ 250</h2>
               <p><SlPresent/> Sem anúncios. Navegue no curso em vídeo sem anúncios no site.</p>
               <p><SlPresent/> Nosso mais sincero agradecimento.</p>
               <p><SlPresent/> Acesso à nossa área de recompensas, com vídeos no formato blog exclusivos.</p>
               <button>Apoiar Agora!</button>
            </div>
          </section>
          
          {/*Falta anexar o link, porém não há nenhum prototipo de tela assim por ora*/}
          <p id = "duvidas-associado">Alguma dúvida? <u>Entre em contato conosco.</u></p>
        </div>
    );
}
export default Associado;