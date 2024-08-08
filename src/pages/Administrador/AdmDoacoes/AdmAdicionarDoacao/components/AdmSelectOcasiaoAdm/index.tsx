import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectProps,
} from "@mui/material";
import { TipoDoadoresAdm } from "types/admTypes";

interface AdmSelectOcasiaoDoacaoAdmProps {
    onSelect: (tipo: TipoDoadoresAdm) => void;
    selectProps?: SelectProps;
}

const AdmSelectOcasiaoDoacaoAdm = ({
    onSelect,
    selectProps,
}: AdmSelectOcasiaoDoacaoAdmProps) => {
    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Ocasião</InputLabel>
            <Select
                onChange={(e) => onSelect(e.target.value as TipoDoadoresAdm)}
                {...selectProps}
            >
                <MenuItem value={"nenhum"}>Nenhum</MenuItem>
                <MenuItem value={"evento"}>Evento</MenuItem>
                <MenuItem value={"retiro"}>Retiro</MenuItem>
            </Select>
        </FormControl>
    );
};

export default AdmSelectOcasiaoDoacaoAdm;
