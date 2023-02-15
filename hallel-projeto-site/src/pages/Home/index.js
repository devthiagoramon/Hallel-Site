import { Link } from "react-router-dom";
import Slide from "../../components/Slide";
import Fundadora from "../Fundadora";
import Sobre from "../Sobre";
import Card_oracao from "./Cards/pedido_oracao";

function Home() {
  return (
    <div>
      <Slide />

      <Fundadora />
      
      <br />
      <Sobre />
      <br />
      <Link to="/administrador/eventos">ADMINISTRADOR: Eventos</Link>
      <br />
      <Link to="/administrador/membros">ADMINISTRADOR: Membros</Link>
      <br />

      <Card_oracao/>

    </div>
  );
}

export default Home;
