import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Link } from "react-router-dom";

function pedido_oracao() {
  return (
    <Card
      className="card mx-auto w-40"
      style={{ width: "30rem", border: "2px solid #D94814" }}
    >
      <Card.Body id = "corpo">
        <Card.Title>
          <h1>Pedido de oração</h1>
          </Card.Title>

        <div className="space-in" style={{display:"flex"}}>
          <img
            id="imagem"
            src="https://www.basilicacoracaodemaria.com/area/img/noticias/6f7757f890370ad6cd8c9d062b5bac4c.jpg"
            alt="Pedido_img"
          />

          <Card.Text id = "texto" style={{width: "100%",
                            marginLeft:"0",wordBreak: "normal"}}> 
              Resgatando para através do louvor, da formação e do amor por
              excelência.
          </Card.Text>
        </div>

        <Button id="bt">
          <Link to="/pedido">Entrar</Link>
        </Button>

      </Card.Body>
    </Card>
  );
}
