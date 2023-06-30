import { DoneRounded, ErrorOutlineRounded, ErrorRounded, SendRounded } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import React from "react";

const InputsBodyAdicionarLocais = (props) => {

  return (
    <div className="inputAdicionarLocaisContainer">
      <label>Digite o Nome da localização</label>
      <div className="inputAdicionarLocaisComponents">
        <TextField
          sx={{ width: "70%" }}
          label="Nome da localidade"
          size="small"
          variant="outlined"
          value={props.localizacao}
          onChange={(e) => { props.setLocalizacao(e.target.value) }}
        />
        {props.isRequestSucessFull === true && 
          <Button
          variant="contained"
          onClick={props.enviarRequest}
          endIcon={<DoneRounded />}
          color="success"
        >
          Sucesso
        </Button>
        }
        {props.isRequestSucessFull === null &&
          <Button
            variant="contained"
            onClick={props.enviarRequest}
            endIcon={props.enviando ? <CircularProgress sx={{color: "#FAF4F4"}}/> : <SendRounded />}
          >
            Adicionar
          </Button>
        }
        {props.isRequestSucessFull === false &&
          <Button
            variant="contained"
            onClick={props.enviarRequest}
            endIcon={<ErrorOutlineRounded />}
            color="error"
          >
            Error
          </Button>
        }
      </div>
    </div>
  );
};

export default InputsBodyAdicionarLocais;
