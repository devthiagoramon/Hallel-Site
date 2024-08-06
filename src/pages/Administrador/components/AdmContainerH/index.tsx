import { HTMLProps } from "react";
import { AdmContainer } from "./style";

interface AdmContainerHProps extends HTMLProps<HTMLDivElement> { }

const AdmContainerH = (props: AdmContainerHProps) => {
    return <AdmContainer {...props}>{props.children}</AdmContainer>;
};

export default AdmContainerH;
