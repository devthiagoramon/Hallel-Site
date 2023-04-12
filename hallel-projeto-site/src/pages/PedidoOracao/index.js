import "./stylePedidoOracao.css";
import Form from 'react-bootstrap/Form';

export default function Pedido() {
  return (
    <div className="containerPedidoOracao">
      <label id="titulo"> Pedido de oração </label>

      <span><section className="imagem-pedido"></section></span>
  
     
      <label id="paragrafo">
        Abaixo, escreva seu pedido de oração, que será levado ao altar do
        Senhor. Estes pedidos têm cárater reservado. Que Deus abençõe você e
        conforte o seu coração.
      </label>

      <FormularioPedido/>

      <br />
    </div>
  );
}


function FormularioPedido(){

  return(

    <div className = "formularioContainerPedido">


      <Form method="post">
        <Form.Group className="mb-3 row">
          <Form.Label for="name">Nome:</Form.Label>
          <input type="text" id="name" />
        </Form.Group>
        <Form.Group className="mb-3 row">
          <Form.Label for="mail">E-mail:</Form.Label>
          <input type="email" id="mail" />
        </Form.Group>

        <Form.Label for="paraquem">
          Para quem é o pedido?
        </Form.Label>
        <Form.Group className="mb-3 row">
          <Form.Select name="selector" id="paraquem">
            <Form.Label>Para quem é o pedido?</Form.Label>
            <option value="selecao">Selecione</option>
            <option value="familia">Família</option>
            <option value="amigos">Amigos</option>
            <option value="conjugue">Conjûgue</option>
            <option value="filhos">Filhos</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 row">
          <Form.Label for="msg">Pedido:</Form.Label>
          <textarea id="msg"></textarea>
        </Form.Group>
        
          <button id="bt" type="submit">Enviar</button>
      </Form>
      </div>

  );
}
