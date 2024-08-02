import { IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQueryClient } from "@tanstack/react-query";
import { deleteEventAdmService } from "api/admin/eventos/eventosAdmAPI";
import DeleteModalH from "components/DeleteModalH";
import NotFoundTableComponentH from "components/NotFoundTableComponent";
import dayjs from "dayjs";
import { ADM_QUERIES } from "hooks/queryConsts";
import { useSnackbar } from "notistack";
import { PencilSimple, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListEventsAdmDTO } from "types/admDTOTypes";
import { LocalEvento } from "types/hallelTypes";
import { ActionsTableContainer, RowTextComponent } from "./style";

interface TableAdmEventsProps {
    events: ListEventsAdmDTO[];
}

const TableAdmEvents = ({ events }: TableAdmEventsProps) => {
    const navigation = useNavigate();
    const [openModalDelete, setOpenModalDelete] =
        useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] =
        useState<ListEventsAdmDTO>();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    const handleEditEvent = (id: string) => {
        navigation(`/administrador/eventos/${id}/editar`);
    };

    const handleDeleteEvent = async () => {
        if (!selectedEvent) {
            return;
        }
        try {
            const response = await deleteEventAdmService(selectedEvent.id);
            setOpenModalDelete(false);
            enqueueSnackbar("Evento deletado com sucesso", {
                variant: "success",
            });
            queryClient.refetchQueries({
                queryKey: [ADM_QUERIES.LIST_EVENTS_ADM],
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenDeleteModal = (event: any) => {
        setSelectedEvent(event);
        setOpenModalDelete(true);
    };
    const handleCloseDeleteModal = () => {
        setSelectedEvent(undefined);
        setOpenModalDelete(false);
    };

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
            field: "",
            headerName: "Ações",
            disableColumnMenu: true,
            disableReorder: false,
            sortable: false,
            renderCell: (params) => (
                <ActionsTableContainer>
                    <Tooltip title="Editar evento">
                        <IconButton
                            onClick={() => handleEditEvent(params.row.id)}
                        >
                            <PencilSimple size={24} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Deletar evento">
                        <IconButton
                            onClick={() => handleOpenDeleteModal(params.row)}
                        >
                            <TrashSimple size={24} className="delete" />
                        </IconButton>
                    </Tooltip>
                </ActionsTableContainer>
            ),
        },
    ];

    return (
        <>
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
            <DeleteModalH
                title="Deletar evento"
                onButtonDeleteAction={handleDeleteEvent}
                open={openModalDelete}
                description={`Você deseja deletar ${selectedEvent?.titulo}?`}
                children={<></>}
                onClose={handleCloseDeleteModal}
            />
        </>
    );
};

export default TableAdmEvents;
