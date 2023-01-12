import '../Sobre/style.css';
import Img from '../../images/LogoHallel.png';

function Sobre() {
  return (
    <div>
      
      
        <h2 id = "qm">QUEM SOMOS</h2> 
      <div className = "sobre">
      
     
    <div className = "componente">
     
      <img id = "imgLogo"src = {Img} alt = "sobre"/>
      
      <div className = "texto">
        
<p className="frase-principal" > Com o chamado a resgatar almas para Deus através do louvor, da formação e do Amor por excelência, 
            somos uma Comunidade de leigos que buscam, na realidade do Evangelho, viver sua fé.</p>

          <br/> <br/>
          <p> Nossa história começou a partir do Ministério de Música Hallel, e estava a serviço da RCC desde 1988.
            Na coordenação do Ministério, Clenir Viana Guimarães, atendeu ao chamado que Deus suscitou em seu coração, para 
            dar início a um grupo de oração e mais tarde no desejo de ir além, nascia a Comunidade Católica Hallel. </p>
            <br/>
            <p> Em um mundo de guerra, ódio, violência, somos chamados a ser anunciadores do amor incondicional de Deus pela
               humanidade através de nossas vidas e do acolhimento daqueles que necessitam, resgatando o ser humano na sua dignidade, 
               no seu amor próprio (amar a si mesmo - auto-estima) e principalmente no relacionamento com Deus (amá-Lo sobre todas as 
               coisas), pois quem se sente amado é capaz de amar. </p>
               <br/>
              <p> A dimensão do resgate é na totalidade daquilo que o ser humano é corpo 
               e espírito, isso envolve o seu ser social, psíquico e espiritual. Acreditamos que a partir do conhecimento e da amizade 
               com Deus, o ser humano vai se abrindo a sua graça e sendo capaz de se tornar um resgatador de outras almas. Assim ajudaremos
              na educação humana e espiritual transformando o mundo em lugar de amor.</p> 
              <h2> Conheça mais profundamente nossa Comunidade acessando as demais páginas! </h2>
      </div>
      
    </div>
    </div>
      
 
    </div>
    
  );
}

export default Sobre;
