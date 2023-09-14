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
import { IconButton, Tooltip, Typography } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import MenuCalendarioSelecionar from "../Administrador/Financeiro/associados/MenuCalendarioSelecionar";
import { motion } from "framer-motion";

const PerfilRow = () => {
  return (
    <div className="secao1">
      <div></div>
    </div>
  );
};

const Info = () => {
  const [usuario, setUsuario] = useState({});
  const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [isAssociado, setisAssociado] = useState(false);
  const [isMembro, setIsMembro] = useState(false);
  const [mesSelecionado, setMesSelecionado] = useState(
    dayjs().format("MM/YYYY")
  );

  const [mesSelecionadoSorteio, setMesSelecionadoSorteio] = useState(dayjs());

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

  function handleClickAbrirMenuCalendario(e) {
    setAnchorMenuCalendario(e.currentTarget);
  }

  useMemo(() => {
    let roles = String(localStorage.getItem("R0l3s"));
    let url = "";
    if (roles.includes("ROLE_USER") && roles.includes("ROLE_ASSOCIADO")) {
      url = associadoListarPerfil(localStorage.getItem("HallelId"));
      setisAssociado(true);
    } else if (roles.includes("ROLE_USER")) {
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
        // Adiciona meses ao ultimo mês que o associado pagou
        if (roles.includes("ROLE_ASSOCIADO")) {
          let pagamentosAssociado = object.data.pagamentosAssociado;
          let dataFinalArrayMesesPagos =
            pagamentosAssociado[pagamentosAssociado.length - 1].dataPaga;
          let dataFinalInDayJs = dayjs(dataFinalArrayMesesPagos);
          let lastMes = dataFinalInDayJs;
          for (let index = 0; index < 3; index++) {
            let proximoMes = lastMes.add(1, "month");
            let objAux = {
              dataPaga: proximoMes.toDate(),
            };
            pagamentosAssociado.push(objAux);
            lastMes = proximoMes;
          }
          object.data.pagamentosAssociado = pagamentosAssociado;
        }

        setUsuario(object.data);
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
            <br />
            <label>
              Expira em:{" "}
              <span style={{ fontSize: "18px", fontWeight: 500 }}>
                {dayjs(usuario.dataExpiroAssociado).format("DD/MM/YYYY")}
              </span>
            </label>
            <SelecionarMesesPagoAssociadoPerfil
              pagamentosAssociado={usuario.pagamentosAssociado}
              mesSelecionado={mesSelecionado}
              setMesSelecionado={setMesSelecionado}
            />
            <CardMesSelecionado
              mesSelecionado={mesSelecionado}
              pagamentosAssociado={usuario.pagamentosAssociado}
            />
          </div>
          <div className="sorteio_perfil_associado">
            <div className="header_sort_perfil_assoc">
              <h3>Sorteios</h3>
              <div id="selecionar_mes_assoc_perfil_sorteios">
                <div className="cont_mes_header_selecionado">
                  <Typography variant="subtitle1">Mês selecionado</Typography>
                  <label>{mesSelecionadoSorteio.format("MM/YYYY")}</label>
                </div>
                <Tooltip title="Selecionar o mês">
                  <IconButton
                    id="btn_abrir_calendario"
                    onClick={(e) => {
                      handleClickAbrirMenuCalendario(e);
                    }}
                  >
                    <CalendarMonth
                      sx={{ color: "blue", height: "35px", width: "35px" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <MenuCalendarioSelecionar
                anchorMenuCalendario={anchorMenuCalendario}
                setAnchorMenuCalendario={setAnchorMenuCalendario}
                mesSelecionado={mesSelecionadoSorteio}
                setMesSelecionado={setMesSelecionadoSorteio}
              />
            </div>
            <div className="body_sort_perfil_assoc">
              <motion.div className="carousel">
                  
              </motion.div>
            </div>
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
