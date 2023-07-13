import {useState } from "react";
import "./styles/styleForm1.css";
import { Link } from "react-router-dom";

const Form1 = ({ setEstado2, estado1, setEstado1, estado2, setDoacao, doacao }) => {
  const [showDoacao, setShowDoacao] = useState(false);
  const [showObj, setShowObj] = useState(false);

  function mudarSinais() {

    console.log("doacao.tipo: "+doacao.tipo)
    return setEstado2(!estado2), setEstado1(!estado1);
  }

  function showDonation() {
    return setShowDoacao(!showDoacao);
  }

  function showObjetoDoacao() {
    setShowObj(!showObj);
  }

  function onRadioChange (e) {
       setDoacao({
      tipo: null
    });
  }

  function elementos() {
    return (
      <section className="container-form1">
        <div className="breadNav">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>

        <label>Selecione a sua forma de doação</label>

        <div className="forms1">
          <button onClick={showDonation}>Dinheiro</button>


          {/* eu estava tentando atribuir os radios no 'doacao', mas deu b.o. vou verificar dps */}
          {showDoacao && (
            <form className="formasDinheiro">

              <label>
                PIX
                <input
                  type="radio"
                  value="Dinheiro"
                  name="pix"
                  checked={doacao.tipo === "pix"}
                  onChange={onRadioChange}
                />
              </label>

              <label>
                Cartão de Crédito
                <input
                  type="radio"
                  value="Dinheiro"
                  name="credito"
                  checked={doacao.tipo === "credito"}
                  onChange={onRadioChange}
                />
              </label>

              <label>
                Cartão de débito
                <input
                  type="radio"
                  value="Dinheiro"
                  name="debito"
                  checked={doacao.tipo === "debito"}
                  onChange={onRadioChange}
                />
              </label>
            </form>
          )}

          <hr />
          <button onClick={showObjetoDoacao}>Objetos/Alimentos</button>
          {showObj && (
            <>
              <label id="objLabel">
                Acesse <span>aqui</span> para doar objetos/alimentos
              </label>
              {/*evento on Clique*/}
            </>
          )}
          <hr />
        </div>

        <div className="button-area">
          <button onClick={mudarSinais}>
            <Link to="/">Home</Link>
          </button>
          <button id="avancaButton" onClick={mudarSinais}>
            Avançar
          </button>
        </div>
      </section>
    );
  }
  return elementos();
};

export default Form1;
