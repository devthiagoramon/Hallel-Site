import React from "react";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextareaAutosize,
  Tooltip,
  Typography,
} from "@mui/material";
import InputHallel from "../../../components/InputHallel/InputHallel";
import { useState } from "react";
import ModalAddItensSorteioAdm from "./ModalAddItensSorteioAdm";
import dayjs from "dayjs";
import { sorteioSortearAPI } from "../../../api/uris/SorteioURIs";
import axios from "axios";
import { useEffect } from "react";

const EsquerdaBodySortAdm = () => {
  const [itens, setItens] = useState([]);
  const [openModalAddItens, setOpenModalAddItens] = useState(false);
  const sorteioTemplate = {
    titulo: "",
    descricao: "",
    itens: [],
    data: dayjs().toDate(),
  };
  const [sorteio, setSorteio] = useState(sorteioTemplate);
  const [errorTitulo, setErrorTitulo] = useState(false);
  const [errorDescricao, setErrorDescricao] = useState(false);
  const [errorItens, setErrorItens] = useState(false);

  const handleSortear = () => {
    let hasError = false;
    let url = sorteioSortearAPI();
    let itensProv = itens;

    if (sorteio.titulo === "") {
      setErrorTitulo(true);
      hasError = true;
    } else {
      setErrorTitulo(false);
    }
    if (sorteio.descricao === "") {
      setErrorDescricao(true);
      hasError = true;
    } else {
      setErrorDescricao(false);
    }

    if (itensProv.length > 0) {
      setSorteio((prev) => {
        return { ...prev, itens: itensProv };
      });
      setErrorItens(false);
    } else {
      setErrorItens(true);
      hasError = true;
    }

    if (!hasError) {
      axios.post(
        url,
        { ...sorteio },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
    }
  };

  const handleChangeInputs = (e) => {
    setSorteio((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };
  
  useEffect(() => {
    if(itens.length > 0){
      setErrorItens(false);
    }
  }, [])
  

  return (
    <div className="left_sortAdm_cont">
      <div className="itens_to_sortear_cont">
        <div className="header_itens_sort">
          <h4>Itens para sortear</h4>
          <Tooltip title="Adicionar itens para sorteio">
            <IconButton onClick={() => setOpenModalAddItens(true)}>
              <AddCircleOutlineRounded />
            </IconButton>
          </Tooltip>
        </div>
        <div className="body_itens_sort">
          {errorItens ? (
            <div className="cont_error_itens_sort">
              <Typography variant="body2" sx={{ color: "#F1948A" }}>
                Nenhum item para ser sorteado adicionado
              </Typography>
            </div>
          ) : (
            <>
              {itens.map((item) => {
                return (
                  <Card className="card_itens_sort">
                    <CardContent>
                      <Typography variant="body1">{item.nome}</Typography>
                    </CardContent>
                    <CardContent>
                      {item.imagem !== null ? (
                        <img
                          className="img_itens_sort"
                          alt="imagem teste"
                          src={item.imagem}
                        />
                      ) : (
                        <div className="cont_nenhuma_imagem_itens_sort">
                          <Typography variant="overline">
                            Nenhuma imagem adicionada
                          </Typography>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="inputs_sortear_cont">
        <Typography variant="h6">Titulo</Typography>
        {errorTitulo ? (
          <InputHallel
            error
            onChange={handleChangeInputs}
            name="titulo"
            style={{ width: "100%" }}
            value={sorteio.titulo}
          />
        ) : (
          <InputHallel
            onChange={handleChangeInputs}
            name="titulo"
            style={{ width: "100%" }}
            value={sorteio.titulo}
          />
        )}
        <Typography variant="h6">Descrição</Typography>
        {errorDescricao ? (
          <TextareaAutosize
            onChange={handleChangeInputs}
            name="descricao"
            className="textarea_inputs_sort_error"
            value={sorteio.descricao}
          />
        ) : (
          <TextareaAutosize
            onChange={handleChangeInputs}
            name="descricao"
            value={sorteio.descricao}
            className="textarea_inputs_sort"
          />
        )}
      </div>
      <div className="btn_sortear_itens_cont">
        <BtnHallel primario onClick={handleSortear}>
          Sortear
        </BtnHallel>
      </div>
      <ModalAddItensSorteioAdm
        itens={itens}
        setItens={setItens}
        openModal={openModalAddItens}
        setOpenModal={setOpenModalAddItens}
        errorItens={errorItens}
        setErrorItens={setErrorItens}
      />
    </div>
  );
};

export default EsquerdaBodySortAdm;
