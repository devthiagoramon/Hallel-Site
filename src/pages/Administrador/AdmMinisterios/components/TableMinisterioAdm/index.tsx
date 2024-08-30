import { GridColDef } from "@mui/x-data-grid";
import AdmTableH from "components/AdmTableH";
import useListMinisteriosAdm from "hooks/admin/useListMinisteriosAdm";
import { useMemo } from "react";

interface TableMinisterioAdmProps {
    searchText?: string;
}

const TableMinisterioAdm = ({ searchText }: TableMinisterioAdmProps) => {
    const request = useListMinisteriosAdm();
    const loading = request.isLoading;
    const data = request.data;

    const columns: GridColDef[] = [
        { field: "nome", headerName: "Nome do ministerio", width: 200 },
        {
            field: "coordenador",
            headerName: "Nome do coordenador",
            valueGetter: (value: any) => value.nome,
            width: 250,
        },
        {
            field: "viceCoordenador",
            headerName: "Nome do vice coordenador",
            valueGetter: (value: any) => value.nome,
            width: 250,
        },
        {
            field: "descricao",
            headerName: "Descrição",
            maxWidth: 400,
        },
    ];

    const ministerios = useMemo(() => {
        let text = searchText?.toLowerCase() || "";
        return data?.filter((item) => item.nome.toLowerCase().includes(text))
    }, [data, searchText])

    return (
        <AdmTableH
            titleNotFound="Nenhum ministerio encontrado"
            columns={columns}
            loading={loading}
            rows={ministerios}
        />
    );
};

export default TableMinisterioAdm;
