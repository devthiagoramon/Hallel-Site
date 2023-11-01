import React, { useRef } from "react";
import { AddCircleOutlineRounded, DeleteRounded } from "@mui/icons-material";
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
import { OutlinedButtonHallel } from "../../../components/BtnHallel";

const EsquerdaBodySortAdm = () => {
  const [itens, setItens] = useState([]);
  const [refsItens, setRefsItens] = useState([]);
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
    if (itens.length > 0) {
      setErrorItens(false);
      let itensProv = itens;
      itensProv.forEach((item, index) => {
        refsItens[index] = React.createRef();
      });
    }
  }, []);

  function deleteItemFromItens(id, refId) {
    let refsItensProv = [...refsItens];
    console.log(refsItensProv[refId]);
    refsItensProv[refId].current.style.animation =
      "deletarAnimationCards 400ms ease-out forwards";
    setTimeout(() => {
      let itensProv = [...itens];
      itensProv.splice(itensProv.indexOf((item) => item.id === id));
      setItens(itensProv);
    }, 400);
  }

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
              {itens.map((item, index) => {
                return (
                  <Card
                    key={item.id}
                    ref={refsItens[index]}
                    className="card_itens_sort"
                  >
                    <div className="cont_icon_deletar_card_itens_sort">
                      <IconButton
                        onClick={() => deleteItemFromItens(item.id, index)}
                        sx={{ display: "none", position: "absolute", right: 0 }}
                      >
                        <DeleteRounded />
                      </IconButton>
                    </div>
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
        <OutlinedButtonHallel style={{width: 200, padding: "0.7rem", fontSize: "24px"}} onClick={handleSortear}>
          Sortear
        </OutlinedButtonHallel>
      </div>
      <ModalAddItensSorteioAdm
        itens={itens}
        setItens={setItens}
        openModal={openModalAddItens}
        setOpenModal={setOpenModalAddItens}
        errorItens={errorItens}
        setErrorItens={setErrorItens}
        setRefsItens={setRefsItens}
      />
    </div>
  );
};

export default EsquerdaBodySortAdm;
