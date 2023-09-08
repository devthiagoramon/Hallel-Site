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

const EsquerdaBodySortAdm = () => {
  return (
    <div className="left_sortAdm_cont">
      <div className="itens_to_sortear_cont">
        <div className="header_itens_sort">
          <h4>Itens para sortear</h4>
          <Tooltip title="Adicionar itens para sorteio">
            <IconButton>
              <AddCircleOutlineRounded />
            </IconButton>
          </Tooltip>
        </div>
        <div className="body_itens_sort">
          <Card className="card_itens_sort">
            <CardContent>
              <Typography variant="body1">Item (Nome)</Typography>
            </CardContent>
            <CardContent>
              <img
                className="img_itens_sort"
                alt="imagem teste"
                src="https://static.lvartigosreligiosos.com.br/public/liriodovale/imagens/produtos/thumbs/chaveiro-crucifixo-de-sao-bento-com-pulseira-e-mosquete-vermelho-646ba90f56537.jpg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="inputs_sortear_cont">
        <Typography variant="h6">Titulo</Typography>
        <InputHallel style={{width: "100%"}}/>
        <Typography variant="h6">Descrição</Typography>
        <TextareaAutosize className="textarea_inputs_sort"/>
      </div>
      <div className="btn_sortear_itens_cont">
        <BtnHallel primario>Sortear</BtnHallel>
      </div>
    </div>
  );
};

export default EsquerdaBodySortAdm;
