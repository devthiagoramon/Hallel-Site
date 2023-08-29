import PanelPedido from "../../components/Panels/Pedido_oracao_panel";
import PanelAssociado from "../../components/Panels/Associado_panel";
import Programacao from "../../components/SlideProg";
import Eventos from "../../components/SlideEventos";
import FacebookPlugin from "../../components/FacebookPlugin/indexFacebook.js";
import "./homepage.css";
import Carrosel from "../../components/Carousel/indexCarousel";

function Home() {
  return (
    <div className="homepage">
      <div className="containerCapa">
        <section className="sectionCapa">
          <label>Seja bem-vindo(a) à Comunidade Católica Hallel</label>
        </section>
      </div>

      <div style={{display:"flex", justifyContent: "center"}}>
      <Carrosel/>
      </div>
      <Programacao />

      <div className="area-middle">

        <div className="area-cartoes-home">

            <PanelAssociado />
            <PanelPedido />
        </div>


        <div className="facebook-area">

          <label>Siga-nos no facebook</label>

          <FacebookPlugin/>
        </div>
                
      </div>
    </div>
  );
}
export default Home;