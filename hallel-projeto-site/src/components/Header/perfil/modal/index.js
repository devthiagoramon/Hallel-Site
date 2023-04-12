import React, { Component } from 'react'
import "./modalPerfil.css"
import iconeProfile from "../../../../images/profile-icon.svg";
import iconeLogout from "../../../../images/logout-icon.svg"
import { AccountCircle } from '@mui/icons-material';

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
          <AccountCircle/>
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
