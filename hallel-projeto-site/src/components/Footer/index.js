import React from 'react'
import "../../components/Footer/style.css";
import Logo from '../../images/LogoHallel.png';

function Footer(){
  
  return(
<div className = "main-footer">
  <div className = "container">
    <div className = "row">
    {/*coluna 0*/}
    <div className = "col">
    
      <img id = "logo" src = {Logo} alt = "logo"/>
    
    </div>
    
      {/*coluna 1*/}
      <div className = "col">
        <h4>Comunidade Hallel</h4>
          <ul className = "list-unstyled">
            <li>(92) 3085-1787</li>
            <li>Aparecida, Manaus - AM</li>
            <li>222, Rua Leornado Malcher</li>
          </ul>
      </div>
      {/*coluna 2*/}
       <div className = "col">
      <h4>Midias sociais</h4>
          <ul className = "list-unstyled">
            <li><a href = "https://youtube.com/@comunidadehallel">Youtube</a></li>
            <li><a href = "https://twitter.com/hallelmanaus?s=20&t=2-TK1zPnVoCOCylv9Py7QQ">Twitter</a></li>
            <li><a href = "https://instagram.com/comunidadehallel?igshid=YmMyMTA2M2Y=">Instagram</a></li>
            <li><a href = "https://m.facebook.com/375394805846479/">Facebook</a></li>
          </ul>
    </div>
    </div>
    <hr />
      {/*subscrito*/}
    <div className = "row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} Comunidade Católica Hallel | All rights reserved |
            Terms Of Service | Privacy
          </p>
    
    </div>
  </div>
</div>
 
)}

export default Footer;
