import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NotFoundTableComponentH from "components/NotFoundTableComponent";
import dayjs from "dayjs";
import { ListEventsAdmDTO } from "types/admDTOTypes";
import { LocalEvento } from "types/hallelTypes";
import { RowTextComponent } from "./style";

interface TableAdmEventsProps {
    events: ListEventsAdmDTO[];
}

const TableAdmEvents = ({ events }: TableAdmEventsProps) => {
    const columns: GridColDef[] = [
        {
            field: "titulo",
            headerName: "Titulo",
            minWidth: 200,
            maxWidth: 300,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
        {
            field: "descricao",
            headerName: "Descrição",
            valueGetter: (e) => (!!!e ? "Sem descrição" : e),
            minWidth: 300,
            maxWidth: 500,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
        {
            field: "date",
            headerName: "Data",
            valueGetter: (e) => dayjs(e).format("DD/MM/YYYY"),
            width: 200,
            maxWidth: 300,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
        {
            field: "localEvento",
            headerName: "Local",
            valueGetter: (localEvento: LocalEvento) =>
                localEvento.localizacao,
            minWidth: 300,
            maxWidth: 500,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
    ];

    return (
        <DataGrid
            slots={{
                noRowsOverlay: () => (
                    <NotFoundTableComponentH title="Nenhum evento encontrado!" />
                ),
                noResultsOverlay: () => (
                    <NotFoundTableComponentH title="Nenhum evento encontrado!" />
                ),
            }}
            sx={{ height: 600, maxHeight: "100%" }}
            hideFooter
            rows={events}
            columns={columns}
        />
    );
};

export default TableAdmEvents;
