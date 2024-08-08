import { Button, ModalProps, TextField } from "@mui/material";
import ModalH from "components/ModalH";
import { useSnackbar } from "notistack";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DoacaoObjetoDTO } from "types/admDTOTypes";
import { maskForNumber } from "utils/masks";

interface AddEditObjetoDoacaoModalHProps extends ModalProps {
    setListObjects: Dispatch<SetStateAction<DoacaoObjetoDTO[]>>;
    objectToEdit?: DoacaoObjetoDTO;
    listObjets: DoacaoObjetoDTO[];
}

const AddEditObjetoDoacaoModalH = ({
    setListObjects,
    objectToEdit,
    listObjets,
    ...props
}: AddEditObjetoDoacaoModalHProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const [nomeObjeto, setNomeObjeto] = useState(
        objectToEdit?.nameObject || "",
    );
    const [quantidadeObjeto, setQuantidadeObjeto] = useState(
        objectToEdit?.quantidade || 0,
    );

    const [errorNomeObjeto, setErrorNomeObjeto] = useState<string>();
    const [errorQuantidadeObjeto, setErrorQuantidadeObjeto] =
        useState<string>();

    const handleAddOrEdit = () => {
        if (!validateForms()) return;

        if (objectToEdit) {
            const indexObjectEdit = listObjets.indexOf(objectToEdit);
            listObjets[indexObjectEdit] = {
                nameObject: nomeObjeto,
                quantidade: quantidadeObjeto,
            };
            setListObjects(listObjets);
        } else {
            setListObjects((prev) => [
                ...prev,
                { nameObject: nomeObjeto, quantidade: quantidadeObjeto },
            ]);
        }
        setNomeObjeto("");
        setQuantidadeObjeto(0);
        enqueueSnackbar(
            `Objeto ${objectToEdit ? "editado" : "adicionado"} com sucesso!`,
            {
                variant: "success",
            },
        );
        props.onClose && props.onClose({}, "backdropClick");
    };

    function validateForms() {
        let value = true;
        if (nomeObjeto === "") {
            setErrorNomeObjeto("Digite o nome do objeto!");
            value = false;
        } else {
            setErrorNomeObjeto(undefined);
        }
        if (quantidadeObjeto === 0) {
            setErrorQuantidadeObjeto("Digite a quantidade de objetos!");
            value = false;
        } else {
            setErrorQuantidadeObjeto(undefined);
        }
        return value;
    }

    useEffect(() => {
        setNomeObjeto(objectToEdit?.nameObject || "");
        setQuantidadeObjeto(objectToEdit?.quantidade || 0);
    }, [objectToEdit]);

    return (
        <ModalH
            showHeader
            headerTitle={`${objectToEdit ? "Editar" : "Adicionar"} objeto`}
            closeModal
            {...props}
        >
            <>
                <TextField
                    label="Nome do objeto"
                    onChange={(e) => setNomeObjeto(e.target.value)}
                    value={nomeObjeto}
                    error={!!errorNomeObjeto}
                    helperText={errorNomeObjeto}
                />
                <TextField
                    label="Quantidade"
                    value={quantidadeObjeto}
                    onChange={(e) => setQuantidadeObjeto(maskForNumber(e))}
                    error={!!errorQuantidadeObjeto}
                    helperText={errorQuantidadeObjeto}
                />

                <Button
                    onClick={handleAddOrEdit}
                    variant="contained"
                    color="primary"
                >
                    Adicionar
                </Button>
            </>
        </ModalH>
    );
};

export default AddEditObjetoDoacaoModalH;
