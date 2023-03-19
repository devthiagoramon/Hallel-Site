import "./doacoes.css";

function Doacoes() {
  return (
    <div className="containerdoacoes">
      <div className="left-doacoes">
        {/*código lado esquerdo da tela: texto de apresentação da tela Doacoes -- título e parágrafo*/}
        <header>
          <span className="titulo1"> DOAR É</span>
          <span className="titulo2">AMAR</span>

          <p className="sobre-doacoes">
            Nós agradecemos o seu interesse em doar à comunidade, sua doação
            gera vida e renova a esperança!
          </p>
        </header>
      </div>

      <div className="right-doacoes">
        <label id="titulo-doacoes">
          {" "}
          Preencha o formulário e seja um doador.{" "}
        </label>
        <hr />
        {/* <div className="form-group">
                    <p>  Preencha o formulário e seja um doador.  </p>
    </div> */}{" "}
        <br />
        <div className="form-container">
          <div className="form-group">
            <label for="nome">Nome </label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group">
            <label for="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="form-group">
            <label for="telefone">Número de Telefone </label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              placeholder="(__) _____-____"
            />
          </div>
          <div className="form-group">
            <label for="dataNasc">Data de Nascimento </label>
            <input type="date" name="dataNasc" id="dataNasc" />
          </div>
          <div className="form-group">
            <label for="sexo">Sexo </label>
            <select name="sexo">
              <option value="" disabled selected>
                {" "}
                Selecione{" "}
              </option>
              <option value="feminino">Feminino </option>
              <option value="masculino">Masculino </option>
            </select>
          </div>
          <br />
          <hr />
          <br />
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox1"
              className="checkbox-doacoes"
            />
            <label>Desejo receber essas comunicações. </label>
            <br />
            <input
              type="checkbox"
              name="checkbox2"
              className="checkbox-doacoes"
            />
            <label>Li e aceito as Políticas de Privacidade. </label>
          </div>
          <br />
          <button className="buttonQueroDoar"> Quero Doar!</button>
        </div>
      </div>
    </div>
  );
}

export default Doacoes;
