import { Link } from "react-router-dom";
import Slide from "../../components/Slide";

function Home() {
  return (
    <div>
      <Slide />

      <Link to="/Fundadora">Fundadora</Link>
      <br />
      <Link to="/Sobre">Sobre nos</Link>
      <br />
      <Link to="/administrador/eventos">ADMINISTRADOR: Eventos</Link>
      <br />
      <Link to="/administrador/eventos">ADMINISTRADOR: Membros</Link>
      <br />
    </div>
  );
}

export default Home;
