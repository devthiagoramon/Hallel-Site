import { Button, ModalProps } from "@mui/material";
import ModalH from "components/ModalH";
import TitleH from "components/TitleH";
import { CSSProperties } from "styled-components";
import {
    DeleteModalHDescription
} from "./style";

interface DeleteModalHProps extends ModalProps {
    title: string;
    description?: string;
    onButtonDeleteAction: () => void;
    textStyle?: CSSProperties;
    descriptionStyle?: CSSProperties;
}

const DeleteModalH = ({
    title,
    description,
    onButtonDeleteAction,
    textStyle,
    descriptionStyle,
    ...props
}: DeleteModalHProps) => {
    return (
        <ModalH {...props}>
            <>
                <TitleH size="medium" color="black">
                    {title}
                </TitleH>
                <DeleteModalHDescription>
                    {description}
                </DeleteModalHDescription>
                <Button onClick={onButtonDeleteAction} variant="contained" color="error" >
                    Deletar
                </Button>
            </>
        </ModalH>
    );
};

export default DeleteModalH;
