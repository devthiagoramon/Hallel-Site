import { SendRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";

const InputsBodyAdicionarLocais = ({setisClicked}) => {

    const onClickHandle = () => {
        setisClicked(true);
    }

  return (
    <div className="inputAdicionarLocaisContainer">
      <label>Digite o Nome da localização</label>
      <div className="inputAdicionarLocaisComponents">
        <TextField
          sx={{ width: "70%" }}
          label="Nome da localidade"
          size="small"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={onClickHandle}
          endIcon={<SendRounded />}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default InputsBodyAdicionarLocais;
