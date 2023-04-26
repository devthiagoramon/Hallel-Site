import React, { Component, useEffect, useState } from "react";
import "./perfil.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Section1(){
    return (

      <div className="secao1">

          <div className="perfil"></div>
      </div>
    )
}

const Info = () => {
  const [usuario, setUsuario] = useState({});

  const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

  useEffect(() => {
    let url =
      "http://localhost:8080/api/membros/perfil?nome=" +
      localStorage.getItem("name") +
      "&email=" +
      localStorage.getItem("email");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));
    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((response) => response.json())
      .then((object) => {
        setUsuario(object);
      })
      .catch((error) => console.warn(error));
  });

  return (

    <section className="formularioPerfil">
    <Form>

      <label className= "tituloPerfil">Meu perfil:</label>

    
      <Row className="mb-3">

      
        <Form.Group type="text" as={Col} controlId = "formGridNome">
      
        <Form.Label for="inputNome">Nome:</Form.Label>
        <br/>
            
        <Form.Control
          id="inputNome"
          value={usuario.nome === null ? "" : usuario.nome}
          type = "text"
          placeholder="Nome"
        ></Form.Control>
      
        </Form.Group>    

        <Form.Group as = {Col} controlId = "formGridEmail">
        <Form.Label for ="inputEmail">E-mail:</Form.Label>
        <br/>
        <Form.Control
          id="inputEmail"
          type="email"
          placeholder="E-mail"
          value={usuario.email === null ? "" : usuario.email}
        ></Form.Control>
      </Form.Group>
      </Row>


     <Row className="mb-3">

        <Form.Group as = {Col} controlId = "formGridTel">


        <Form.Label for="inputTel">Telefone:</Form.Label>
        <br/>
        <Form.Control
          id="inputTel"
          value={usuario.telefone === null ? "" : usuario.telefone}
          type="number"
          placeholder="(00) 00000-0000"
        ></Form.Control>
      
        </Form.Group>
        
        <Form.Group as = {Col} controlId = "formGridCargo">
        <Form.Label for="inputCargo">Cargo:</Form.Label>
        <br/>
        <Form.Control
          id="inputCargo"
          value={usuario.cargo === null ? "" : usuario.cargo}
          type = "text"
          placeholder="Cargo"
        ></Form.Control>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      
      <Form.Group as = {Col} controlId = "formGridSenha">
      <Form.Label for = "inputSenha">Senha:</Form.Label>
      <br/>
      {/*<Form.Control
        id="inputSenha"
        value={usuario.senha === null ? "" : usuario.senha}
        type = "password"

      ></Form.Control> */}

      <div style={{display:"flex"}}><input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Senha"/>
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? 
                     <i><AiOutlineEyeInvisible/></i> 
                    :<i><AiOutlineEye/></i> }
                     </button>
                     </div>
                     </div>
                     
      </Form.Group>
   
      </Row>

      <button id = "btAlterar"></button> 
   
    
    </Form>
    </section>
  );
};
class Info2 extends Component {
  render() {
    return <div id="info2"></div>;
  }
}

class ContainerInfos extends Component {
  render() {
    return (
      <div id="containerInfos">
        <h1 id="meuPerfil">Meu perfil</h1>
        <h1 id="info">Mais informação</h1>
        <a id="linha"></a>
       
        <Info2 />
      </div>
    );
  }
}

function Perfil() {
  return (
    <div>
      <Section1 />

      <div className="forms">

      <Info/>
      </div>      
      
    </div>
  );
}

export default Perfil;