import { GridColDef } from "@mui/x-data-grid";
import AdmTableH from "components/AdmTableH";
import dayjs from "dayjs";
import { useListDoacaoAdm } from "hooks/admin/useListDoacaoAdm";
import { FiltersDonations } from "../..";

interface TableDoacoesAdmProps {
    filter: FiltersDonations;
}

const TableDoacoesAdm = ({ filter }: TableDoacoesAdmProps) => {
    const columns: GridColDef[] = [
        {
            field: "anonimo",
            headerName: "Anonimo",
            valueGetter: (value) => (value ? "Sim" : "Não"),
        },
        { field: "nameDonator", headerName: "Nome", minWidth: 200 },
        { field: "telefoneDonator", headerName: "Telefone" },
        { field: "emailDonator", headerName: "E-mail", minWidth: 200 },
        {
            field: "objeto",
            headerName: "Objeto",
            valueGetter: (value) => (value ? "Sim" : "Não"),
        },
        {
            field: "nameObjeto",
            headerName: "Nome do objeto",
            minWidth: 150,
        },
        {
            field: "valor",
            headerName: "Valor/Quantidade",
            valueGetter: (value, row) => {
                if (row.objeto) {
                    return `${value} UN`;
                } else {
                    return new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(value);
                }
            },
            minWidth: 150,
        },
        {
            field: "date",
            headerName: "Data da doação",
            minWidth: 150,
            valueGetter: (e) => dayjs(e).format("DD/MM/YYYY"),
        },

        {
            field: "dateEntregue",
            headerName: "Data recebida (Objeto)",
            minWidth: 200,
            valueGetter: (value) => {
                if (!value) {
                    return "Não recebido";
                }
                return dayjs(value).format("DD/MM/YYYY");
            },
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 125,
            valueGetter: (value: string) =>
                `${value[0].toUpperCase()}${value.substring(1)}`,
        },
    ];

    const request = useListDoacaoAdm(filter);
    const doacoes = request.data;
    const isLoading = request.isLoading;

    return (
        <AdmTableH
            titleNotFound="Nenhuma doação encontrada"
            columns={columns}
            loading={isLoading}
            rows={doacoes}
        />
    );
};

export default TableDoacoesAdm;
