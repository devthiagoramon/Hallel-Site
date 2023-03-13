import React, { Component } from 'react'
import "./modalPerfil.css"
import iconeProfile from "../../../../images/profile-icon.svg";
import iconeLogout from "../../../../images/logout-icon.svg"

export default class ModalPerfil extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        localStorage.clear();
        window.location.href = "http://localhost:3000/"
    }

  render() {
    return (
      <div className="ModalPerfil">
        <div className="HeaderModalPerfil">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <a>{localStorage.getItem("name")}</a>
        </div>
        <hr />
        <div className="BodyModalPerfil">
          <div className='btnPerfil'>
            <img src={iconeProfile} alt=''/>
            <button onClick={() => window.location.href = "http://localhost:3000/perfil"}>Perfil</button>
          </div>
          
        </div>
        <hr/>
        <div className="FooterModalPerfil">
            <div className='btnLogout'>
                <img src={iconeLogout} alt=""/>
                <button onClick={() => this.logout()}>Sair</button>
            </div>
        </div>
      </div>
    );
  }
}
