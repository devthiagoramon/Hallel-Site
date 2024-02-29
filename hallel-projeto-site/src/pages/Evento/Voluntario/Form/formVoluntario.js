import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LabelInputHallel from "../../../../components/LabelInputHallel";
import {
  ContainerInputHallelError,
  InputHallelNormal,
} from "../../../../components/TextFieldHallel/TextFieldsHallel";
import ContainerRadioButtonsHallel from "../../../../components/ContainerRadioButtonsHallel";
import RadioButtonHallel from "../../../../components/RadioButtonHallel";
import { OutlinedButtonHallel } from "../../../../components/BtnHallel";
import { useNavigate } from "react-router-dom";
import './form.css';
import { eventoVoluntariarService } from "../../../../service/EventoService";

const yupErrors = Yup.object().shape({
  nome: Yup.string().min(3, "Ao menos 3 letras").required("Nome é obrigatório"),
  email: Yup.string().email("O email tem que ser um email valido").required("Email é obrigatório"),
  dataNascimento: Yup.string()
    .required("Data de nascimento é obrigatório"),
  sexo: Yup.string().required("Sexo é obrigatório"),
});

const FormVoluntario = () => {
  const params = new URLSearchParams(window.location.search);
  const idEvento = params.get("eventId");
  const navigate = useNavigate();

  const { handleSubmit, register, setValue, formState } = useForm({
    mode: "all",
    resolver: yupResolver(yupErrors),
    defaultValues: {
      nome: "",
      email: "",
      sexo: "", // Definir o valor inicial como vazio
      dataNascimento: "",
      idEvento: idEvento,
    },
  });

  const { errors, isSubmitting, isSubmitted, values } = formState;

  const handleSubmitData = async (data) => {
    console.log("submit", data);
    try {
      const sucesso = await eventoVoluntariarService(idEvento, data); 
      if (sucesso) {
        setModalVisible(true);
      } else {
        console.error("Erro ao voluntariar para o evento: sucesso falso");
      }
    } catch (error) {
      console.error("Erro ao voluntariar para o evento:", data);
      console.error("Status da resposta:", error.response?.status);
      console.error("Data da resposta:", error.response?.data);
      console.error("Mensagem de erro:", error.message);
    }
  };  

  const closeModal = () => {
    setModalVisible(false);
    navigate('/');
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="outer-form-doador">
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="cont-form-doador"
      >
        <LabelInputHallel isRequired>Nome:</LabelInputHallel>
        {errors.nome !== undefined ? (
          <ContainerInputHallelError
            errorMessage={errors.nome.message}
          >
            <InputHallelNormal
              style={{ width: "100%" }}
              {...register("nome")}
              error
            />
          </ContainerInputHallelError>
        ) : (
          <InputHallelNormal style={{ width: "100%" }} {...register("nome")} />
        )}
        <LabelInputHallel isRequired>E-mail:</LabelInputHallel>
        {errors.email !== undefined ? (
          <ContainerInputHallelError
            errorMessage={errors.email.message}
          >
            <InputHallelNormal
              style={{ width: "100%" }}
              {...register("email")}
              error
            />
          </ContainerInputHallelError>
        ) : (
          <InputHallelNormal style={{ width: "100%" }} {...register("email")} />
        )}
        <LabelInputHallel isRequired>Número de telefone:</LabelInputHallel>
        {errors.numeroTelefone !== undefined ? (
          <ContainerInputHallelError
            style={{ width: "40%" }}
            errorMessage={errors.numeroTelefone.message}
          >
            <InputHallelNormal
              style={{ width: "100%" }}
              placeholder="(__) ____ - ____"
              error
            />
          </ContainerInputHallelError>
        ) : (
          <InputHallelNormal
            style={{ width: "40%" }}
            placeholder="(__) ____ - ____"
          />
        )}
        <div className="cont-inputs2-doador">
          <LabelInputHallel className="label-datanasc-doador-input2" isRequired>Data de nascimento:</LabelInputHallel>
          <LabelInputHallel className="label-sexo-doador-input2" isRequired>Sexo:</LabelInputHallel>
          {errors.dataNascimento !== undefined ? (
            <ContainerInputHallelError
              errorMessage={errors.dataNascimento.message}
            >
              <InputHallelNormal
                style={{ width: "100%" }}
                {...register("dataNascimento")}
                error
              />
            </ContainerInputHallelError>
          ) : (
            <InputHallelNormal
              style={{ width: "100%" }}
              {...register("dataNascimento")}
              placeholder="__/__/____"
            />
          )}
          <ContainerRadioButtonsHallel>
            <RadioButtonHallel
              isSelected={values && values.sexo === "Masculino"}
              setSelected={() => setValue("sexo", "Masculino")}
              text={"Masculino"}
            />
            <RadioButtonHallel
              isSelected={values && values.sexo === "Feminino"}
              setSelected={() => setValue("sexo", "Feminino")}
              text={"Feminino"}
            />
          </ContainerRadioButtonsHallel>
        </div>
        
        <div className="divButton" style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}> 
          <OutlinedButtonHallel
            style={{
              padding: "0.6rem 0",
              width: "50%",
              alignSelf: "center",
              fontSize: "30px",
              marginTop: '3.5rem',
            }}
            type="submit"
          >
            Enviar
          </OutlinedButtonHallel>
        </div>
      </form>

      {modalVisible && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2 className="text">Recebemos com sucesso suas informações! 
              Esteja atento ao seu email e telefone, pois entraremos em contato em breve. 
              Agradecemos pela sua colaboração!</h2>
            <div className="button-div"> 
              <button className="button" onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormVoluntario;
