import React, { useEffect } from 'react'
import { Table } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import { useState } from 'react'
import axios from 'axios';

const ListaDespesasEvento = (props) => {

  const [despesas, setDespesas] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/api/administrador/eventos/" + props.evento.id + "/despesa/listAll", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setDespesas(res.data);
    }).catch((error) => {
      console.log("Error requerindo da url de despesas: " + error);
    })

  }, [])


  return (

    <section className="sessao_tabela">

      <Table
        hover
        style={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          marginLeft: "8rem",
          marginRight: "8rem",
        }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tipo de despesa</th>
            <th>Valor/Quantidade</th>
            <th style={{ textAlign: "center" }}>Opções</th>
          </tr>
        </thead>
        <tbody>


          {/* estava dando como indefinida, então coloqueia a interrogação para realizar um teste */}
          {despesas.map((item) => {
            return (
              <tr>
                <td>{item.nome}</td>
                <td>{item.descricao}</td>
                <td>{item.tipoDespesa}</td>
                <td>{item.tipoDespesa !== "DINHEIRO" ? item.quantidade+" unidades" : "R$"+item.valor}</td>
                <td>
                  <div className="row_opcoes">
                    <AiFillDelete />
                    <BsPencilFill />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </section>
  )
}

export default ListaDespesasEvento