import { useState } from "react";
import './styleProduto.css';
import  Breadcrumbs  from "@mui/material/Breadcrumbs";
import Link from '@mui/material/Link';


function LojaProduto(){

    return(

        <div className="loja-produto">


            <Pao/>
            <Banner/>
            <DescricaoProduto/>

            


        </div>
    )

}

const Pao = () =>{

    function handleClick(event) {
        event.preventDefault();
    alert("clicou");
      }

      return(

    <div className="bread">

        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
            Loja
            </Link>

            <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            >
            Categoria
            </Link>



            <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            >
            Produto
            </Link>
        
        </Breadcrumbs>
        </div>
    </div>
      );
}

const Banner = () =>{

    return(

        <div className="banner">

            <div className="img-lugar">

                <img src="" placeholder="nada"/>

            </div>
        </div>
    );
}

const DescricaoProduto = () =>{


    const [itens, setItens] = useState(0);
    const [preco, setPreco] = useState("R$0,00");
    const [nomeProduto, setNameProduto] = useState("Nome do produto");

    function somarItem(){

        setItens(itens + 1);
    }

    function subtrairItem(){

        if(!(itens <= 0)){

            
            setItens(itens - 1);

        }

    }

    return(

        <div className="descricao-produto">

            <div className="informes">

                <label>{nomeProduto}</label>
                <label>{preco}</label>

                <div className="button-quantidade">

                    <button className="modificadores"  onClick={subtrairItem}>-</button>
                    <label>{itens}</label>
                    <button className="modificadores" onClick={somarItem}>+</button>
                </div>
            </div>

            <div className="button-area">
                <button>ADICIONAR AO CARRINHO</button>
            </div>



        </div>
    )
}

export default LojaProduto;