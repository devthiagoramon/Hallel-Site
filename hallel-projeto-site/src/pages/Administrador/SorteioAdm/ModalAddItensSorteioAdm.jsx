import { Box, Modal, Tooltip, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import React from "react";
import { useState } from "react";
import InputHallel from "../../../components/InputHallel/InputHallel";
import BtnHallel from "../../../components/BtnHallel/ButtonHallel";

const ModalAddItensSorteioAdm = ({
  openModal,
  setOpenModal,
  itens,
  setItens,
  errorItens,
  setErrorItens,
  setRefsItens,
}) => {
  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  const itemTemplate = {
    id: itens.length+1,
    imagem: null,
    nome: "",
  };

  const [item, setItem] = useState(itemTemplate);

  const handleChangeInputs = (e) => {
    setItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChangeImagem = (e) => {
    const file = e;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        setItem((prev) => {
          return { ...prev, imagem: dataURL };
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(!openModal);
    setItem(itemTemplate);
  };

  const handleAddItem = () => {
    let itensProv = itens;
    itensProv.push(item);
    setItens(itensProv);
    setOpenModal(!openModal);
    setItem(itemTemplate);
    if(errorItens){
      setErrorItens(false);
    }
    let ref = React.createRef();
    setRefsItens((prev) => [...prev, ref]);
  }
  
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={styleInnerModal}>
        <div className="cont_add_item_sort_modal">
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            Imagem
          </Typography>
          {item.imagem !== null && <img alt="Imagem Item" src={item.imagem} />}
          <Tooltip title="Clique para adicionar ou alterar a imagem">
            <MuiFileInput
              sx={{ width: "95%" }}
              onChange={handleChangeImagem}
            />
          </Tooltip>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            Nome
          </Typography>
          <InputHallel
            style={{ background: "none" }}
            name="nome"
            onChange={handleChangeInputs}
          />
          <div className="cont_btn_add_item_sort_modal">
            <BtnHallel style={{ width: "200px" }} onClick={handleAddItem} sucesso>
              Adicionar Item
            </BtnHallel>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalAddItensSorteioAdm;
