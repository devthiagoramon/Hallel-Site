import React, { useState } from "react";
import "../../components/SejaAssociadoHome/associado.css";

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
          {expanded && (
            <div className="additional-content">
              <p className="text-p">Faça a diferença hoje: Sua doação à Comunidade Hallel transforma vidas e espalha alegria!</p>
              <a href="#">Saiba mais</a>
            </div>
          )}
        </div>

        <div className={`container-doacao ${expanded ? "expanded" : ""}`} onClick={toggleExpansion}>
          <span className="text-main">Seja um Associado Hallel</span>
          {expanded && (
            <div className="additional-content">
              <p className="text-p">Seja um Associado Hallel e conheça nossos eventos! Descubra como sua ajuda é fundamental.</p>
              <a href="#">Saiba mais</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SejaAssociado;
