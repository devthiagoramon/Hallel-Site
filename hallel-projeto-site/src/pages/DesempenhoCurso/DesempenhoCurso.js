import "./desempenhoUser.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const PanelDesempenho = () => {
  return (
    <div className="painelDesempenho">
      <label>Caminhada</label>

      <div className="progressArea">
        <ProgressBar variant="progresso1" now={60} label={`${60}% concluído`} />
        <ProgressBar variant="progresso2" now={95} label={`${95}% concluído`} />
        <ProgressBar
          variant="progresso3"
          now={100}
          label={`${100}% concluído`}
        />
      </div>
    </div>
  );
};

const SessaoTop = () => {
  return (
    <div className="SessaoTopDesempenho">
      <label>Nome do Curso</label>

      <PanelDesempenho />
    </div>
  );
};

const SessaoMeio = () => {
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="SessaoMeioDesempenho">
      <div className="modulos-container">
        <label>Conteúdo</label>

        <div>
          <label>Módulo 1</label>
          <ul>
            <li>Aula 1</li>
            <li>Aula 2</li>
            <li>Aula 3</li>
            <li>Aula 4</li>
            <li>Aula 5</li>
            <li>Aula 6</li>
          </ul>
        </div>

        <div>
          <label>Módulo 2</label>
          <ul>
            <li>Aula 7</li>
            <li>Aula 8</li>
            <li>Atividade</li>
            <li>Aula 9</li>
            <li>Aula 10</li>
            <li>Prova</li>
          </ul>
        </div>
      </div>
      <div className="anotacoes-container">
        <Modal
          closeTimeoutMS={200}
          className="modall"
          transparent
          overlayClassName="modal-over"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal de exemplo"
        >
          <div className="modal-anotacoes">
            <label>Aula 1</label>

            <div className="list-anotacoes">
              <label>Anotações</label>

              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>

            <div className="bottom-area">
              <u>
                <span>Ir à videoaula</span>
              </u>
              <button className="btmodal" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </Modal>

        <label>Anotações</label>

        <ul>
          <li onClick={showModal}>Aula 3</li>

          <li onClick={showModal}>Aula 4</li>
          <li onClick={showModal}>Aula 9</li>
        </ul>
      </div>
    </div>
  );
};

function DesempenhoUser() {
  return (
    <section className="sessaoDesempenhoUser">
      <SessaoTop />

      <SessaoMeio />

      <Link to="/atividades">
        <button id="botaoatividade">Visualizar atividades</button>
      </Link>
    </section>
  );
}
export default DesempenhoUser;
