import { Alert, Box, Modal, Snackbar } from "@mui/material";
import React, { useMemo, useState } from "react";

import ModalAdicionarCartaoPE from "./ModalAdicionarCartaoPE";
import FormularioNaoUsuarioHallel from "./FormularioNaoUsuarioHallel";
import FormularioMembroHallel from "./FormularioMembroHallel";
import FormularioAssociadoHallel from "./FormularioAssociadoHallel";
import { notification } from "../../../..";
import {
  ErrorParticiparEvento,
  SucessoParticiparEvento,
} from "../../../../components/Feedback/FeedbackParticiparEvento";
import { participarEventoService } from "../../../../service/EventoService";
import { verifyMembroParticiparEventoService } from "../../../../service/MembroService";
import { getUserId } from "../../../../utils/utilLocalStorage";

const ModalParticiparEvento = ({ evento, open, setOpen }) => {
  const [usuarioEvento, setUsuarioEvento] = useState({
    id: "",
    nome: "",
    email: "",
    cpf: "",
    idade: 0,
    cartaoCredito: null,
    isMembro: false,
    isAssociado: false,
  });

  const [isMenorIdade, setIsMenorIdade] = useState(false);
  const [openAdicionarCartao, SetopenAdicionarCartao] = useState(false);
  const [openIsCadastrado, setOpenIsCadastrado] = useState(false);

  const [isCadastrado, setIsCadastrado] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [errorInputs, setErrorInputs] = useState({
    nome: false,
    email: false,
    idade: false,
    cpf: false,
    cartaoCredito: false,
  });

  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "#F2F2F8",
    border: "12px solid #6B8275",
    padding: "10px",
    boxShadow: 24,
    maxHeight: 700,
    overflowY: "auto",
    p: 4,
  };

  const handleCloseModal = () => {
    setOpen(false);
    setUsuarioEvento({
      nome: "",
      email: "",
      cpf: "",
      idade: 0,
      cartaoCredito: null,
    });
    setIsVerified(false);
    setIsCadastrado(false);
  };

  const handleAlterarTexto = (e) => {
    if (e.target.name === "idade") {
      if (e.target.value < 18) {
        setIsMenorIdade(true);
      } else {
        setIsMenorIdade(false);
      }
    }
    setUsuarioEvento((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  function verifyErrorInputs() {
    let hasError;
    if (usuarioEvento.nome === "") {
      setErrorInputs((prev) => {
        return { ...prev, nome: true };
      });
      hasError = true;
    } else {
      setErrorInputs((prev) => {
        return { ...prev, nome: false };
      });
    }
    if (!usuarioEvento.email || usuarioEvento.email === "") {
      setErrorInputs((prev) => {
        return { ...prev, email: true };
      });
      hasError = true;
    } else {
      setErrorInputs((prev) => {
        return { ...prev, email: false };
      });
    }
    if (!usuarioEvento.cpf || usuarioEvento.cpf === "" || usuarioEvento.cpf.length !== 11 ) {
      setErrorInputs((prev) => {
        return { ...prev, cpf: true };
      });
      hasError = true;
    } else {
      setErrorInputs((prev) => {
        return { ...prev, cpf: false };
      });
    }
    if (!usuarioEvento.idade || usuarioEvento.idade <= 0) {
      setErrorInputs((prev) => {
        return { ...prev, idade: true };
      });
      hasError = true;
    } else {
      setErrorInputs((prev) => {
        return { ...prev, idade: false };
      });
    }
    if (usuarioEvento.cartaoCredito == null) {
      setErrorInputs((prev) => {
        return { ...prev, cartaoCredito: true };
      });
      hasError = true;
    } else {
      setErrorInputs((prev) => {
        return { ...prev, cartaoCredito: false };
      });
    }

    return hasError;
  }

  const handleParticiparEvento = () => {
    if (usuarioEvento.associado) {
      // Associado não passa pela verificação de inputs
      let usuarioEventoRequest = {
        idEvento: evento.id,
        ...usuarioEvento,
      };
      participarEventoService(usuarioEventoRequest)
        .then((response) => {
          if (response) {
            notification.render(<SucessoParticiparEvento />);
          } else {
            notification.render(<ErrorParticiparEvento />);
          }
        })
        .catch((error) => {
          console.error("Erro ao participar do evento:", error);
          notification.render(<ErrorParticiparEvento />);
        });
    } else {
      // Já membro e não membro passam pela verificação
      let hasError = verifyErrorInputs();
      if (!hasError) {
        let usuarioEventoRequest = {
          idEvento: evento.id,
          ...usuarioEvento,
        };
        participarEventoService(usuarioEventoRequest)
          .then((response) => {
            if (response) {
              notification.render(<SucessoParticiparEvento />);
            } else {
              notification.render(<ErrorParticiparEvento />);
            }
          })
          .catch((error) => {
            console.error("Erro ao participar do evento:", error);
            notification.render(<ErrorParticiparEvento />);
          });
      }
    }
  };

  useMemo(() => {
    let idUser = getUserId();
    if (idUser != null) {
      verifyMembroParticiparEventoService(idUser).then((response) => {
        if (!response) {
          // Error
          
          return;
        }
        setIsVerified(true);
        if (response == null) {
          setIsCadastrado(false);
        } else {
          setIsCadastrado(true);
          setOpenIsCadastrado(true);
          let userProv = { ...response };
          console.log(response)
          setUsuarioEvento(userProv);
        }
      }).catch(() => {

      });
    } else {
      setIsVerified(true);
      setIsCadastrado(false);
    }
  }, []);

  const handleCloseSnackBar = () => {
    setOpenIsCadastrado(false);
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={styleInnerModal}>
        {/*
          Aqui funciona da seguinte maneira)
          - Verificamos se o usuário é cadastrado:
            - Se não for, fará um formulário para participar de um evento
            - Se for membro, um formulário para adicionar cartão
            - Se for associado, somente o botão de participar um evento
         */}
        {isVerified && (
          <>
            {!isCadastrado ? (
              <>
                <FormularioNaoUsuarioHallel
                  SetopenAdicionarCartao={SetopenAdicionarCartao}
                  evento={evento}
                  handleAlterarTexto={handleAlterarTexto}
                  isMenorIdade={isMenorIdade}
                  usuarioEvento={usuarioEvento}
                  errorInputs={errorInputs}
                  handleParticiparEvento={handleParticiparEvento}
                />
              </>
            ) : (
              <>
                {usuarioEvento.membro && (
                  <FormularioMembroHallel
                    SetopenAdicionarCartao={SetopenAdicionarCartao}
                    usuarioEvento={usuarioEvento}
                    handleAlterarTexto={handleAlterarTexto}
                    handleParticiparEvento={handleParticiparEvento}
                    errorInputs={errorInputs}
                  />
                )}
                {usuarioEvento.associado && (
                  <FormularioAssociadoHallel
                    usuarioEvento={usuarioEvento}
                    handleParticiparEvento={handleParticiparEvento}
                  />
                )}
              </>
            )}
          </>
        )}
        <ModalAdicionarCartaoPE
          open={openAdicionarCartao}
          setOpen={SetopenAdicionarCartao}
          usuario={usuarioEvento}
          setUsuario={setUsuarioEvento}
        />
        <Snackbar
          open={openIsCadastrado}
          autoHideDuration={3000}
          onClose={handleCloseSnackBar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="info">
            Usuário encontrado, verifique as informações.
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};

export default ModalParticiparEvento;
