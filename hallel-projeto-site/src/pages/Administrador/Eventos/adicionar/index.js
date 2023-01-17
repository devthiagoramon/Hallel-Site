import React, { Component } from "react";
import { IMaskInput } from "react-imask";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Evento: {
        title: "",
        subtitle: "",
        public: "",
        locale: "",
        date: "",
      },
    };

    this.conteudo = this.conteudo.bind(this);
    this.onFileSelected = this.onFileSelected.bind(this);
    this.publicarEvento = this.publicarEvento.bind(this);
  }

  conteudo(e) {
    let evento = this.state.Evento;
    evento[e.target.name] = e.target.value;
    this.setState({ Evento: evento });
  }

  onFileSelected(e) {
    var selectedFile = e.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("prev");
    imgtag.title = selectedFile.name;

    reader.onload = function (e) {
      imgtag.src = e.target.result;
    };

    reader.readAsDataURL(selectedFile);
  }

  publicarEvento() {
    if (this.state.title === "") {
      return;
    }
    if (this.state.subtitle === "") {
      return;
    }
    if (this.state.locale === "") {
      return;
    }

    let url = "http://localhost:8080/api/eventos/create";

    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({
        titulo: this.state.Evento.title,
        descricao: this.state.Evento.subtitle,
        local: "Local 1",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        window.location.href = "http://localhost:3000/administrador/eventos";
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <h1 id="n">Eventos</h1>

        <section id="container-event">
          <div id="adm">
            <div id="cont-input">
              <input
                id="insert_title"
                name="title"
                value={this.state.Evento.title}
                onChange={this.conteudo}
                placeholder="Adicionar título"
              />
            </div>

            <ul>
              <li>
                <IMaskInput
                  id="selec_date"
                  name="date"
                  mask="00/00/0000 às 00:00"
                  value={this.state.Evento.date}
                  onChange={this.conteudo}
                  placeholder="Definir data e hora"
                />
              </li>

              <li>
                <select
                  name="public"
                  id="selec_pub"
                  value={this.state.Evento.public}
                  onChange={this.conteudo}
                >
                  <option value="default" selected hidden>
                    {" "}
                    Publico Direcionado{" "}
                  </option>
                  <option value="Publico 1"> Publico 1 </option>
                  <option value="Publico 2"> Publico 2 </option>
                </select>
              </li>

              <li>
                <select>
                  <option value="default" selected hidden>
                    {" "}
                    Adicionar Local{" "}
                  </option>
                  <option value="0"> Local 1 </option>
                  <option value="1"> Local 2 </option>
                </select>
              </li>

              <li>
                <input
                  value={this.state.Evento.subtitle}
                  name="subtitle"
                  onChange={this.conteudo}
                  id="insert_sub"
                  placeholder="Adicionar Descrição"
                ></input>
              </li>
              <li>
                <label for="arquivo" id="fileimg">
                  Adicionar Anexos
                </label>
                <input
                  type="file"
                  id="arquivo"
                  onChange={this.onFileSelected}
                />
              </li>

              <button id="publish" onClick={this.publicarEvento}>
                Publicar
              </button>
            </ul>
          </div>

          <div id="content">
            <div id="conteste">
              <img id="prev" alt="prev" />
              <p id="pub">
                {this.state.Evento.public === ""
                  ? "--------"
                  : this.state.Evento.public}
              </p>
              <h5 id="title">
                {this.state.Evento.title === ""
                  ? "Aqui aparecerá o título do evento"
                  : this.state.Evento.title}
              </h5>
              <p id="sub">
                {this.state.Evento.subtitle === ""
                  ? "Aqui aparecerá o subtítulo do evento"
                  : this.state.Evento.subtitle}
              </p>
              <label></label>
              <hr />

              <div id="date">
                <img
                  src="https://cdn.discordapp.com/attachments/903094207235895330/1061451300371435530/image.png"
                  alt="Imagem calendario"
                />
                <p id="data">
                  {this.state.Evento.date === ""
                    ? "dd/mm/aaaa às hh:mm"
                    : this.state.Evento.date}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
