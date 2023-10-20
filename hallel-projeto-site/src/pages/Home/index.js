import PanelPedido from "../../components/Panels/Pedido_oracao_panel";
import PanelAssociado from "../../components/Panels/Associado_panel";
import Programacao from "../../components/SlideProg";
import FacebookPlugin from "../../components/FacebookPlugin/indexFacebook.js";
import "./homepage.css";
import CarouselNaoDestacados from "../../components/CarouselNaoDestacados/indexCarousel";
import CarroselDestacados from "../../components/CarouselDestacados/CarroselDestacados";
import SlideHome from '../../components/SlideHome/slide.js'
function Home() {
  return (
    <div className="homepage">
      <SlideHome/>
      <div className="containerCapa">
        <section className="sectionCapa">
          <label>Seja bem-vindo(a) à Comunidade Católica Hallel</label>
        </section>
      </div>

      <h3 style={{marginTop: '90px', marginLeft: "2rem"}}>Eventos</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <CarroselDestacados />
        <CarouselNaoDestacados />
      </div>
      <Programacao />

      <div className="area-middle">
        <div className="area-cartoes-home">
          {/*<PanelAssociado /> 
          <PanelPedido />*/}
        </div>

        <div className="facebook-area">
          <label>Siga-nos no facebook</label>

          <FacebookPlugin />
        </div>
      </div>
    </div>
  );
}
export default Home;
