import './style.css';
 import ImgPedido from "../../images/pedido.jpg";


function Pedido() {
  return (
    
    <div className='global'>
      
        <h1 id='titulo'> Pedido de oração </h1> 
        <br/>
        <img id='imgpedido' src={ImgPedido} alt = "nada"/>
        <br/> <br/> <br/>
        <p>
        Abaixo, escreva seu pedido de oração, que será levado ao altar do Senhor. Estes pedidos têm cárater reservado. Que Deus abençõe você e conforte o seu coração.
        </p>
        
        <form method="post">
    <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" />
    </div>
   
    <label id ="labelSeletor" for = "paraquem">Para quem é o pedido?</label>
    <div>
    <select name="selector" id="paraquem">
     <label>Para quem é o pedido?</label>
    <option value="selecao">Selecione</option>
    <option value="familia">Família</option>
    <option value="amigos">Amigos</option>
    <option value="conjugue">Conjugue</option>
    <option value="filhos">Filhos</option>
    </select>
    </div>
    
    <div>
        <label for="msg">Pedido:</label>
        <textarea id="msg"></textarea>
    </div>
    <div class="button">
        <button id = "bt"type="submit">Enviar</button>
    </div>
</form>
        <br/>
              
      </div>
   
  );
}
export default Pedido;
