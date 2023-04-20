import "./associado.css";
import { SlPresent } from "react-icons/sl";

function TopoConteudo(){

  return(

      <section className="conteudo-top">

          <label>Apoie a comunidade</label>

          <label>Seja um associado Hallel, faça parte dos nossos projetos, tenha acesso aos cursos, certificados e outros benefícios</label>
      </section>
  );
}

function BannerImagem(){

  return(

    <section className="imagem-top">

        <div className="containerCircular">


          <div> 
              <label>
                Seja um  membro
                <span className="verdefonte"> as</span>
                <span className="laranjafonte">so</span>
                <span className="amarelofonte">ci</span>
                <span className="vermelhofonte">a</span>
                <span className="verdefonte">do</span>
              </label>
          <label>Ajude a comunidade a continuar crescendo, seja um apoiador!</label>
          <button>Associar</button>
          </div>

        </div>
    </section>   
  );
}


  function InformacoesAssociado(){

    return(

        <section className="informacoes-associado">

            <div className="inftexto-Associado">
              Fique por dentro e receba palavras especiais.</div>
            <div className="inftexto-Associado">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
            <div className="inftexto-Associado">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, and more recently with desktop publishing software</div>
        </section>

    );
  }

  function OfertasCards(){

    return(



          <section className="containerCard">

              
              <div className="divCard" id="divcard1">

                <label id="tituloazul">Apoio Mensal</label>
                <label>9,90/mês</label>
                <hr/>

                <ul>
                  <li>Navegue no site com alguns anúncios</li>
                  <li>Nosso mais sincero agradecimento</li>
                  <li>Acesso à nossa Área de Recompensas, com vídeos no formato vlog exclusivos</li>
                </ul>
                <button>Apoiar</button>
              </div>

              <div className="divCard" id="divcard2">

                <label  id="tituloverde">Apoio Anual</label>
                <label>20,90/mês</label>
              <hr/>

                <ul>

                  <li>Navegue no site sem anúncios</li>
                  <li>Nosso mais sincero agradecimento</li>
                  <li>Acesso à nossa Área de Recompensas, com vídeos no formato vlog exclusivos</li>
                </ul>

                <button>Apoiar</button>

              </div>
            
          </section>
   

    );
  }

  function Associado(){
  
    return(
      
          <section id = "body-associado">

            <TopoConteudo/>
            <BannerImagem/>
            <InformacoesAssociado/>
            <OfertasCards/>

            <label id = "infcont">Alguma dúvida?<span> Entre em contato conosco</span></label>
          </section>
      );
  }


export default Associado;