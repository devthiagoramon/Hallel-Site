import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectProps,
} from "@mui/material";
import { TipoDoacaoAdm } from "types/admTypes";

interface AdmSelectTiposDoacaoAdmProps {
    onSelect: (tipo: TipoDoacaoAdm) => void;
    selectProps?: SelectProps;
}

const AdmSelectTiposDoacaoAdm = ({
    onSelect,
    selectProps,
}: AdmSelectTiposDoacaoAdmProps) => {
    return (
        <FormControl sx={{ minWidth: 250 }}>
            <InputLabel required>Selecione o tipo da doação</InputLabel>
            <Select
                onChange={(e) => onSelect(e.target.value as TipoDoacaoAdm)}
                {...selectProps}
            >
                <MenuItem value={undefined}>Tipo da doação</MenuItem>
                <MenuItem value={"dinheiro"}>Dinheiro</MenuItem>
                <MenuItem value={"objeto"}>Objeto</MenuItem>
            </Select>
        </FormControl>
    );
};

export default AdmSelectTiposDoacaoAdm;
