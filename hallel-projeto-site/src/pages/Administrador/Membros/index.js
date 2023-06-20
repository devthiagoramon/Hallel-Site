import "./style.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Select from "react-bootstrap/FormSelect";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Filtro() {
  return (
    <div className="filtro">
      <div className="left-area">
        <Search className="searchbar">
          <input
            type="search"
            name="q"
            placeholder="Pesquisar.."
            className="form-control"
          />

          <Button type="button" className="primary">
            <i>
              <AiOutlineSearch />
            </i>
          </Button>
        </Search>
      </div>

      <div className="right-area">
        <div className="select-area">
          <Select className="select" aria-label="Selecione">
            <option value="all">Filtrar por</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="pendente">Pendente</option>
          </Select>
        </div>

        <div className="buttonArea">
          <button className="adicionarBt">Adicionar</button>
          <button className="alterarBt">Alterar</button>
          <button className="removerBt">Remover</button>
        </div>
      </div>
    </div>
  );
}

function MembrosAdministrador() {
  const [membro, setMembro] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/api/administrador/membros";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((r) => r.json())
      .then((object) => {
        setMembro(object);
      })
      .catch((r) => {
        console.log("Erro na hora de puxar os membros da API");
      });
  });

  return (
    <section className="sessaoMembro">
      <Filtro />

      <div className="tableMembro">
      <Table style = {{backgroundColor: "#FCFBF8"}} bordered striped hover size="sm">

        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Data de nascimento</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          
          {membro.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td></td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    </section>
  );
}

export default MembrosAdministrador;
