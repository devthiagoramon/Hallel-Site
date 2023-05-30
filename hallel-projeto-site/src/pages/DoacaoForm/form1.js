import { useMemo, useState } from "react";
import "./styles/styleForm1.css";
import { Link } from "react-router-dom";

const Form1 = ({ setEstado2, estado1, setEstado1, estado2, setObjDoacao }) => {
  const [showDoacao, setShowDoacao] = useState(false);
  const [showObj, setShowObj] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  function mudarSinais() {
    return setEstado2(!estado2), setEstado1(!estado1);
  }

  function showDonation() {
    return setShowDoacao(!showDoacao);
  }

  function showObjetoDoacao() {
    setShowObj(!showObj);
  }

  function onValueChange(e) {
    return setSelectOption(e);
  }

  useMemo(() => {
    setObjDoacao(prev => {
        return {...prev, formaDoacao: selectOption};
    });
  }, [selectOption])

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

          {showDoacao && (
            <form className="formasDinheiro">
              <span>
                <selectOption />
              </span>

              <label>
                PIX
                <input
                  type="radio"
                  value="Pix"
                  name="pix"
                  checked={selectOption === "pix"}
                  onChange={() => onValueChange("pix")}
                />
              </label>

              <label>
                Cartão de Crédito
                <input
                  type="radio"
                  value="CC"
                  name="cc"
                  checked={selectOption === "cc"}
                  onChange={() => onValueChange("cc")}
                />
              </label>

              <label>
                Cartão de débito
                <input
                  type="radio"
                  value="CD"
                  name="cd"
                  checked={selectOption === "cd"}
                  onChange={() => onValueChange("cd")}
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
