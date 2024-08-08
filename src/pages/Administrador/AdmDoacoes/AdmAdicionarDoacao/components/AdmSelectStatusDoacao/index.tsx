import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectProps,
} from "@mui/material";
import { StatusDoacao } from "types/admTypes";

interface AdmSelectStatusDoacaoProps {
    onSelect: (status: StatusDoacao) => void;
    isObjeto?: boolean;
    selectProps?: SelectProps;
}

const AdmSelectStatusDoacao = ({
    onSelect,
    isObjeto,
    selectProps,
}: AdmSelectStatusDoacaoProps) => {
    return (
        <FormControl sx={{ minWidth: 300 }}>
            <InputLabel required>Qual é o estado da doação?</InputLabel>
            <Select
                onChange={(e) => onSelect(e.target.value as StatusDoacao)}
                inputProps={{
                    placeholder: "Selecione um doador",
                }}
                {...selectProps}
            >
                <MenuItem value={undefined}>Status</MenuItem>
                <MenuItem
                    value={StatusDoacao.PENDENTE}
                    sx={{ color: "#ffcc00" }}
                >
                    Pendente
                </MenuItem>
                {isObjeto ? (
                    <MenuItem
                        value={StatusDoacao.ENTREGUE}
                        sx={{ color: "#66BB6A" }}
                    >
                        Entregue
                    </MenuItem>
                ) : (
                    <MenuItem
                        value={StatusDoacao.FINALIZADO}
                        sx={{ color: "#66BB6A" }}
                    >
                        Finalizado
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    );
};

export default AdmSelectStatusDoacao;
