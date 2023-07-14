import { useMemo, useState } from "react";
import "./styles/styleDoacaoform.css";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form3a from "./form3a";
import axios from "axios"

function FormInterface() {
  const [estado1, setEstado1] = useState(true);
  const [estado2, setEstado2] = useState(false);
  const [estado3, setEstado3] = useState(false);
  const [estado3a, setEstado3a] = useState(false);


  // valores de base para teste
  const [doacao, setDoacao] = useState(
  {
    emailDoador: "",
    descricao: "",
    tipo: null,
    dataDoacao: new Date(),
    valorDoacao: 0
  }
  );


const postDoacao = () => {

  axios.post("http://localhost:8080/api/doacao/doar", {

    ...doacao
  },  {
    headers: {
      Authorization: localStorage.getItem("token")
      
  }
  }).then(() => {

    console.log("Doação enviada")


  }).catch((erro) => {
    
    console.log(erro)
  })
}
  function testaForm1() {
    return (
      <Form1
        setEstado1={setEstado1}
        estado1={estado1}
        setEstado2={setEstado2}
        estado2={estado2}
        doacao={doacao}
        setDoacao={setDoacao}
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
        doacao={doacao}
        setDoacao={setDoacao}
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
        doacao={doacao}
        setDoacao={setDoacao}
        postDoacao ={postDoacao}
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
