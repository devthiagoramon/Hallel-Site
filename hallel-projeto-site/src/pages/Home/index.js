import { Link } from "react-router-dom";
import Card_oracao from "./Cards/pedido_oracao";
import DoarPanel from "../../components/Panels/PanelDoacao";
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
      <DoarPanel />
      <Card_oracao />
    </div>
  );
}

export default Home;
