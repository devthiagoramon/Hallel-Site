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
      <div className="div-event">
      <hr style={{color:"black",marginTop:'170px'}}/>
      <h3 className="h3-text" style={styles.eventosHeader}>Eventos</h3>
      
      <div className="div-event-master"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: "10rem",
          paddingRight: "2rem",
          marginTop: '-80px',
          
        }}
      >

        <CarroselDestacados />
        <CarouselNaoDestacados />
      </div>
      </div>
      <Programacao />

      <div className="area-middle">
        <div className="area-cartoes-home">
          {/*<PanelAssociado /> 
          <PanelPedido />*/}
        </div>

        
      </div>
    </div>
  );
}
const styles = {
  eventosHeader: {
    fontSize: '40px',
    marginTop: '20px',
    marginLeft: '2rem',
    textAlign: 'center',
    color: '#003015',
    display: 'flexBox',

    '@media screen and (max-width: 940px)': {
      fontSize: '30px',
      marginTop: '150px',
    },
    '@media screen and (max-width: 540px)': {
      fontSize: '30px',
      marginTop: '190px',
    },
  },
};
export default Home;