import { CheckCircleOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  LinearProgress,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { sorteioListarAllAPI } from "../../../api/uris/SorteioURIs";
import axios from "axios";
import dayjs from "dayjs";

const ModalListarSorteios = ({ openModal, setOpenModal, setSorteioSelec }) => {
  const [sorteios, setSorteios] = useState([]);

  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  const handleCloseModal = () => {
    setOpenModal(!openModal);
    setSorteios([]);
  };

  function handleSelectSorteio(sorteio) {
    setSorteioSelec(sorteio);
    setOpenModal(!openModal);
    setSorteios([]);
  }

  useMemo(() => {
    let url = sorteioListarAllAPI();

    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setSorteios(res.data);
      })
      .catch((error) => {
        console.log("Error getting sorteios from API: " + error);
      });
  }, [setSorteios]);

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <TableContainer sx={styleInnerModal} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Selecionar</TableCell>
            </TableRow>
          </TableHead>
          {sorteios.length === 0 ? (
            <LinearProgress />
          ) : (
            <TableBody>
              {sorteios.map((sorteio) => {
                return (
                  <>
                    <TableCell>{sorteio.titulo}</TableCell>
                    <TableCell>{sorteio.descricao}</TableCell>
                    <TableCell>
                      {dayjs(sorteio.data).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell
                      component="div"
                      className="selec_this_sorteio_cont"
                    >
                      <IconButton onClick={() => {handleSelectSorteio(sorteio)}}>
                        <CheckCircleOutlined />
                      </IconButton>
                    </TableCell>
                  </>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Modal>
  );
};

export default ModalListarSorteios;
