import { ListRounded } from "@mui/icons-material";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import ModalListarSorteios from "./ModalListarSorteios";

export const DireitaBodySortAdm = ({
  mesSelecionado,
  sorteioSelec,
  setSorteioSelec,
}) => {
  const [openModalWithSorteios, setOpenModalWithSorteios] = useState(false);

  const handleOpenModal = () => {
    setOpenModalWithSorteios(!openModalWithSorteios);
  };

  return (
    <div className="right_sortAdm_cont">
      <div className="cont_selec_sort">
        <h4>Selecionar sorteio</h4>
        {sorteioSelec === null ? (
          <div className="inner_selec_sort_cont" id="no_selected">
            <Typography variant="body1" href="list_sorteos">
              Selecionar
            </Typography>
            <IconButton id="list_sorteos" onClick={handleOpenModal}>
              <ListRounded />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="cards_infos_sorts">
        <Card className="card_info_sort" id="card_ultimo_sorteado">
          <CardContent>
            <Typography variant="body1">Ultimo sorteado</Typography>
          </CardContent>
          <CardContent>
            <img
              className="img_card_info_sort"
              alt="Imagem do ultimo sorteado"
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </CardContent>
          <CardContent>
            <Typography variant="body2" component="h6">
              Nome: Alerson
            </Typography>
            <Typography variant="body2" component="h6">
              CPF: 704.356.243-23
            </Typography>
            <Typography variant="body2" component="h6">
              Email: alerson@gmail.com
            </Typography>
            <Typography>Mês: 08/2023</Typography>
          </CardContent>
        </Card>

        <Card className="card_info_sort" id="card_sorteado_mes">
          <CardContent>
            <Typography variant="body1">Sorteado do mês</Typography>
          </CardContent>
          <CardContent>
            <img
              className="img_card_info_sort"
              alt="Imagem do ultimo sorteado"
              src="https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-sorridente-tocando-seu-rosto-com-maquiagem-natural-e-parecendo-alegre-a-frente-em-pe-contra-uma-parede-branca_176420-38914.jpg?w=1060&t=st=1694185646~exp=1694186246~hmac=dc4362282a36d9a59363ba72c5e486638c656c557e6344a4d3b88c9de9d60fa6"
            />
          </CardContent>
          <CardContent>
            <Typography variant="body2" component="h6">
              Nome: Eduarda
            </Typography>
            <Typography variant="body2" component="h6">
              CPF: 353.102.321-26
            </Typography>
            <Typography variant="body2" component="h6">
              Email: eduarda@gmail.com
            </Typography>
            <Typography>Mês: {mesSelecionado.format("MM/YYYY")}</Typography>
          </CardContent>
        </Card>
      </div>
      <ModalListarSorteios
        openModal={openModalWithSorteios}
        setOpenModal={setOpenModalWithSorteios}
      />
    </div>
  );
};
