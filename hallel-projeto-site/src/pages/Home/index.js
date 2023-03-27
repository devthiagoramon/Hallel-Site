import { Link } from "react-router-dom";
import Slide from "../../components/Slide";
import Card_oracao from "./Cards/pedido_oracao";
import DoarPanel from "../../components/Panels/PanelDoacao"
import Programacao from "../../components/SlideProg"
import Eventos from "../../components/SlideEventos"

function Home() {
  return (
    <div>
      <Slide />
  
      <br />
      <Link to="/administrador/eventos">ADMINISTRADOR: Eventos</Link>
      <br />
      <Link to="/administrador/membros">ADMINISTRADOR: Membros</Link>
      <br />

      
      <Eventos/>
      <Programacao/>
      <DoarPanel/>
      <Card_oracao/>

    </div>
  );
}
export default Home;