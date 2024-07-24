import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, Tooltip } from "@mui/material";
import { signInService } from "api/main/mainAPI";
import ButtonH from "components/ButtonH";
import LinkH from "components/LinkH";
import TextFieldH from "components/TextFieldH";
import TextFieldIconH from "components/TextFieldH/TextFieldIconH";
import TitleH from "components/TitleH";
import { useSnackbar } from "notistack";
import { CaretLeft, Eye, EyeSlash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignInDTO } from "types/dtoTypes";
import * as yup from "yup";
import HallelLogoHD from "../../assets/logoHallelHD.png";
import { FormContainer, LogoContainer, SignContainer } from "./style";

const schema = yup.object({
  nome: yup.string().required("Digite o seu nome!").trim(),
  email: yup
    .string()
    .email("Digite um e-mail válido!")
    .required("Digite um e-mail!").trim(),
  senha: yup.string().required("Digite uma senha!").trim(),
  confirmarSenha: yup.string().required("Confirme a sua senha!").trim(),
}).required();

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInDTO>({ resolver: yupResolver(schema) });
  const navigator = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar()

  const handleGoBack = () => {
    navigator(-1);
  };

  const handleShowPassword = () => { setShowPassword(!showPassword) };

  const handleShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword) };

  const onSubmit = async (data: SignInDTO) => {
    if (data.senha !== data.confirmarSenha) {
      enqueueSnackbar("Senhas incompatíveis!", { variant: "error" })
      return
    }
    try {
      const response = await signInService(data)
      const token = response.token
      const user = response.objeto
      console.log(response)
    } catch (error) {
      console.error("Can't sign in")
    }
  }

  useEffect(() => {
    Object.values(errors).map((item) => {
      enqueueSnackbar(item.message, { variant: "error" })
    })
  }, [errors])


  return (
    <SignContainer>
      <Tooltip title="Voltar">
        <IconButton onClick={handleGoBack} className="go_back">
          <CaretLeft size={32} />
        </IconButton>
      </Tooltip>
      <LogoContainer>
        <img src={HallelLogoHD} alt="Logo Hallel" />
      </LogoContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TitleH size="large" color="white">
          Cadastro
        </TitleH>
        <main>
          <TextFieldH
            inputProps={{
              ...register("nome"),
            }}
            type="outlined"
            label="Nome: "
          />
          <TextFieldH
            inputProps={{
              ...register("email"),
            }}
            type="outlined"
            label="E-mail: "
          />
          <TextFieldIconH
            inputContainerStyle={{ borderColor: "#FAFAFA" }}
            endIcon={
              showPassword ? (
                <EyeSlash onClick={handleShowPassword} size={24} />
              ) : (
                <Eye onClick={handleShowPassword} size={24} />
              )
            }
            type="outlined"
            label="Senha"
            inputProps={{
              ...register("senha"),
              type: showPassword ? "text" : "password"
            }}
          />
          <TextFieldIconH
            inputContainerStyle={{ borderColor: "#FAFAFA" }}
            endIcon={
              showPassword ? (
                <EyeSlash onClick={handleShowConfirmPassword} size={24} />
              ) : (
                <Eye onClick={handleShowConfirmPassword} size={24} />
              )
            }
            type="outlined"
            label="Confirmar senha"
            inputProps={{
              ...register("confirmarSenha"),
              type: showConfirmPassword ? "text" : "password"
            }}
          />
          {/* <section>
            <FormControlLabel control={<Checkbox sx={{color: "#FAFAFA"}}/>} label="Lembre-me"/>
            <LinkH to='/'>Esqueceu a senha?</LinkH>
          </section> */}
          <ButtonH
            containerStyle={{
              width: "80%",
              justifySelf: "center",
              marginTop: "2rem",
            }}
            buttonProps={{ type: "submit" }}
            mode="success"
          >
            Continuar
          </ButtonH>
        </main>
        <footer>
          <label>
            * Ao continuar, você aceita nossos{" "}
            <LinkH to="/">
              Termos de condições e Política de privacidade.
            </LinkH>
          </label>
        </footer>
      </FormContainer>
    </SignContainer>
  );
};

export default SignIn;
