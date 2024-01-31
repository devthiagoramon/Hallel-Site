import React, { useEffect } from "react";
import "./home_adm.css";
import { getToken } from "../../../utils/utilToken";
import { verificarTokenService } from "../../../service/HomeService";
import { useDispatch } from "react-redux";
import { atualizarToken } from "../../Entrar/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeComponent from "./HomeComponent";

const HomeAdm = () => {
  const dispacher = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    // verifica se o token ja expirou
    async function validateTokenAdm() {
      try {
        let response = await verificarTokenService(getToken());
        if (response) {
          localStorage.clear();
          dispacher(atualizarToken(""));
          navigator("/administrador/formulario");
        } else {
          setLoading(false);
        }
      } catch (error) {
        localStorage.clear();
        dispacher(atualizarToken(""));
        navigator("/administrador/formulario");
      }
    }
    validateTokenAdm();
  });

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Carregando informações...
        </div>
      ) : (
        <HomeComponent />
      )}
    </>
  );
};

export default HomeAdm;
