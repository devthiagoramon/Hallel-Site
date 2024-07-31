import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NotFoundTableComponentH from "components/NotFoundTableComponent";
import dayjs from "dayjs";
import { ListEventsAdmDTO } from "types/admDTOTypes";
import { LocalEvento } from "types/hallelTypes";

interface TableAdmEventsProps {
    events: ListEventsAdmDTO[];
}

const TableAdmEvents = ({ events }: TableAdmEventsProps) => {
    const columns: GridColDef[] = [
        { field: "titulo", headerName: "Titulo", width: 150 },
        { field: "descricao", headerName: "Descrição", width: 150 },
        {
            field: "date",
            headerName: "Data",
            valueSetter: (e) => dayjs(e).format("DD/MM/YYYY"),
            width: 150,
        },
        {
            field: "localEvento",
            headerName: "Local",
            valueSetter: (localEvento: LocalEvento) =>
                localEvento.localizacao,
            width: 150,
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
