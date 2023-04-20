import "./style.css";
import { Link } from "react-router-dom";

function pedido_oracao() {
  return (

    <div className="pedido-container">

      <div className="container-imagem">
        
        <img src="https://www.basilicacoracaodemaria.com/area/img/noticias/6f7757f890370ad6cd8c9d062b5bac4c.jpg"></img>
        
        </div>  

        <div className="info-conteudo">

          <label>Pedido de oração</label>
          <label>Resgatando almas para Deus através do louvor, da formação e do Amor por excelência.</label>
          <button>  <Link id="textBt" to="/associado">Enviar</Link>
        </button>

        </div>
    </div>
  );
}

export default pedido_oracao;