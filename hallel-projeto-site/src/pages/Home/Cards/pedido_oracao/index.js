import "./style.css";
function pedido_oracao() {
  return (
    <div className="pedido-container">

        <div className="pedido-imagem">
          
            <img
                      id="imagem"
                      src="https://www.basilicacoracaodemaria.com/area/img/noticias/6f7757f890370ad6cd8c9d062b5bac4c.jpg"
                      alt="Pedido_img"
                    />
        </div>

        <div className="pedido-info">
            <h1>Pedido Oração</h1>
            <p>Resgatando almas para Deus através do louvor,<br/>da formação e do Amor por excelência.</p>
            <button>Entrar</button>
        </div>

    </div>
  );
}

export default pedido_oracao;