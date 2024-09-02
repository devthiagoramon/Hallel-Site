import { Button, TextField } from "@mui/material";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdmBodyH from "../components/AdmBodyH";
import AdmContainerH from "../components/AdmContainerH";
import AdmHeaderH from "../components/AdmHeaderH";
import TableMinisterioAdm from "./components/TableMinisterioAdm";

const AdmMinisterios = () => {
    const navigator = useNavigate();

    const [searchText, setSearchText] = useState<string>("");

    const handleAddNewMinisterio = () => {
        navigator("/administrador/ministerios/adicionar");
    };

    return (
        <AdmContainerH>
            <AdmHeaderH title="Ministérios da comunidade">
                <Button
                    variant="contained"
                    startIcon={<Plus size={28} />}
                    onClick={handleAddNewMinisterio}
                >
                    Adicionar ministerio
                </Button>
            </AdmHeaderH>
            <AdmBodyH>
                <TextField
                    id="search-ministerio-text-field"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    label="Pesquisar por nome"
                    sx={{ mb: 4 }}
                />
                <TableMinisterioAdm searchText={searchText} />
            </AdmBodyH>
        </AdmContainerH>
    );
};

export default AdmMinisterios;
