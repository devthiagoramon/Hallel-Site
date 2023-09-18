import { useState, useEffect } from "react";
import "./sorteio.css";
import Table from "react-bootstrap/Table";
import Logo from "../../images/logo.png";
import Loteria from "../../images/loteria.png";
import Artesanato from "../../images/artesanato.png";
import Alimento from "../../images/alimentos.png";
import Roupas from "../../images/roupas.png";
import Devocao from "../../images/obj_devocao.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { sorteioListarAllAPI } from "../../api/uris/SorteioURIs";

const Sorteio = () => {
  return (
    <section className="centralSorteio">
      <label>Sorteio de associados</label>

      <AreaTopo />
      <hr className="divisor" />
      <TableArea />
      <hr className="divisor" />
      <ComoFunciona />
      <hr className="divisor" />
      <ListaPremios />
    </section>
  );
};

function AreaTopo() {
  return (
    <div className="painelBanner">
      <div className="verde-quadro">
      </div>
      <div className="amarelo-quadro">
        <img src={Logo} alt="logo hallel" />
        <img src={Loteria} alt="logo hallel" />
      </div>
    </div>
  );
}

function TableArea() {
  const [sorteio, setSorteio] = useState([]);

  useEffect(() => {
    let url = sorteioListarAllAPI();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));
    
    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((r) => r.json())
      .then((object) => {
        setSorteio(object);
      })
      .catch((r) => {
        console.log("Erro na hora de puxar os membros da API. Erro: "+ r);
      });
  }, []);

  return (
    <section className="tabelaSorteio">
      <label>Últimos ganhadores</label>

      {sorteio.length === 0 ? (
        <div className="circuloProgresso">
          <CircularProgress />
        </div>
      ) : (
        <>
          <Table
            style={{ backgroundColor: "#FCFBF8" }}
            bordered
            striped
            hover
            size="sm"
            border={2}
          >
            <thead>
              <tr>
                <th>Prêmio</th>
                <th>Sorteado</th>
                <th>Descrição</th>
                <th>Data do Sorteio</th>
              </tr>
            </thead>

            <tbody>
              {sorteio.map((item) => {
                console.log(item)
                return (
                  <tr key={item.id}>
                    <td>{item.titulo}</td>
                    <td>{item.sorteioAssociados?.nome}</td>
                    <td>{item.descricao}</td>
                    <td>{item.data}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="comofunciona">
      <label>Como funciona?</label>

      <div className="conteudo-funciona">
        <div id="passo1" className="passos">
          <div className="circle">1º</div>
          <label>Torne-se associado</label>
        </div>

        <div id="passo2" className="passos">
          <div className="circle">2º</div>

          <label>Tenha o pagamento em dia</label>
        </div>

        <div id="passo3" className="passos">
          <div className="circle">3º</div>

          <label>Pronto! Você já está concorrendo :D</label>
        </div>
      </div>
    </section>
  );
}

function ListaPremios() {
  return (
    <section className="listaPremios">
      <label>Lista de prêmios</label>

      <div className="conteudo-listapremios">
        <div id="premio1" className="premios">
          <div className="premio_produto">
            <img src={Artesanato} alt="artesanato" />
          </div>

          <label>Artesanato</label>
        </div>

        <div id="premio2" className="premios">
          <div className="premio_produto">
            <img src={Alimento} alt="alimentos" />
          </div>

          <label>Alimentos</label>
        </div>

        <div id="premio3" className="premios">
          <div className="premio_produto">
            <img src={Roupas} alt="roupas" />
          </div>

          <label>Roupas</label>
        </div>

        <div id="premio4" className="premios">
          <div className="premio_produto">
            <img src={Devocao} alt="obj de devoção" />
          </div>

          <label>Objetos de devoção</label>
        </div>
      </div>
    </section>
  );
}

export default Sorteio;
