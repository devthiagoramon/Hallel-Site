import { Link } from 'react-router-dom'
import './style.css';
import Logo from '../../images/LogoHallel.png';


function Header() {

  return (

    <nav className="topbar">

      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li><a className="menu__item" href="#">Inicio</a></li>
          <li><a className="menu__item" href="#">Igreja</a></li>
          <li><a className="menu__item" href="#">Ministerios</a></li>
          <li><a className="menu__item" href="#">Agenda</a></li>
          <li><a className="menu__item" href="#">Loja</a></li>
          <li><a className="menu__item" href="#">Doacoes</a></li>
          <li><a className="menu__item" href="#">Contato</a></li>
        </ul>
      </div>
      <img id="logo" src={Logo} alt="logo" />
      <div id="space"></div>

      <div id="topicos">
        <Link to="/">Início</Link>
        <Link to="/">Igreja</Link>
        <Link to="/">Ministérios</Link>
        <Link to="/">Agenda</Link>
        <Link to="/">Loja</Link>
        <Link to="/">Doações</Link>
        <Link to="/">Contato</Link>
      </div>

      <button id="btn">Entre</button>

    </nav>
  )

}

export default Header;