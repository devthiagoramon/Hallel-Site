import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LabelInputHallel from "../../../components/LabelInputHallel";
import {
  ContainerInputHallelError,
  InputHallelNormal,
} from "../../../components/TextFieldHallel/TextFieldsHallel";
import ContainerRadioButtonsHallel from "../../../components/ContainerRadioButtonsHallel";
import RadioButtonHallel from "../../../components/RadioButtonHallel";
import { OutlinedButtonHallel } from "../../../components/BtnHallel";
import CheckBoxHallel from "../../../components/CheckBoxHallel";

const yupErrors = Yup.object().shape({
  nome: Yup.string().min(3, "Ao menos 3 letras").required("Nome é obrigatório"),
  email: Yup.string().email("O email tem que ser um email valido").required("Email é obrigatório"),
  numeroTelefone: Yup.string()
    .min(10 || 11, "Número invalido")
    .required("Número de telefone é obrigatório"),
  dataNascimento: Yup.date()
    .max(new Date(), "Data de nascimento incorreta")
    .required("Data de nascimento é obrigatório"),
  sexo: Yup.string(),
  concordo: Yup.boolean().required("Recusa das políticas de privacidade"),
});

const FormsDoador = (props) => {
  const { handleSubmit, register, formState, getValues } = useForm({
    mode: "all",
    resolver: yupResolver(yupErrors),
    defaultValues: {
      nome: "",
      email: "",
      numeroTelefone: "",
      dataNascimento: new Date(),
      concordo: false,
    },
  });
  const { errors, isSubmitting, isSubmitted } = formState;
  const [sexoInput, setSexoInput] = useState("Masculino");
  const [concordoInput, setConcordoInput] = useState(false);

  const handleSubmitData = (data) => {
    console.log("submit", data);
    props.setEtapa(2)

  };

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
              {...register("numeroTelefone")}
              error
            />
          </ContainerInputHallelError>
        ) : (
          <InputHallelNormal
            style={{ width: "40%" }}
            placeholder="(__) ____ - ____"
            {...register("numeroTelefone")}
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
                type="date"
              />
            </ContainerInputHallelError>
          ) : (
            <InputHallelNormal
              style={{ width: "100%" }}
              {...register("dataNascimento")}
              type="date"
            />
          )}
          <ContainerRadioButtonsHallel>
            <RadioButtonHallel
              isSelected={sexoInput === "Masculino"}
              setSelected={() => setSexoInput("Masculino")}
              text={"Masculino"}
            />
            <RadioButtonHallel
              isSelected={sexoInput === "Feminino"}
              setSelected={() => setSexoInput("Feminino")}
              text={"Feminino"}
            />
          </ContainerRadioButtonsHallel>
        </div>
        <CheckBoxHallel
          style={{ marginTop: "20px" }}
          text={"Li e aceito as politicas de privacidade"}
          isChecked={concordoInput}
          setIsChecked={setConcordoInput}
        />
        
        <OutlinedButtonHallel
          style={{
            padding: "0.6rem 0",
            marginTop: "-140px",
            width: "50%",
            alignSelf: "center",
            fontSize: "30px",
          }}
          type="submit"
        >
          Doar agora!
        </OutlinedButtonHallel>
      </form>
    </div>
  );
};

export default FormsDoador;
