import PanelPedido from "../../components/Panels/Pedido_oracao_panel";
import PanelAssociado from "../../components/Panels/Associado_panel";
import Programacao from "../../components/SlideProg";
import Eventos from "../../components/SlideEventos";
import FacebookPlugin from "../../components/FacebookPlugin/indexFacebook.js";
import "./homepage.css";

function Home() {
  return (
    <div className="homepage">
      <div className="containerCapa">
        <section className="sectionCapa">
          <label>Seja bem-vindo(a) à Comunidade Católica Hallel</label>
        </section>
      </div>
      <Programacao />
      <PanelAssociado />
      <PanelPedido />

    </div>
  );
}
export default Home;