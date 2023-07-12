import { useMemo, useState } from "react";
import "./styles/styleForm2.css";

const Form2 = ({
  setEstado1,
  estado1,
  setEstado2,
  estado2,
  setEstado3,
  estado3,
  setDoacao,
}) => {
  function mudarSinais(e) {
    if (e == 1) {
      return setEstado2(!estado2), setEstado3(!estado3);
    } else {
      return setEstado1(!estado1), setEstado2(!estado2);
    }
  }

  return (
    <section className="container-form2">
      <div className="breadNav">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>


     {/* o input do valor */}
      <form className="inserirPag">
        <label>Digite a sua quantia:</label>
        <input
          id="valorPreço"
          type="number"
          placeholder="R$ 0,00"
          onChange={(e) =>{
            setDoacao(prevState =>{
              return{... prevState, valorDoacao: e.target.value}
            })
          }}
        />
      </form>

      <div className="button-area">
        <button onClick={() => mudarSinais(0)}>Voltar</button>
        <button id="avancaButton" onClick={() => mudarSinais(1)}>
          Avançar
        </button>
      </div>
    </section>
  );
};
export default Form2;
