import { IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NotFoundTableComponentH from "components/NotFoundTableComponent";
import dayjs from "dayjs";
import { PencilSimple, TrashSimple } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ListEventsAdmDTO } from "types/admDTOTypes";
import { LocalEvento } from "types/hallelTypes";
import { ActionsTableContainer, RowTextComponent } from "./style";

interface TableAdmEventsProps {
    events: ListEventsAdmDTO[];
}

const TableAdmEvents = ({ events }: TableAdmEventsProps) => {

    const navigation = useNavigate();

    const handleEditEvent = (id: string) => {
        navigation(`/administrador/eventos/${id}/editar`)
    }

    const columns: GridColDef[] = [
        {
            field: "titulo",
            headerName: "Titulo",
            minWidth: 175,
            maxWidth: 300,
            disableColumnMenu: true,
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
            disableColumnMenu: true,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
        {
            field: "date",
            headerName: "Data",
            valueGetter: (e) => dayjs(e).format("DD/MM/YYYY"),
            width: 175,
            maxWidth: 300,
            disableColumnMenu: true,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
        {
            field: "localEvento",
            headerName: "Local",
            valueGetter: (localEvento: LocalEvento) =>
                localEvento.localizacao,
            minWidth: 350,
            maxWidth: 500,
            disableColumnMenu: true,
            renderCell: (params) => (
                <RowTextComponent>{params.value}</RowTextComponent>
            ),
        },
        {
            field: "id",
            headerName: "Ações",
            disableColumnMenu: true,
            disableReorder: false,
            sortable: false,
            renderCell: (params) => (
                <ActionsTableContainer>
                    <Tooltip title="Editar evento">
                        <IconButton onClick={() => handleEditEvent(params.value)}>
                            <PencilSimple size={24} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Deletar evento">
                        <IconButton>
                            <TrashSimple size={24} className="delete" />
                        </IconButton>
                    </Tooltip>
                </ActionsTableContainer>
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
