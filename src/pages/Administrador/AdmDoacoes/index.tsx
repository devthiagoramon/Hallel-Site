import { Button } from "@mui/material";
import { Plus } from "phosphor-react";
import AdmBodyH from "../components/AdmBodyH";
import AdmContainerH from "../components/AdmContainerH";
import AdmHeaderH from "../components/AdmHeaderH";
import TableDoacoesAdm from "./components/TableDoacoesAdm";

const AdmDoacoes = () => {
    return (
        <AdmContainerH>
            <AdmHeaderH title="Doações da comunidade">
                <Button
                    startIcon={<Plus size={28} />}
                    color="primary"
                    variant="contained"
                    sx={{ height: "fit-content" }}
                >
                    Adicionar doação
                </Button>
            </AdmHeaderH>
            <AdmBodyH>
                <TableDoacoesAdm />
            </AdmBodyH>
        </AdmContainerH>
    );
};

export default AdmDoacoes;
