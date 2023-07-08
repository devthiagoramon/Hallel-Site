import React from "react";
import "./associadosCursos.css";
import { useParams } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import { useState } from "react";
import { useMemo } from "react";
import axios from "axios";

const AssociadosListaCursosAdm = () => {
  const { idCurso } = useParams();
  const [pesquisa, setPesquisa] = useState("");
  const [listaAssociado, setlistaAssociado] = useState([]);

  useMemo(() => {
    let url = "http://localhost:8080/api/cursos/getParticipantes/" + idCurso;

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setlistaAssociado([...res.data]);
    
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const listaAssociadoFiltrado = useMemo(() => {
    let pesquisaLowerCase = pesquisa.toLowerCase();
    return listaAssociado.filter((associado) =>
      associado.nome.toLowerCase().includes(pesquisaLowerCase)
    );
  }, [pesquisa, listaAssociado]);

  return (
    <div className="containerCursosListaAssociado">
      <div className="headerContainerCursosListaAssociado">
        <label className="tituloCursosListaAssociado">
          Lista de associados no curso
        </label>
        <div className="contPesquisaCursosListaAssociado">
          <Form.Control
            onChange={(e) => {
              setPesquisa(e.target.value);
            }}
            placeholder="Pesquisar associado"
          />
        </div>
      </div>
      <div className="bodyContainerCursosListaAssociado">
        <Table style={{ width: "100%" }} striped borderless>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {listaAssociadoFiltrado.map((item) => {
              return (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.isAssociado}</td>
                  <td>{item.mensalidadePaga ? "Sim" : "Não"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AssociadosListaCursosAdm;
