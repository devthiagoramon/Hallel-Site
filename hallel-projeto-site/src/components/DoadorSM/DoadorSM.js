import React, { useState } from "react";
import "../../components/DoadorSM/DoadorSM.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FormVoluntario from "../../pages/Evento/Voluntario/Form/formVoluntario";

function DoadorSM({ eventId }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const openForm = () => {
    window.location.href = `/formVoluntario?eventId=${eventId}`;

  };
  

  return (
    <div className="main">
      <div className="container-boxes">
        <div
          className={`container-doacao ${expanded ? "expanded" : ""}`}
          onClick={toggleExpansion}
        >
          <span className="text-main">Faça uma doação!</span>
          {!expanded && <IoIosArrowDown className="arrow" />}
          {expanded && (
            <div className="additional-content">
              <p className="text-p">
                Ajude-nos a tornar nosso próximo evento na igreja um sucesso
                com sua contribuição. Seu apoio é a chave para fortalecermos os
                momentos de fé!
              </p>
              <div className="div-link">
                <a className="link" href="/doacoes">
                  Saiba mais
                </a>
              </div>
              <IoIosArrowUp className="arrow-up" />
            </div>
          )}
        </div>

        <div
          className={`container-doacao ${expanded ? "expanded" : ""}`}
          onClick={toggleExpansion}
        >
          <span className="text-main">Seja um voluntário!</span>
          {!expanded && <IoIosArrowDown className="arrow" />}
          {expanded && (
            <div className="additional-content">
              <p className="text-p">
                Seja voluntário no próximo evento da igreja e faça a diferença
                em nossa comunidade. Sua ajuda é valiosa, e juntos construímos
                um ambiente unido e amoroso!
              </p>
              <div className="div-link">
                <button className="link" onClick={openForm}>
                  Saiba mais
                </button>
              </div>
              <IoIosArrowUp className="arrow-up" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoadorSM;
