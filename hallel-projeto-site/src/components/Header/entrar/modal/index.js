import React, { Component } from "react";
import ModalMensagem from "../../mensagem/modal";
import { createRoot } from "react-dom/client";

const container = createRoot(document.querySelector("#root"));

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelStyle: {
        display: "block",
        background: "rgba(0,0,0,0.8)",
      },
      indexSelect: 1,
      logar: {
        email: "",
        senha: "",
      },
      solicitação: {
        nome: "",
        email: "",
        senha1: "",
        senha2: "",
      },
    };
    this.setIndexSelect = this.setIndexSelect.bind(this);
    this.solicitarCadastro = this.solicitarCadastro.bind(this);
    this.logar = this.logar.bind(this);
    this.trocarEmail = this.trocarEmail.bind(this);
  }

  setIndexSelect(num) {
    this.setState({ indexSelect: num });
  }

  trocarEmail(e) {
    let valorDigitado = e.target.value;
    this.setState({
      logar: { email: valorDigitado, senha: this.state.logar.senha },
    });
  }

  solicitarCadastro() {
    if (this.state.solicitação.senha1 === this.state.solicitação.senha2) {
      let url = "http://localhost:8080/api/solicitarCadastro";
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch(url, {
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify({
          nome: this.state.solicitação.nome,
          email: this.state.solicitação.email,
          senha: this.state.solicitação.senha1,
        }),
      })
        .then(() => {
          let modalMensagem = (
            <ModalMensagem
              mensagem={
                "Solicitação de cadastro enviado para a administração, espere para que se torne um membro Hallel"
              }
              hide={this.props.hide}
            />
          );
         container.render(modalMensagem)
        })
        .catch((error) => {
          console.warn(error);
          let modalMensagem = (
            <ModalMensagem
              mensagem={
                "Erro na hora da solicitação de cadastro, por favor tente novamente"
              }
              hide={this.props.hide}
            />
          );
          container.render(modalMensagem);
        });
    }
  }

  logar() {
    if (this.state.solicitação.senha1 === this.state.solicitação.senha2) {
      let url = "http://localhost:8080/api/login";
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch(url, {
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify({
          email: this.state.logar.email,
          senha: this.state.logar.senha,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((object) => {
          localStorage.setItem("token", object.token);
          let modalMensagem = (
            <ModalMensagem
              mensagem={"Usuario logado com sucesso"}
              hide={this.props.hide}
            />
          );

          container.render(modalMensagem);
        })
        .catch((error) => {
          console.warn(error);
          let modalMensagem = (
            <ModalMensagem
              mensagem={"Erro na hora de logar, por favor tente novamente"}
              hide={this.props.hide}
            />
          );
          container.render(modalMensagem);
        });
    }
  }

  render() {
    return (
      <div
        className="modal show fade"
        tabindex="-1"
        style={this.state.modelStyle}
        id="Modal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  {this.state.indexSelect === 1 && (
                    <p className="nav-link active">Entrar</p>
                  )}
                  {this.state.indexSelect === 2 && (
                    <p
                      className="nav-link"
                      onClick={() => this.setIndexSelect(1)}
                    >
                      Entrar
                    </p>
                  )}
                </li>
                <li className="nav-item">
                  {this.state.indexSelect === 2 && (
                    <p className="nav-link active">Solicitar cadastro</p>
                  )}
                  {this.state.indexSelect === 1 && (
                    <p
                      className="nav-link"
                      onClick={() => this.setIndexSelect(2)}
                    >
                      Solicitar cadastro
                    </p>
                  )}
                </li>
              </ul>
            </div>
            <div className="modal-body">
              {/*LOGIN BODY*/}
              {this.state.indexSelect === 1 && (
                <div className="modal-body">
                  <form className="priForm">
                    <div className="form-outline mb-4">
                      <label className="form-label" for="forms">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="forms-email-login"
                        className="form-control"
                        onChange={this.trocarEmail}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="forms">
                        Senha
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="forms-senha-login"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({
                            logar: {
                              email: this.state.logar.email,
                              senha: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </form>
                </div>
              )}

              {/* SOLICITAR CADASTRO BODY*/}
              {this.state.indexSelect === 2 && (
                <form class="priForm">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="text">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="forms-nome-solicitarCadastro"
                      class="form-control"
                      value={this.state.solicitação.nome}
                      onChange={(e) => {
                        this.setState({
                          solicitação: {
                            nome: e.target.value,
                            email: this.state.solicitação.email,
                            senha1: this.state.solicitação.senha1,
                            senha2: this.state.solicitação.senha2,
                          },
                        });
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="forms">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="forms-email-solicitarCadastro"
                      class="form-control"
                      onChange={(e) => {
                        this.setState({
                          solicitação: {
                            nome: this.state.solicitação.nome,
                            email: e.target.value,
                            senha1: this.state.solicitação.senha1,
                            senha2: this.state.solicitação.senha2,
                          },
                        });
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="forms">
                      Digite sua senha
                    </label>
                    <input
                      type="password"
                      id="forms-senha1-solicitarCadastro"
                      class="form-control"
                      onChange={(e) => {
                        this.setState({
                          solicitação: {
                            nome: this.state.solicitação.email,
                            email: this.state.solicitação.email,
                            senha1: e.target.value,
                            senha2: this.state.solicitação.senha2,
                          },
                        });
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="forms">
                      Confirme sua senha
                    </label>
                    <input
                      type="password"
                      id="forms-senha2-solicitarCadastro"
                      class="form-control"
                      onChange={(e) => {
                        this.setState({
                          solicitação: {
                            nome: this.state.solicitação.nome,
                            email: this.state.solicitação.email,
                            senha1: this.state.solicitação.senha1,
                            senha2: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.hide}
              >
                Voltar
              </button>
              {this.state.indexSelect === 1 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.logar}
                >
                  Entrar
                </button>
              )}
              {this.state.indexSelect === 2 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.solicitarCadastro}
                >
                  Solicitar Cadasrto
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
