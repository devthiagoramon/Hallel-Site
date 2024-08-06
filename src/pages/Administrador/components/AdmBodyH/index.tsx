import { HTMLProps } from "react";
import { AdmBodyHContainer } from "./style";

interface AdmBodyHProps extends HTMLProps<HTMLDivElement> { }

const AdmBodyH = (props: AdmBodyHProps) => {
    return (
        <AdmBodyHContainer {...props}>{props.children}</AdmBodyHContainer>
    );
};

export default AdmBodyH;
