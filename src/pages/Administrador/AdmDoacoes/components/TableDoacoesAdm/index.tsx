import { GridColDef } from "@mui/x-data-grid";
import AdmTableH from "components/AdmTableH";

const TableDoacoesAdm = () => {
    const columns: GridColDef[] = [];

    return (
        <AdmTableH
            titleNotFound="Nenhuma doação encontrada"
            columns={columns}
        />
    );
};

export default TableDoacoesAdm;
