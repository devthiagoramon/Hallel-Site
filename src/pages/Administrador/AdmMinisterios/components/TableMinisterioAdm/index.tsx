import { IconButton, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useQueryClient } from "@tanstack/react-query";
import { deleteMinisterioAdmService } from "api/admin/ministerios/admMinisterioAPI";
import AdmTableH from "components/AdmTableH";
import DeleteModalH from "components/DeleteModalH";
import useListMinisteriosAdm from "hooks/admin/useListMinisteriosAdm";
import { ADM_QUERIES } from "hooks/queryConsts";
import { useSnackbar } from "notistack";
import { ActionsTableContainer } from "pages/Administrador/AdmEventos/components/TableAdmEvents/style";
import { PencilSimple, TrashSimple } from "phosphor-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListMinisterioDTO } from "types/admDTOTypes";

interface TableMinisterioAdmProps {
    searchText?: string;
}

const TableMinisterioAdm = ({ searchText }: TableMinisterioAdmProps) => {
    const request = useListMinisteriosAdm();
    const loading = request.isLoading;
    const data = request.data;
    const [openModalDelete, setOpenModalDelete] =
        useState<boolean>(false);
    const [selectedMinisterio, setSelectedMinisterio] =
        useState<ListMinisterioDTO>();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const navigator = useNavigate();

    const handleDeleteMinisterio = async () => {
        if (!selectedMinisterio) {
            return;
        }
        try {
            const response = await deleteMinisterioAdmService(selectedMinisterio?.id);
            setOpenModalDelete(false);
            enqueueSnackbar("Evento deletado com sucesso", {
                variant: "success",
            });
            queryClient.refetchQueries({
                queryKey: [ADM_QUERIES.LIST_MINISTERIOS_ADM],
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenDeleteModal = (ministerio: any) => {
        setSelectedMinisterio(ministerio);
        setOpenModalDelete(true);
    };
    const handleCloseDeleteModal = () => {
        setSelectedMinisterio(undefined);
        setOpenModalDelete(false);
    };

    const handleEditMinisterio = (ministerio: any) => {
        navigator("/administrador/ministerios/editar/" + ministerio.id)
    }

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
            minWidth: 200,
            maxWidth: 400,
        },
        {
            field: "",
            headerName: "Ações",
            width: 100,
            sortable: false,
            disableReorder: true,
            renderCell: (params) => (
                <ActionsTableContainer>
                    <Tooltip title="Editar ministério">
                        <IconButton
                            onClick={() => handleEditMinisterio(params.row)}
                        >
                            <PencilSimple size={24} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Deletar ministério">
                        <IconButton
                            onClick={() => handleOpenDeleteModal(params.row)}
                        >
                            <TrashSimple size={24} className="delete" />
                        </IconButton>
                    </Tooltip>
                </ActionsTableContainer>
            ),
        }
    ];

    const ministerios = useMemo(() => {
        let text = searchText?.toLowerCase() || "";
        return data?.filter((item) => item.nome.toLowerCase().includes(text))
    }, [data, searchText])

    return (
        <>
            <AdmTableH
                titleNotFound="Nenhum ministerio encontrado"
                columns={columns}
                loading={loading}
                rows={ministerios}
            />
            <DeleteModalH
                title="Deletar ministério"
                open={openModalDelete}
                children={<></>}
                onButtonDeleteAction={handleDeleteMinisterio}
                description={`Você deseja deletar ${selectedMinisterio?.nome}?`}
                onClose={handleCloseDeleteModal}
            />
        </>
    );
};

export default TableMinisterioAdm;
