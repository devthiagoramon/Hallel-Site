import React from "react";
import { useForm } from "react-hook-form";
import LabelInputHallel from "../../../../components/LabelInputHallel";
import { InputHallelNormal } from "../../../../components/TextFieldHallel/TextFieldsHallel";
import { OutlinedButtonHallel } from "../../../../components/BtnHallel";
import { loginAdministrador } from "../../../../service/AdministradorService";
import { exibirNotificacao } from "../../../../utils/utilNotification.tsx";
import { loginSave } from "../../../Entrar/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormsAdm = () => {
  const { register, handleSubmit } = useForm();
  const dispacher = useDispatch();
  const navigator = useNavigate();

  const handleSubmitData = async (data) => {
    console.log(data);
    try {
      let response = await loginAdministrador(data);
      let rolesName = [];
      response.objeto.roles.map((role) => {
        rolesName.push(role.name);
      });
      let payloadRedux = {
        id: response.objeto.id,
        nome: response.objeto.nome,
        email: response.objeto.email,
        roles: [...rolesName],
        token: response.token,
        imagem: response.objeto.imagem,
      };
      dispacher(loginSave(payloadRedux));
      exibirNotificacao("Entrou com sucesso", "success");
      setTimeout(() => {
        navigator("/administrador");
      }, 3000);
    } catch (e) {
      console.error(e);
      setTimeout(() => {}, 3000);
      exibirNotificacao("Error ao entrar", "error");
      return;
    }
  };
  return (
    <div className="outer_formulario_adm">
      <form
        className="formulario_adm"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="container_inputs_forms_adm">
          <LabelInputHallel isRequired>E-mail</LabelInputHallel>
          <InputHallelNormal
            {...register("email")}
            style={{ width: "100%", height: 45 }}
          />
        </div>
        <div className="container_inputs_forms_adm">
          <LabelInputHallel isRequired>Senha</LabelInputHallel>
          <InputHallelNormal
            type="password"
            {...register("senha")}
            style={{ width: "100%", height: 45 }}
          />
        </div>
        <div className="container_btn_forms_adm">
          <OutlinedButtonHallel
            type="submit"
            style={{ width: 250, height: 45 }}
          >
            Conectar
          </OutlinedButtonHallel>
        </div>
      </form>
    </div>
  );
};

export default FormsAdm;
