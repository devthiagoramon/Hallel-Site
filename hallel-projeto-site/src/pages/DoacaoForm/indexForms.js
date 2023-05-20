import { useState } from "react";
import "./styles/styleDoacaoform.css";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form3a from "./form3a";

// falta terminar a lógica

function FormInterface() {
  const [estado1, setEstado1] = useState(true);
  const [estado2, setEstado2] = useState(false);
  const [estado3, setEstado3] = useState(false);
  const [estado3a, setEstado3a] = useState(false);

  function testaForm1() {
    return (
      <Form1
        setEstado1={setEstado1}
        estado1={estado1}
        setEstado2={setEstado2}
        estado2={estado2}
      />
    );
  }
  function testaForm2() {
    return (
      <Form2
        setEstado1={setEstado1}
        estado1={estado1}
        setEstado2={setEstado2}
        estado2={estado2}
        setEstado3={setEstado3}
        estado3={estado3}
      />
    );
  }
  function testaForm3() {
    return (
      <Form3
        setEstado2={setEstado2}
        estado2={estado2}
        setEstado3={setEstado3}
        estado3={estado3}
        setEstado3a={setEstado3a}
        estado3a={estado3a}
      />
    );
  }
  function testaForm4() {
    return <Form3a setEstado3a={setEstado3a} estado3a={estado3a} />;
  }

  return (
    <div className="container-DoacaoForm">
      <div className="container-right">
        <label>doações</label>

        {estado1 && testaForm1()}

        {estado2 && testaForm2()}

        {estado3 && testaForm3()}

        {estado3a && testaForm4()}
      </div>
    </div>
  );
}

export default FormInterface;
