import { Modal, ModalProps } from "@mui/material";
import { ModalHContainer } from "./style";

interface ModalHProps extends ModalProps { }

const ModalH = (props: ModalHProps) => {
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
            <ModalHContainer>{props.children}</ModalHContainer>
        </Modal>
    );
};

export default ModalH;
