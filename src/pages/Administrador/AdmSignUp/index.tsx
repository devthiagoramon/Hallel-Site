import { yupResolver } from "@hookform/resolvers/yup";
import { Button, IconButton, TextField } from "@mui/material";
import { loginAdmService } from "api/admin/admAPI";
import TitleH from "components/TitleH";
import { useSnackbar } from "notistack";
import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveTokenAPI } from "utils/mainUtils";
import * as yup from "yup";
import { AdmSignUpContainer, FormSignUpContainer } from "./style";

const schema = yup
    .object({
        email: yup
            .string()
            .email("Digite um email válido!")
            .required("Digite o email!"),
        senha: yup.string().required("Digite a senha!"),
    })
    .required();

const AdmSignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigation = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async (data: any) => {
        try {
            const response = await loginAdmService(data);
            saveTokenAPI(response.token);
            navigation("/administrador");
        } catch (error) {
            console.error(error);
            enqueueSnackbar("E-mail ou senha incorretas!", {
                variant: "error",
            });
        }
    };

    return (
        <AdmSignUpContainer>
            <FormSignUpContainer onSubmit={handleSubmit(onSubmit)}>
                <TitleH color="black" size="medium">
                    Administrador - Login
                </TitleH>
                <TextField
                    label="E-mail"
                    inputProps={{ ...register("email") }}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Senha"
                    inputProps={{ ...register("senha") }}
                    error={Boolean(errors.senha)}
                    helperText={errors.senha?.message}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeSlash /> : <Eye />}
                            </IconButton>
                        ),
                    }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Entrar
                </Button>
            </FormSignUpContainer>
        </AdmSignUpContainer>
    );
};

export default AdmSignUp;
