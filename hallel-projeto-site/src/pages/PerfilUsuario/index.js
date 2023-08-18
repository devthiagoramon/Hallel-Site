import React, { useEffect, useMemo, useState } from "react";
import "./perfil.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { membroLoadPerfilById } from "../../api/uris/MembroURLS";
import { associadoListarPerfil } from "../../api/uris/AssociadosURLS";
import SelecionarMesesPagoAssociadoPerfil from "./SelecionarMesesPagoAssociadoPerfil";
import dayjs from "dayjs";
import CardMesSelecionado from "./CardMesSelecionado";

const PerfilRow = () => {
  return (
    <div className="secao1">
      <div></div>
    </div>
  );
};

const Info = () => {
  const [usuario, setUsuario] = useState({});

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [isAssociado, setisAssociado] = useState(false);
  const [isMembro, setIsMembro] = useState(false);
  const [mesSelecionado, setMesSelecionado] = useState(dayjs().format("MM/YYYY"));

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useMemo(() => {
    let roles = localStorage.getItem("R0l3s");
    let url = "";
    if (roles == "ROLE_USER,ROLE_ASSOCIADO") {
      url = associadoListarPerfil(localStorage.getItem("HallelId"));
      setisAssociado(true);
    } else if (roles == "ROLE_USER") {
      url = membroLoadPerfilById(localStorage.getItem("HallelId"));
      setIsMembro(true);
    }

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((object) => {
        setUsuario(object.data);
        console.log(object.data);
      })
      .catch((error) => console.warn(error));
  }, [setIsMembro, setisAssociado, setUsuario]);

  return (
    <div className="container_perfil">
      {(isAssociado || isMembro) && (
        <section className="formularioPerfil">
          <Form>
            <h2 className="tituloPerfil">Meu perfil:</h2>

            <Row className="mb-3 mt-3">
              <Form.Group type="text" as={Col}>
                <Form.Label for="inputNome">Nome:</Form.Label>
                <br />

                <Form.Control
                  id="inputNome"
                  value={usuario.nome === null ? "" : usuario.nome}
                  type="text"
                  placeholder="Nome"
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label for="inputEmail">E-mail:</Form.Label>
                <br />
                <Form.Control
                  id="inputEmail"
                  type="email"
                  placeholder="E-mail"
                  value={usuario.email === null ? "" : usuario.email}
                ></Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-3">
              <Form.Group as={Col}>
                <Form.Label for="inputTel">Telefone:</Form.Label>
                <br />
                <Form.Control
                  id="inputTel"
                  value={usuario.telefone === null ? "" : usuario.telefone}
                  type="number"
                  placeholder="(00) 00000-0000"
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label for="inputCargo">CPF:</Form.Label>
                <br />
                <Form.Control
                  id="inputCargo"
                  value={usuario.cpf === null ? "" : usuario.cpf}
                  type="text"
                  placeholder="Cargo"
                ></Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-3">
              <Form.Group as={Col}>
                <Form.Label for="inputSenha">Senha:</Form.Label>
                <br />
                <div style={{ display: "flex" }}>
                  <input
                    type={passwordType}
                    onChange={handlePasswordChange}
                    value={passwordInput}
                    name="password"
                    class="form-control"
                    placeholder="Senha"
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn btn-outline-primary"
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <i>
                          <AiOutlineEyeInvisible />
                        </i>
                      ) : (
                        <i>
                          <AiOutlineEye />
                        </i>
                      )}
                    </button>
                  </div>
                </div>
              </Form.Group>
            </Row>

            <button id="btAlterar">Alterar</button>
          </Form>
        </section>
      )}
      {isAssociado && (
        <div className="cont_perfil_associado">
          <div className="header_perfil_associado">
            <h2 className="tituloPerfil">Associação</h2>
          </div>
          <div className="body_perfil_associado">
            <label>
              Status:{" "}
              {usuario.isAssociado === "PAGO" ? (
                <span className="pago_associado">Pago</span>
              ) : (
                ""
              )}
              {usuario.isAssociado === "PENDENTE" ? (
                <span className="pendente_associado">Pendente</span>
              ) : (
                ""
              )}
            </label>
            <SelecionarMesesPagoAssociadoPerfil mesesPagos={usuario.mesesPagos} mesSelecionado={mesSelecionado} setMesSelecionado={setMesSelecionado}/>
            <CardMesSelecionado mesSelecionado={mesSelecionado} pagamentosAssociado={usuario.pagamentosAssociado}/>
          </div>
        </div>
      )}
    </div>
  );
};

function Perfil() {
  return (
    <div>
      <PerfilRow />

      <div className="forms">
        <Info />
      </div>
    </div>
  );
}

export default Perfil;
