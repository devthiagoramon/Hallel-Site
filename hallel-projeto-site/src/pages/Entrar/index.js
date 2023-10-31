import React, { useState } from "react";
import Logo from "./../../images/logoHallel2.png";
import "./entrar.css";
import { IconButton, InputAdornment } from '@mui/material';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginService } from "../../service/HomeService";

function Entrar() {
  const [login, setLogin] = useState({
    email: "",
    senha: ""
  });
  let navigator = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChangeInputLogin = (e) => {
    setLogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  }

  function entrar() {
    loginService(login).then((response) => {
      if (!response) {
        setTimeout(() => {
        }, 3000);
        return;
      }
      let rolesName = [];
      localStorage.setItem("token", response.token);
      localStorage.setItem("HallelId", response.objeto.id);
      localStorage.setItem("HallelEmail", response.objeto.email);
      response.objeto.roles.map((role) => {
        rolesName.push(role.name);
      });
      localStorage.setItem("R0l3s", rolesName);
      setTimeout(() => {
        navigator("/");
      }, 3000);
    })
  }

  const handleTogglePassword = () => {
    setShowPassword(true);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  return (
    <div className='login-master' style={{ width: "100vw", position: 'relative' }}>
      <div className='logo'>
        <img src={Logo} className='img' alt='logo' />
      </div>
      <div className='container-login'>
        <div className='quadrado'>
          <div className='div-login'>
            <h1 className='login-text' style={{marginTop:'5%'}}>Login</h1>
          </div>
          <div className='email-input'>
            <div className='email-text-div'>
            <span className='email-text email-label'>E-mail:</span>
              <input type='text' placeholder='' name="email" className='email-camp'
              onChange={handleChangeInputLogin} />
            </div>
            <div className='email-text-div'>
              <span className='email-text email-label' style={{marginTop:'1rem'}}>Senha:</span>
            </div>
            <input style={{marginTop:'-5%'}} type={showPassword ? 'text' : 'password'} placeholder='' className='email-camp' name="senha"
              onChange={handleChangeInputLogin} />
            <InputAdornment>
              <IconButton onClick={handleTogglePassword} className='button-password'
                style={{ color: 'white', marginLeft:'30rem' }}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          </div>
          <div className='remember-div'>
            <label className='remember'>
              <input type="checkbox" checked={rememberMe} onChange={handleRememberMe}
                style={{ marginTop: '19px' }} /> Lembre-me</label>
          </div>
          <div>
            <a href="#" className='forget-password' style={{ marginTop: '-22px', display: 'block' }}> Esqueceu sua
              senha?</a>
          </div>
          <div className="div-button">
            <button className='button-continue' onClick={entrar} style={{textAlign:'center'}}>Continuar</button>
          </div>
          <div className='register-div'>
            <p className='text-register'>Não tem uma conta?
              <a className='register' href="/solicitarCadastro">Solicite seu cadastro </a>
            </p>
          </div>
          <div className='terms-div'>
            <p className='terms'>Ao continuar, você aceita nossos
              <br />
              <a href="#" className='register-terms'> Termos de condições </a> e
              <a href="#" className='register-privace'> Política de privacidade</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrar;
