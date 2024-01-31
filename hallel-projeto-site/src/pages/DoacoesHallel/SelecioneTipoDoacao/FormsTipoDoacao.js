import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import LabelInputHallel from "../../../components/LabelInputHallel";
import { SelectHallel } from "../../../components/SelectHallel";
import RadioButtonHallel from "../../../components/RadioButtonHallel";
import CheckBoxHallel from "../../../components/CheckBoxHallel";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ContainerInputHallelError,
  InputHallelNormal,
} from "../../../components/TextFieldHallel/TextFieldsHallel";
import AlertHallel from "../../../components/AlertHallel";
import {
  OutlinedButtonHallel,
  OutlinedEmptyButtonHallel,
} from "../../../components/BtnHallel";

const yupErrors = Yup.object().shape({
  diaRenovacao: Yup.date().required("Periodo necessário"),
  outroValor: Yup.number()
    .typeError("Não é um número")
    .min(1, "Somente valores superiores a R$ 0")
    .required("Especifique outro valor"),
});

const FormsTipoDoacao = (props) => {
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "all",
    resolver: yupResolver(yupErrors),
    defaultValues: {
      diaRenovacao: new Date(),
      outroValor: 0,
    },
  });
  const { errors } = formState;
  const [doarObjeto, setDoarObjeto] = useState(false);
  const [periodo, setPeriodo] = useState("Mensalmente");
  const [valorDoacao, setValorDoacao] = useState(50);
  const handleSubmitData = (data) => {
    console.log("data", data);
  };

  function ButtonsValores(props) {
    const valores = [20, 30, 50, 80, 100];
    return (
      <>
        {valores.map((valor, index) => {
          return (
            <>
              {valor === props.valor ? (
                <OutlinedButtonHallel
                  key={index}
                  style={{ padding: "1rem" }}
                  onClick={() => props.setValorDoacao(valor)}
                  type="button"
                >
                  {valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </OutlinedButtonHallel>
              ) : (
                <OutlinedEmptyButtonHallel
                  key={index}
                  onClick={() => props.setValorDoacao(valor)}
                  style={{ padding: "1rem" }}
                  type="button"
                >
                  {valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </OutlinedEmptyButtonHallel>
              )}
            </>
          );
        })}
      </>
    );
  }

  return (
    <div className="outer-form-doador">
      <form
        className="cont-form-tipo-doacao"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="top-cont-form-tipo-doacao">
          <div>
            <LabelInputHallel>Periodo:</LabelInputHallel>
            <SelectHallel
              style={{ marginLeft: "1rem" }}
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            >
              <option value={"pontualmente"}>Pontualmente</option>
              <option value={"mensalmente"}>Mensalmente</option>
            </SelectHallel>
          </div>
          <div>
            <CheckBoxHallel
              text={"Desejo doar objetos/alimentos"}
              isChecked={doarObjeto}
              setIsChecked={() => setDoarObjeto(!doarObjeto)}
            />
            {doarObjeto === true ? (
              (props.setEtapa(2.2), setDoarObjeto(false))
            ) : (
              <></>
            )}
          </div>
        </div>
        {periodo === "mensalmente" && (
          <>
            <LabelInputHallel>
              Escolher dia do mês para a renovação
            </LabelInputHallel>
            {errors.diaRenovacao !== undefined ? (
              <ContainerInputHallelError
                errorMessage={errors.diaRenovacao.message}
                style={{ width: "40%" }}
              >
                <InputHallelNormal
                  {...register("diaRenovacao")}
                  type="date"
                  error
                  style={{ width: "100%" }}
                />
              </ContainerInputHallelError>
            ) : (
              <InputHallelNormal
                {...register("diaRenovacao")}
                type="date"
                style={{ width: "40%" }}
              />
            )}
          </>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <AlertHallel
            style={{ width: "100%" }}
            text={
              "Caso escolha um período fixo, a renovação do pagamento será automática."
            }
          />
        </div>
        <LabelInputHallel>Valores:</LabelInputHallel>
        <div className="container_valores_doacao">
          <ButtonsValores valor={valorDoacao} setValorDoacao={setValorDoacao} />
        </div>
        <div className="container_outro_valor_doacao">
          {valorDoacao === 0 ? (
            <>
              <OutlinedButtonHallel
                style={{ padding: "1rem", maxHeight: "55px" }}
                onClick={() => {
                  setValorDoacao(50);
                }}
                type="button"
              >
                Escolher outro valor
              </OutlinedButtonHallel>
              {errors.outroValor !== undefined ? (
                <ContainerInputHallelError
                  errorMessage={errors.outroValor.message}
                  style={{ width: "50%" }}
                >
                  <InputHallelNormal
                    type="number"
                    {...register("outroValor")}
                    error
                    style={{ width: "100%" }}
                  />
                </ContainerInputHallelError>
              ) : (
                <InputHallelNormal
                  style={{ width: "50%" }}
                  {...register("outroValor")}
                />
              )}
            </>
          ) : (
            <OutlinedEmptyButtonHallel
              style={{
                padding: "1rem",
                margin: "0 auto",
              
              }}
              type="button"
              onClick={() => {
                setValorDoacao(0);
              }}
            >
              Escolher outro valor
            </OutlinedEmptyButtonHallel>
          )}
        </div>
        <OutlinedButtonHallel
          style={{
            padding: "1rem",
            width: "30%",
            height: "4.5rem",
            fontSize: "30px",
            margin: "0 auto",
            position: "absolute",
            alignSelf: "center",
            marginTop: "16rem",
          }}
          type="submit"
          onClick={() => props.setEtapa(3)}
        >
          Continuar
        </OutlinedButtonHallel>
      </form>
    </div>
  );
};

export default FormsTipoDoacao;
