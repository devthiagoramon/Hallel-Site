import { IconButton, Modal, ModalProps } from "@mui/material";
import TitleH from "components/TitleH";
import { CaretLeft } from "phosphor-react";
import { ModalHContainer } from "./style";

interface ModalHProps extends ModalProps {
    showHeader?: boolean;
    headerTitle?: string;
    closeModal?: boolean;
}

const ModalH = ({
    showHeader,
    headerTitle,
    closeModal,
    ...props
}: ModalHProps) => {
    return (
        <Modal
            sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
            {...props}
        >
            <ModalHContainer>
                {showHeader && (
                    <header>
                        <TitleH color="black" size="medium">
                            {closeModal && (
                                <IconButton
                                    onClick={() =>
                                        props.onClose &&
                                        props.onClose({}, "backdropClick")
                                    }
                                >
                                    <CaretLeft size={24} />
                                </IconButton>
                            )}
                            {headerTitle}
                        </TitleH>
                    </header>
                )}
                {props.children}
            </ModalHContainer>
        </Modal>
    );
};

export default ModalH;
