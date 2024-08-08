import { TextField } from "@mui/material";
import {
    FieldErrors,
    UseFormRegister,
    UseFormSetValue,
} from "react-hook-form";
import { formatarTelefone } from "utils/masks";
import { FormDoacao } from "../..";
import { AnonimoFormsContainer } from "./style";

interface AnonimoFormsProps {
    register: UseFormRegister<FormDoacao>;
    error: FieldErrors<FormDoacao>;
    setValue: UseFormSetValue<FormDoacao>;
}

const DummyElement = () => {
    return <></>;
};

const AnonimoForms = ({
    register,
    error,
    setValue,
}: AnonimoFormsProps) => {
    const handleInputTelefoneChange = (event: any) => {
        const inputValue = event.target.value.replace(/\D/g, "");
        const maskedValue = formatarTelefone(inputValue);
        setValue("telefoneDonator", maskedValue);
    };

    return (
        <AnonimoFormsContainer>
            <TextField
                label="Nome"
                inputProps={{ ...register("nameDonator") }}
                error={!!error["nameDonator"]}
                helperText={error["nameDonator"]?.message}
            />
            <TextField
                label="E-mail"
                inputProps={{ ...register("emailDonator") }}
                error={!!error["emailDonator"]}
                helperText={error["emailDonator"]?.message}
            />
            <TextField
                label="Telefone"
                inputProps={{
                    ...register("telefoneDonator"),
                    onChange: handleInputTelefoneChange,
                }}
                error={!!error["telefoneDonator"]}
                helperText={error["telefoneDonator"]?.message}
                placeholder="(DDD) 91111-1111"
            />
        </AnonimoFormsContainer>
    );
};

export default AnonimoForms;
