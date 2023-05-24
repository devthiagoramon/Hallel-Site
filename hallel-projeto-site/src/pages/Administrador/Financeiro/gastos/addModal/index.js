import React, { useState } from "react";
import "./modalAddDespesa.css";
import { Modal } from "@mui/material";

const ModalAddDespesa = (props) => {
  const [descricao, Setdescricao] = useState();
  const [para, setPara] = useState();
  const [valor, Setvalor] = useState();
  const [data, setData] = useState();
  const [por, Setpor] = useState();

  function alterarData(data) {
    let dataTemp = data;
    let anoTemp = dataTemp.substring(0, 4);
    let mesTemp = dataTemp.substring(5,7);
    let diaTemp = dataTemp.substring(8);
    dataTemp = diaTemp+"/"+mesTemp+"/"+anoTemp;
    return dataTemp;
  }

  function addDespesa() {
    let url = "http://localhost:8080/api/financeiro/gasto/criar";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({
        descricaoGasto: descricao,
        valor: valor,
        finalidadeGasto: para,
        dataGasto: alterarData(data),
        usuarioGasto: por,
      }),
    })
      .then(() => {
        window.location.href =
          "http://localhost:3000/administrador/painelFinanceiro/gastos";
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Modal open={props.open} onClose={props.onClose} className="outContAddDespesa">
      <div className="contAddDespesa">
        <div className="headAddDespesa">
          <h1>Adicionar Gasto</h1>
        </div>
        <div className="bodyAddDespesa">
          <label>
            Descrição <span>*</span>
          </label>
          <textarea onChange={(e) => Setdescricao(e.target.value)}></textarea>
          <label>
            Para <span>*</span>
          </label>
          <input
            placeholder="Ex: (Conserto da igreja)"
            onChange={(e) => setPara(e.target.value)}
          />
          <label>
            Valor <span>*</span>
          </label>
          <input
            placeholder="Ex: (R$20,00)"
            onChange={(e) => Setvalor(e.target.value)}
          />
          <label>
            Data <span>*</span>
          </label>
          <input
            id="dataAddDespesa"
            type="date"
            className="dataDespesa"
            onChange={(e) => setData(e.target.value)}
          />
          <label>
            Feito por <span>*</span>
          </label>
          <input
            placeholder="Ex: (contHallel@gmail.com)"
            onChange={(e) => Setpor(e.target.value)}
          />
        </div>
        <div className="footerAddDespesa">
          <button onClick={props.onClose}>Voltar</button>
          <button onClick={() => addDespesa()}>Adicionar</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddDespesa;
