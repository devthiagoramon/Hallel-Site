import { Link } from "react-router-dom";
import PanelPedido from "../../components/Panels/Pedido_oracao_panel";
import PanelAssociado from "../../components/Panels/Associado_panel";
import Programacao from "../../components/SlideProg";
import Eventos from "../../components/SlideEventos";
import "./homepage.css";

function Home() {
  return (
    <div className="homepage">
      <div className="containerCapa">
        <section className="sectionCapa">
          <label>Seja bem-vindo(a) à Comunidade Hallel</label>
        </section>
      </div>

      <br />
      <Link to="/administrador/eventos">ADMINISTRADOR: Eventos</Link>
      <br />
      <Link to="/administrador/membros">ADMINISTRADOR: Membros</Link>
      <br />
      <Link to="/administrador/painelFinanceiro">
        ADMINISTRADOR: Painel Financeiro
      </Link>
      <Eventos />
      <Programacao />
      <PanelAssociado />
      <PanelPedido />
    </div>
  );
}
export default Home;