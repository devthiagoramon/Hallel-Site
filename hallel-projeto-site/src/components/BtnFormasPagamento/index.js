import { MdPix } from "react-icons/md";
import { AiFillCreditCard, AiOutlineBarcode } from "react-icons/ai";
import "./button-forma-pagamento.css";

export const ButtonPix = (props) => {
  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className={
        props.isSelecionado
          ? "cont-btn-forma-pagamento btn-forma-pagamento-selecionado"
          : "cont-btn-forma-pagamento"
      }
    >
      <MdPix size={60} />
      <label className="label-doacao-hallel">Pix</label>
    </div>
  );
};

export const ButtonCartao = (props) => {
  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className={
        props.isSelecionado
          ? "cont-btn-forma-pagamento btn-forma-pagamento-selecionado"
          : "cont-btn-forma-pagamento"
      }
    >
      <AiFillCreditCard size={60} />
      <label className="label-doacao-hallel">Cartão</label>
    </div>
  );
};

export const ButtonBoleto = (props) => {
  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className={
        props.isSelecionado
          ? "cont-btn-forma-pagamento btn-forma-pagamento-selecionado"
          : "cont-btn-forma-pagamento"
      }
    >
      <AiOutlineBarcode size={60} />
      <label className="label-doacao-hallel">Boleto</label>
    </div>
  );
};
