import { AddCircle } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import "./doacao_objeto.css";

const DoacaoObjetoADM = () => {
  const [doacoesObjeto, setdoacoesObjeto] = useState([]);
  const [atualizando, setAtualizando] = useState(false);

  useMemo(() => {
    let url = "http://localhost:8080/api/doacao/listObjetos";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((doacoesObjeto) => {
        console.log(doacoesObjeto);
        setdoacoesObjeto(doacoesObjeto);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  function recebido(id, isRecebido) {
    console.log("Id: " + id);
    console.log("Recebido: " + isRecebido);
    if (isRecebido) {
      let url = "http://localhost:8080/api/doacao/" + id + "/naoRecebido";

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem("token"));

      fetch(url, {
        headers: myHeaders,
        method: "POST",
      }).then(() => {
        setAtualizando(true);
        setTimeout(() => {
          window.location.href =
            "http://localhost:3000/administrador/painelFinanceiro/doacoes/objeto";
        }, 3000);
      }).catch((e) => console.warn(e));
    } else {
      let url = "http://localhost:8080/api/doacao/" + id + "/recebido";

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem("token"));

      fetch(url, {
        headers: myHeaders,
        method: "POST",
      })
        .then(() => {
          setAtualizando(true);
          setTimeout(() => {
            window.location.href =
              "http://localhost:3000/administrador/painelFinanceiro/doacoes/objeto";
          }, 3000);
        })
        .catch((e) => console.warn(e));
    }
  }

  return (
    <div>
      <div className="containerDoacaoObj">
        <div className="containerCardsDoacaoObj">
          <div className="headerCardsDoacaoObj">
            <label>Doações de objeto</label>
            <div className="addDoacaoHeaderCardsDoacao">
              <IconButton
                color="secundary"
                aria-label="Add doação"
                onClick={() =>
                  (window.location.href =
                    "http://localhost:3000/administrador/painelFinanceiro/doacoes/objeto/add")
                }
              >
                <AddCircle style={{ width: "55px", height: "55px" }} />
              </IconButton>
              <span>Adicionar doação</span>
            </div>
            <button style={{ display: "none" }}></button>
          </div>
          <div className="bodyCardsDoacaoObj">
            {doacoesObjeto.map((objeto) => {
              return (
                <Card
                  key={objeto.id}
                  sx={{
                    minWidth: 250,
                    maxWidth: 300,
                    backgroundColor: "#fafafa",
                  }}
                >
                  {atualizando === false ? (
                    <div>
                      {objeto.recebido ? (
                        <Button
                          variant="h2"
                          component="div"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#74E753",
                          }}
                          onClick={() => recebido(objeto.id, true)}
                        >
                          Recebido
                        </Button>
                      ) : (
                        <Button
                          variant="h2"
                          component="div"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#F72727",
                          }}
                          onClick={() => recebido(objeto.id, false)}
                        >
                          Não recebido
                        </Button>
                      )}{" "}
                    </div>
                  ) : (
                    <div>
                      <LinearProgress sx={{ width: "100%" }} />
                    </div>
                  )}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={objeto.imagem}
                      alt="Imagem card"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {objeto.descricao}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                      Quantidade: {objeto.quantidade}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoacaoObjetoADM;
