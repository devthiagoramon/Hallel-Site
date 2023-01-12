import {Link} from 'react-router-dom'
import './style.css';
import Logo from '../../images/LogoHallel.png';


function Header(){
  
  return(
    
    <nav className = "topbar">
    
    <div>
    
      <img id = "logo" src={Logo} alt = "logo"/>
      <Link to = "/">Início</Link>
    
      
     <Link to = "/">Igreja</Link>
      
      <Link to = "/">Ministérios</Link>
      <Link to = "/">Agenda</Link>
      <Link to = "/">Loja</Link>
      <Link to = "/">Doações</Link>
      <Link to = "/">Contato</Link>
     
    <button id = "btn">Entre</button>
    
    </div> 
    </nav>
    )
  
}

export default Header;