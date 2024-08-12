import {
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    GridColDef,
    GridRowParams,
    MuiEvent,
} from "@mui/x-data-grid";
import AdmTableH from "components/AdmTableH";
import dayjs from "dayjs";
import { useListDoacaoAdm } from "hooks/admin/useListDoacaoAdm";
import { Pencil, Trash } from "phosphor-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startEditDonationAdmRedux } from "store/admDonationSlice";
import { CriarEditarDoacaoDTO } from "types/admDTOTypes";
import { FiltersDonations } from "../..";

interface TableDoacoesAdmProps {
    filter: FiltersDonations;
}

const TableDoacoesAdm = ({ filter }: TableDoacoesAdmProps) => {
    const dispatch = useDispatch();

    const [selectedObject, setSelectedObject] =
        useState<CriarEditarDoacaoDTO>();
    const [anchorElMenu, setAnchorElMenu] = useState<
        (EventTarget & Element) | null
    >(null);
    const openMenu = Boolean(anchorElMenu);

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
    const navigation = useNavigate();

    const handleClickRowTable = (
        params: GridRowParams,
        event: MuiEvent<React.MouseEvent>,
    ) => {
        setSelectedObject(params.row);
        setAnchorElMenu(event.currentTarget);
    };

    const handleEditDonation = () => {
        dispatch(startEditDonationAdmRedux(selectedObject));
        navigation("/administrador/doacoes/editar");
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
        setSelectedObject(undefined);
    };

    return (
        <>
            <AdmTableH
                titleNotFound="Nenhuma doação encontrada"
                columns={columns}
                loading={isLoading}
                rows={doacoes}
                onRowClick={(params, event) =>
                    handleClickRowTable(params, event)
                }
            />
            <Menu
                open={openMenu}
                anchorEl={anchorElMenu}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleEditDonation}>
                    <ListItemIcon>
                        <Pencil size={28} color="#42A5F5" />
                    </ListItemIcon>
                    <ListItemText>Editar</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Trash size={28} color="#F44336" />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "#F44336" }}>
                        Excluir
                    </ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};

export default TableDoacoesAdm;
