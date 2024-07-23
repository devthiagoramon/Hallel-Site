import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, FormControlLabel, IconButton, Tooltip } from "@mui/material";
import { signUpService } from "api/main";
import ButtonH from "components/ButtonH";
import LinkH from "components/LinkH";
import TextFieldH from "components/TextFieldH";
import TextFieldIconH from "components/TextFieldH/TextFieldIconH";
import TitleH from "components/TitleH";
import { useSnackbar } from "notistack";
import { FormContainer, LogoContainer, SignContainer } from "pages/SignIn/style";
import { Eye, EyeSlash, House } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignUpDTO } from "types/dtoTypes";
import * as yup from "yup";
import HallelLogoHD from "../../assets/logoHallelHD.png";

const schema = yup.object({
  email: yup.string().email("Digite um e-mail válido!").required("Digite um e-mail!").trim(),
  senha: yup.string().required("Digite a tua senha!").trim()
}).required()

const SignUp = () => {
  const navigator = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar()

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpDTO>({ resolver: yupResolver(schema) })

  const handleShowPassword = () => { setShowPassword(!showPassword) };

  const handleGoBack = () => {
    navigator(-1);
  };

  const onSubmit = async (data: SignUpDTO) => {
    try {
      const response = await signUpService(data);
      console.log(response)
    } catch (error) {
      console.error("Can't sing up")
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
          <House size={32} />
        </IconButton>
      </Tooltip>
      <LogoContainer>
        <img src={HallelLogoHD} alt="Logo Hallel" />
      </LogoContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TitleH size="large" color="white">
          Login
        </TitleH>
        <main>
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
          <section>
            <FormControlLabel control={<Checkbox sx={{ color: "#FAFAFA" }} />} label="Lembre-me" />
            <LinkH to='/'>Esqueceu a senha?</LinkH>
          </section>
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
        <footer><LinkH textStyle={{ justifySelf: "center" }} to="/signIn">Não possui conta? Acesse aqui</LinkH></footer>
      </FormContainer>
    </SignContainer>
  )
}

export default SignUp