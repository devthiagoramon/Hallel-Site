import React, { useState } from "react";
import "../../components/SejaAssociadoHome/associado.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SejaAssociado() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="main">
      <div className="container-boxes">
        <div className={`container-doacao ${expanded ? "expanded" : ""}`} onClick={toggleExpansion}>
          <span className="text-main">Faça uma doação</span>
          {!expanded && <IoIosArrowDown className="arrow"/>}
          {expanded && (
            <div className="additional-content">
              <p className="text-p">Faça a diferença hoje: Sua doação à Comunidade Hallel transforma vidas e espalha alegria!</p>
              <div  className="div-link">
              <a className="link" href="/doacoes">Saiba mais</a>
              </div>
              <IoIosArrowUp className="arrow-up"/>
            </div>
          )}
        </div>

        <div className={`container-doacao ${expanded ? "expanded" : ""}`} onClick={toggleExpansion}>
          <span className="text-main">Seja um Associado Hallel</span>
          {!expanded && <IoIosArrowDown className="arrow"/>}
          {expanded && (
            <div className="additional-content">
              <p className="text-p">Seja um Associado Hallel e conheça nossos eventos! Descubra como sua ajuda é fundamental.</p>
              <div  className="div-link">
              <a className="link" href="#">Saiba mais</a>
              </div>
              <IoIosArrowUp className="arrow-up"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SejaAssociado;
