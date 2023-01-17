import React from "react";


const ModalMensagem = (props) => {
  let modelStyle = {
    display: "block",
    background: "rgba(0,0,0,0.8)",
  };

  return (
      <div className="modal show fade" tabindex="-1" style={modelStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p>{props.mensagem}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => window.location.href = "http://localhost:3000/"}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ModalMensagem;
