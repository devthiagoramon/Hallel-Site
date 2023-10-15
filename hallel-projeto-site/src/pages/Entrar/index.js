import React from "react";
import Logo from "./../../images/logoHallel2.png";
import "./entrar.css";
import { useState } from "react";
import PopUpMensagem from "../../components/popUpMensagem";
import { homeLogin } from "../../api/uris/HomeUris";
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Entrar() {
  const [emailInput, setEmail] = useState();
  const [senhaInput, setSenha] = useState();

  const [isValid, setisValid] = useState(null);
  const [isValidError, setisValidError] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMe = (event) => {
        setRememberMe(event.target.checked);
    };

    const [showCadastro, setShowCadastro] = useState(false);

    const handleShowCadastro = () => {
        setShowCadastro(true);
    };

  function entrar() {
    setisLoading(true);
    let url = homeLogin();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        senha: senhaInput,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((object) => {
        let rolesName = [];

        console.log(object);

        localStorage.setItem("token", object.token);
        localStorage.setItem("HallelId", object.objeto.id);
        object.objeto.roles.map((role) => {
          rolesName.push(role.name);
        });
        localStorage.setItem("R0l3s", rolesName);
        setisValid(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setisValid(false);
        setisValidError(true);
        setTimeout(() => {
          setisLoading(false);
        }, 3000);
      });
  }

  const handleClose = () => {
    setisValid(null);
    setisValidError(false);
  };

  return (
    <div className='login-master'>
            <div className='logo'>
                <img src={Logo} className='img' alt='logo' />
            </div>
            <div className='container-login'>
                <div className='quadrado' />
                <div className='div-login'>
                    <h1 className='login-text'>Login</h1>
                </div>
                <div className='email-input'>
                    <div className='email-text-div'>
                        <span className='email-text'>E-mail:</span>
                    </div>
                    <input type='text' placeholder='' className='email-camp' />
                </div>
                <div className='email-input'>
                    <div className='email-text-div'>
                        <span className='email-text' >Senha:</span>
                    </div>
                    <input type={showPassword ? 'text' : 'password'} placeholder='' className='email-camp' />
                    <InputAdornment>
                        <IconButton onClick={handleTogglePassword} className='button-password' style={{ marginLeft: '1310px', marginTop: '-35px', color: 'white' }}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                </div>
                <div className='remember-div'>
                    <label className='remember'>
                        <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} style={{ marginTop: '19px' }} /> Lembre-me</label>
                </div>

                <div>
                    <a href="#" className='forget-password' style={{ marginTop: '-22px', display: 'block' }}> Esqueceu sua senha?</a>
                </div>

                <div>
                    <button className='button-continue'>Continuar</button>
                </div>

                
                <div className='register-div'>
                    <p className='text-register'>Não tem uma conta?
                    <a className= 'register' href="/solicitarCadastro">Solicite seu cadastro </a>
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
  );
}

export default Entrar;
