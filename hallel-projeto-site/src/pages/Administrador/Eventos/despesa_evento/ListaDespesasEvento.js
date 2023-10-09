import React, {useMemo} from "react";
import {Table} from "react-bootstrap";
import {BsPencilFill} from "react-icons/bs";
import {AiFillDelete} from "react-icons/ai";
import {IconButton} from "@mui/material";
import {CircularProgress} from "@mui/joy";
import {eventoListarDespesasPorIdEventoService} from "../../../../service/EventoService";

const ListaDespesasEvento = (props) => {
  const despesas = useMemo(() => {
    return eventoListarDespesasPorIdEventoService();
  }, [])

  function abrirModalEdit(despesa) {
    props.setDespesaSelected(despesa);
    props.setOpenModal(true);
  }

  function abrirModalDelete(despesa) {
    props.setopenModalDelete(true);
    props.setDespesaSelected(despesa);
  }

  return (
    <section className="sessao_tabela">
      {despesas.length == 0 ? (
        <CircularProgress />
      ) : despesas.length == null ? (
        <h2>Nenhuma despesa encontrada</h2>
      ) : (
        <Table
          hover
          style={{
            width: "100%",
            maxWidth: "100%",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
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
            <>
              {despesas.map((item) => {
                return (
                  <tr>
                    <td>{item.nome}</td>
                    <td style={{ wordBreak: "break-word" }}>
                      {item.descricao}
                    </td>
                    <td>{item.tipoDespesa}</td>
                    <td>
                      {item.tipoDespesa !== "DINHEIRO"
                        ? item.quantidade + " unidades"
                        : "R$" + item.valor}
                    </td>
                    <td>
                      <span
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton
                          onClick={() => {
                            abrirModalDelete(item);
                          }}
                        >
                          <AiFillDelete style={{ height: "20px" }} />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            abrirModalEdit(item);
                          }}
                        >
                          <BsPencilFill style={{ height: "20px" }} />
                        </IconButton>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </>
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default ListaDespesasEvento;
