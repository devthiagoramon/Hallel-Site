import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdmBodyH from "../components/AdmBodyH";
import AdmContainerH from "../components/AdmContainerH";
import AdmHeaderH from "../components/AdmHeaderH";
import TableDoacoesAdm from "./components/TableDoacoesAdm";

export type FiltersDonations =
    | "Todas"
    | "Objeto"
    | "Anonimas"
    | "Membros"
    | "Pendentes"
    | "Finalizadas"
    | "Entregues"
    | "Error";

const arrFiltersDonations: FiltersDonations[] = [
    "Todas",
    "Objeto",
    "Anonimas",
    "Membros",
    "Pendentes",
    "Finalizadas",
    "Entregues",
    "Error",
];

const AdmDoacoes = () => {
    const navigation = useNavigate();
    const [filtersDonation, setFiltersDonation] =
        useState<FiltersDonations>("Todas");

    return (
        <AdmContainerH>
            <AdmHeaderH title="Doações da comunidade">
                <Button
                    startIcon={<Plus size={28} />}
                    color="primary"
                    variant="contained"
                    onClick={() =>
                        navigation("/administrador/doacoes/adicionar")
                    }
                    sx={{ height: "fit-content" }}
                >
                    Adicionar doação
                </Button>
            </AdmHeaderH>
            <AdmBodyH>
                <FormControl size="small" sx={{ mb: 4, width: 225 }}>
                    <InputLabel id="filter-select-label">Filtro doação</InputLabel>
                    <Select
                        value={filtersDonation}
                        defaultValue="Todas"
                        onChange={(e) =>
                            setFiltersDonation(e.target.value as FiltersDonations)
                        }
                        label="Filtro"
                    >
                        {arrFiltersDonations.map((filter, index) => {
                            return (
                                <MenuItem key={index} value={filter}>
                                    {filter}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <TableDoacoesAdm filter={filtersDonation} />
            </AdmBodyH>
        </AdmContainerH>
    );
};

export default AdmDoacoes;
