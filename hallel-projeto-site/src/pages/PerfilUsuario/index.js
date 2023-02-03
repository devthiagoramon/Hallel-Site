import React, { Component, useEffect, useState } from "react";
import "./perfil.css";

class Section1 extends Component {
  render() {
    return (
      <div className="secao1">
        <a id="back">VOLTAR</a>
        <button id="foto">Alterar foto</button>
        <Section2 />
      </div>
    );
  }
}

class Section2 extends Component {
  render() {
    return (
      <div className="secao2">
        <button id="perfil">Alterar perfil</button>
      </div>
    );
  }
}

class Foto extends Component {
  render() {
    return (
      <div className="fotoPerfil">
        <h2 className="tituloFoto">FOTO</h2>
      </div>
    );
  }
}

const Info1 = () => {
  const [usuario, setUsuario] = useState({});

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
    <div id="info1">
      <h3 id="nome">NOME COMPLETO:</h3>
      <h3 id="prof">PROFISSÃO:</h3>
      <h3 id="email">EMAIL:</h3>
      <h3 id="dataNasc">DATA DE NASCIMENTO:</h3>
      <input
        id="inputNome"
        value={usuario.nome === null ? "" : usuario.nome}
      ></input>
      <input
        id="inputProf"
        value={usuario.profissao === null ? "" : usuario.profissao}
      ></input>
      <input
        id="inputEmail"
        value={usuario.email === null ? "" : usuario.email}
      ></input>
      <input
        id="inputData"
        value={usuario.dataAniversario === null ? "" : usuario.dataAniversario}
      ></input>
    </div>
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
        <Info1 />
        <Info2 />
      </div>
    );
  }
}

function Perfil() {
  return (
    <div>
      <Section1 />
      <Foto />
      <ContainerInfos />
    </div>
  );
}

export default Perfil;
