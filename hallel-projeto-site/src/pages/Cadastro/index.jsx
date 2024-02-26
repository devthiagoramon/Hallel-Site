import "./style.css";
import React, { useState } from "react";
import Logo from "./../../images/logoHallel2.png";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { cadastrarService } from "../../service/HomeService";
import { exibirNotificacao } from "../../utils/utilNotification.tsx";
import {useNavigate} from 'react-router-dom';

export default function Cadastro() {
  const { register, handleSubmit } = useForm({ mode: "onSubmit" });
  const [showPassword, setShowPassword] = useState(false);
  const navigator = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitData = async (data) => {
    if(data.senha === data.senhaConf){
      let objRequest = {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      }
      let response = await cadastrarService(objRequest);
      if(response){
        exibirNotificacao('Cadastrado com sucesso!', 'success');
        setTimeout(() => {
          navigator('/entrar')
        }, 3000);
      }else{
        exibirNotificacao('Erro no cadastro, tente novamente!', 'error');
      }
    }else{
      exibirNotificacao("Senhas incompatíves. Preencha novamente!", 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <div className="Cadastro-master">
        <div className="logo">
          <img src={Logo} className="img" alt="logo" />
        </div>
        <div className="container-Cadastro">
          <div className="square">
            <div className="div-Cadastro">
              <h1 className="Cadastro-text">Cadastro</h1>
            </div>
            <div className="txt-input">
              <div className="txt-text-div">
                <span className="txt-text">Nome completo:</span>
              </div>
              <input {...register('nome')} type="text" placeholder="" className="txt-camp" />
            </div>

            <div className="txt-input">
              <div className="txt-text-div">
                <span className="txt-text">E-mail:</span>
              </div>
              <input {...register('email')} type="email" placeholder="" className="txt-camp" />
            </div>

            <div className="txt-input">
              <div className="txt-text-div">
                <span className="txt-text">Senha:</span>
              </div>
              <input {...register('senha')} type="password" placeholder="" className="txt-camp" />
            </div>

            <div className="txt-input">
              <div className="txt-text-div">
                <span className="txt-text">Confirmar senha:</span>
              </div>
              <input
                {...register('senhaConf')}
                type={showPassword ? "text" : "password"}
                placeholder=""
                className="txt-camp"
              />
              <InputAdornment>
                <IconButton
                  onClick={handleTogglePassword}
                  className="button-password"
                  style={{
                    marginLeft: "440px",
                    marginTop: "-40px",
                    color: "white",
                  }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            </div>

            <div>
              <button type="submit" className="button-continueC">Continuar</button>
            </div>

            <div className="register-divC">
              <p className="text-registerC">
                Já tem uma conta?
                <Link to="/entrar" className="registerC">
                  Conecte-se
                </Link>
              </p>
            </div>

            <div className="terms-divC">
              <p className="termsC">
                Ao continuar, você aceita nossos
                <br />
                <a href="#" className="register-termsC">
                  {" "}
                  Termos de condições{" "}
                </a>{" "}
                e
                <a href="#" className="register-privaceC">
                  {" "}
                  Política de privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
