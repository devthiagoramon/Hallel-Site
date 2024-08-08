import { Button, Divider, IconButton, Tooltip } from "@mui/material";
import { Pencil, Plus, Trash } from "phosphor-react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { DoacaoObjetoDTO } from "types/admDTOTypes";
import AddEditObjetoDoacaoModalH from "./AddEditObjetoDoacaoModalH";
import {
    AdmObjetoDoacaoHContainer,
    AdmObjetoDoacaoHItem,
} from "./style";

interface AdmObjetoDoacaoHProps {
    listObjects: DoacaoObjetoDTO[];
    setListObjects: Dispatch<SetStateAction<DoacaoObjetoDTO[]>>;
    error?: ReactNode;
}

const AdmObjetoDoacaoH = ({
    listObjects,
    setListObjects,
    error,
}: AdmObjetoDoacaoHProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedObjectToEdit, setSelectedObjectToEdit] =
        useState<DoacaoObjetoDTO>();

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedObjectToEdit(undefined);
    };

    const handleEditObject = (object: DoacaoObjetoDTO) => {
        setSelectedObjectToEdit(object);
        handleOpenModal();
    };

    const handleDeleteObject = (object: DoacaoObjetoDTO) => {
        let doacoes = listObjects;
        doacoes = doacoes.filter((item) => item !== object);
        setListObjects(doacoes);
    };

    return (
        <AdmObjetoDoacaoHContainer>
            <header className="header">
                <label>
                    Lista de objetos{" "}
                    {error && <span style={{ color: "#F44336" }}>{error}</span>}
                </label>
                <Button
                    onClick={handleOpenModal}
                    startIcon={<Plus size={32} />}
                    variant="contained"
                    color="primary"
                >
                    Adicionar objeto
                </Button>
            </header>
            <main className="body">
                {listObjects.map((objeto: DoacaoObjetoDTO, index) => {
                    return (
                        <AdmObjetoDoacaoHItem key={index}>
                            <div className="items-container">
                                <Tooltip
                                    title={`${objeto.quantidade} ${objeto.quantidade > 1 ? "Unidades" : "Unidade"}`}
                                >
                                    <span className="amount">
                                        {objeto.quantidade} UN
                                    </span>
                                </Tooltip>
                                <Divider orientation="vertical" />
                                <span>{objeto.nameObject}</span>
                            </div>
                            <div className="items-container">
                                <IconButton onClick={() => handleEditObject(objeto)}>
                                    <Pencil size={24} color="#42A5F5" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDeleteObject(objeto)}
                                >
                                    <Trash size={24} color="#F44336" />
                                </IconButton>
                            </div>
                        </AdmObjetoDoacaoHItem>
                    );
                })}
            </main>
            <AddEditObjetoDoacaoModalH
                objectToEdit={selectedObjectToEdit}
                open={showModal}
                listObjets={listObjects}
                setListObjects={setListObjects}
                children={<></>}
                onClose={handleCloseModal}
            />
        </AdmObjetoDoacaoHContainer>
    );
};

export default AdmObjetoDoacaoH;
