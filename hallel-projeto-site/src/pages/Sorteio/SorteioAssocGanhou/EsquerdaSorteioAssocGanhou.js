import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const EsquerdaSorteioAssocGanhou = () => {
  return (
    <div className="cont_esquerda_body_sort_assoc">
      <div className="cont_info_sort_assoc">
        <h4>-Titulo Sorteio-</h4>
        <h4>Descrição:</h4>
        <h4>
          Data: <span>'data'</span>
        </h4>
        <Typography variant="body1">-Descrição do sorteio-</Typography>
      </div>
      <div className="cont_assoc_ganhadores_sort_assoc_ganhou">
        <h3>Associados Ganhadores</h3>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default EsquerdaSorteioAssocGanhou