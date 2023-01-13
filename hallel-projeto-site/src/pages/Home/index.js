import { Link } from 'react-router-dom';
import Slide from '../../components/Slide';
function Home() {
  return (

    <div>

      <Slide />

      <Link to="/Fundadora">Fundadora</Link>


      <Link to="/Sobre">Sobre nos</Link>

    </div>
  );
}

export default Home;
