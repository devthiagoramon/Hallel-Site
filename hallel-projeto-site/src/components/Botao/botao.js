import React from "react";
import { Button } from "@mui/material";


const Botao = ({texto}) =>{

    return(
        <Button variant="contained" style={{color: "#35404b"}}>

                {texto}
        </Button>
    );
}
export default Botao;