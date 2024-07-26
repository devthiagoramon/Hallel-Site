import { yupResolver } from "@hookform/resolvers/yup";
import { editMembroInfoService } from "api/user/userAPI";
import ButtonH from "components/ButtonH";
import TextFieldH from "components/TextFieldH";
import TextFieldSelectImageH from "components/TextFieldH/TextFieldSelectImageH";
import dayjs from "dayjs";
import { PaperPlaneTilt } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    editUserPhotoRedux,
    saveUserInfoRedux,
    selectUser,
} from "store/userSlice";
import { EditProfileDTO } from "types/dtoTypes";
import { formatarCPF, formatarTelefone } from "utils/masks";
import * as yup from "yup";
import { PersonalInfosContainer } from "./style";

const schema = yup
    .object({
        nome: yup.string().required("Digite o seu nome!"),
        email: yup.string().email().required("Digite o seu e-mail!"),
        dataNascimento: yup.string().nullable(),
        telefone: yup.string().nullable(),
        cpf: yup.string().nullable(),
    })
    .required();
const PersonalInfos = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const {
        handleSubmit,
        register,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nome: user.name,
            email: user.email,
            cpf: user.cpf,
            dataNascimento: user.dataNascimento
                ? dayjs(user.dataNascimento).format("YYYY-MM-DD")
                : null,
            telefone: user.telefone,
        },
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async (data: any) => {
        const dto: EditProfileDTO = {
            ...data,
            dataNascimento: dayjs(data.dataNascimento).toISOString(),
            id: user.id,
        };

        try {
            const response = await editMembroInfoService(dto);
            dispatch(saveUserInfoRedux(response));
        } catch (error) {
            console.log(error);
        }
    };
    const [selectedImage, setSelectedImage] = useState<
        string | ArrayBuffer | undefined
    >(undefined);

    const handleInputCPFChange = (event: any) => {
        const inputValue = event.target.value.replace(/\D/g, "");
        const maskedValue = formatarCPF(inputValue);
        setValue("cpf", maskedValue);
    };

    const handleInputTelefoneChange = (event: any) => {
        const inputValue = event.target.value.replace(/\D/g, "");
        const maskedValue = formatarTelefone(inputValue);
        setValue("telefone", maskedValue);
    };

    useEffect(() => {
        if (selectedImage) {
            dispatch(editUserPhotoRedux(selectedImage));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImage]);

    return (
        <PersonalInfosContainer onSubmit={handleSubmit(onSubmitHandler)}>
            <TextFieldH
                label="Nome"
                type="contained"
                inputProps={{ ...register("nome") }}
            />
            <TextFieldH
                label="E-mail"
                type="contained"
                inputProps={{ ...register("email") }}
            />
            <TextFieldH
                label="CPF"
                type="contained"
                inputProps={{
                    ...register("cpf"),
                    onChange: (e) => handleInputCPFChange(e),
                    placeholder: "111.222.333-44",
                }}
            />
            <TextFieldH
                label="Data de nascimento"
                type="contained"
                inputProps={{ ...register("dataNascimento"), type: "date" }}
            />
            <TextFieldSelectImageH
                label="Editar foto do perfil"
                setValue={setSelectedImage}
            />
            <TextFieldH
                label="Telefone"
                type="contained"
                inputProps={{
                    ...register("telefone"),
                    type: "phone",
                    placeholder: "(92) 99999-1111",
                    onChange: (e) => handleInputTelefoneChange(e),
                }}
            />
            <ButtonH
                containerStyle={{
                    width: "90%",
                    padding: 0,
                    height: "100%",
                    alignSelf: "center",
                    justifySelf: "center",
                }}
                mode="secondary"
                endIcon={
                    <PaperPlaneTilt style={{ marginRight: 16 }} size={24} />
                }
            >
                Atualizar
            </ButtonH>
        </PersonalInfosContainer>
    );
};

export default PersonalInfos;
