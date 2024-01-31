import React from "react";
import "../../components/Footer/style.css";
import Logo from "../../images/LogoHallel.png";
import { FiTwitter, FiPhone, FiMapPin } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*coluna 0*/}
          

          {/*coluna 1*/}
          <div className="col">
            <h4>Comunidade Hallel</h4>
            <hr class="linha1" />
            <ul className="list-unstyled">
              <li className="item-line-footer">
                Aparecida, Manaus - AM <br />
                222, Rua Leornado Malcher <FiMapPin className="location"/>
              </li>
              <li className="item-line-footer">
                (92) 3085-1787 <FiPhone className="phone"/>
              </li>
            </ul>
          </div>
          {/*coluna 2*/}
          <div className="col">
            <h4>Mídias Sociais</h4>
            <hr class="linha2" />
            <ul className="list-unstyled">
              <li className="item-line-footer">
                <a href="https://youtube.com/@comunidadehallel">Youtube</a>{" "}
                <AiFillYoutube class='midia'/>
              </li>
              <li className="item-line-footer">
                <a href="https://twitter.com/hallelmanaus?s=20&t=2-TK1zPnVoCOCylv9Py7QQ">
                  Twitter
                </a>{" "}
                <FiTwitter class='midia'/>
              </li>

              <li className="item-line-footer">
                <a href="https://instagram.com/comunidadehallel?igshid=YmMyMTA2M2Y=">
                  Instagram
                </a>{" "}
                <AiOutlineInstagram class='midia'/>
              </li>
              <li className="item-line-footer">
                <a href="https://m.facebook.com/375394805846479/">Facebook</a>{" "}
                <AiFillFacebook class='midia'/>
              </li>
            </ul>
          </div>
        </div>
        <hr className="linha" />
        {/*subscrito*/}
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Comunidade Católica Hallel | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
