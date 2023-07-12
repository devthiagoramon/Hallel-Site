import { CancelRounded, EditNoteRounded, Send } from "@mui/icons-material";
import {
  Alert,
  CircularProgress,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import CloseIcon from "../../../images/CloseIcon";
import axios from "axios";

const MetaEntradaComponentPainelFinanceiro = () => {
  const [porcentagem, setporcentagem] = useState(100);

  const [alterarMeta, setAlterarMeta] = useState(false);
  const [metaValue, setMetaValue] = useState("");
  const [metaValueDefault, setMetaValueDefault] = useState("");

  const [showSnackBar, setShowSnackBar] = useState(false);
  const [textoSnackBar, setTextoSnackBar] = useState("");
  const [corSnackBar, setCorSnackBar] = useState("");

  useMemo(() => {
    let mesString = "0" + String(new Date().getMonth() + 1);
    let anoString = String(new Date().getFullYear());

    let urlPorcentagem =
      "http://localhost:8080/api/financeiro/meta/porcentagem" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString;
    axios
      .get(urlPorcentagem, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setporcentagem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setporcentagem]);

  useMemo(() => {
    let mesString = "0" + String(new Date().getMonth() + 1);
    let anoString = String(new Date().getFullYear());
    let urlListagem =
      "http://localhost:8080/api/financeiro/meta/listar" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString;
    axios
      .get(urlListagem, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setMetaValue(
          res.data.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
        setMetaValueDefault(
          res.data.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMetaValue, setMetaValueDefault]);

  const handleOnChangeMetaValue = (e) => {
    setMetaValueDefault(e.target.value);
  };

  const handleAlterarMeta = () => {
    setAlterarMeta(true);
  };

  const cancelarAlterarMeta = () => {
    setAlterarMeta(false);
    setMetaValue(metaValue);
  };

  function handleChangeMetaConfirmed() {
    setAlterarMeta(false);
    setMetaValue(metaValueDefault);
    let metaValueProv = metaValueDefault;

    let mesString = "0" + String(new Date().getMonth() + 1);
    let anoString = String(new Date().getFullYear());

    let url =
      "http://localhost:8080/api/financeiro/meta/alterar" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString +
      "&meta=" +
      metaValueProv;

      console.log(url)

    axios
      .put(
        url,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        showSnackBarResponse("Meta atualizada com sucesso", "success");
      })
      .catch((error) => {
        console.log(error);
        showSnackBarResponse("Error na atualização da Meta", "error");
      });
  }

  function showSnackBarResponse(texto, cor) {
    setCorSnackBar(cor);
    setTextoSnackBar(texto);
    setShowSnackBar(true);
  }

  const handleCloseSnackBar = () => {
    setCorSnackBar("");
    setTextoSnackBar("");
    setShowSnackBar(false);
  };

  return (
    <div className="container_meta_painel_financeiro">
      <div className="container_circular_progress">
        <CircularProgress
          style={{
            width: "350px",
            height: "350px",
            maxWidth: "350px",
            maxHeight: "350px",
          }}
          sx={{ color: "#1A0631" }}
          variant="determinate"
          value={porcentagem}
        />
        <label>{porcentagem}%</label>
      </div>
      <div className="container_info_circular_progress">
        {!alterarMeta && (
          <>
            {" "}
            <label>
              <span>Meta:</span>
              <br /> {metaValue}
            </label>
            <IconButton
              onClick={handleAlterarMeta}
              sx={{ color: "#252525", mb: 1 }}
            >
              <EditNoteRounded />
            </IconButton>
          </>
        )}
        {alterarMeta && (
          <>
            <label>
              <span>Meta:</span>
              <br />{" "}
              <TextField
                size="small"
                value={metaValueDefault}
                onChange={handleOnChangeMetaValue}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleChangeMetaConfirmed();
                  }
                }}
              />
              <IconButton
                sx={{ color: "#252525", mb: 1 }}
                onClick={cancelarAlterarMeta}
              >
                <CancelRounded />
              </IconButton>
            </label>
          </>
        )}
      </div>
      <Snackbar
        open={showSnackBar}
        onClose={handleCloseSnackBar}
        autoHideDuration={3000}
      >
        <Alert severity={corSnackBar}>{textoSnackBar}</Alert>
      </Snackbar>
    </div>
  );
};

export default MetaEntradaComponentPainelFinanceiro;
