import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectProps,
} from "@mui/material";
import { TipoDoadoresAdm } from "types/admTypes";

interface AdmSelectTiposDoadoresAdmProps {
    onSelect: (tipo: TipoDoadoresAdm) => void;
    selectProps?: SelectProps;
}

const AdmSelectTiposDoadoresAdm = ({
    onSelect,
    selectProps,
}: AdmSelectTiposDoadoresAdmProps) => {
    return (
        <FormControl sx={{ minWidth: 230 }}>
            <InputLabel required>Selecione um doador</InputLabel>
            <Select
                onChange={(e) => onSelect(e.target.value as TipoDoadoresAdm)}
                inputProps={{
                    placeholder: "Selecione um doador",
                }}
                {...selectProps}
            >
                <MenuItem value={undefined}>Doador</MenuItem>
                <MenuItem value={"anonimo"}>
                    Anonimo (Não Cadastrado)
                </MenuItem>
                <MenuItem value={"membro"}>Membro</MenuItem>
            </Select>
        </FormControl>
    );
};

export default AdmSelectTiposDoadoresAdm;
