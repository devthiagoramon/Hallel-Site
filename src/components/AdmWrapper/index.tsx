import AdmSideBar from "components/AdmSideBar";
import { ReactNode } from "react";
import { AdmWrapperContainer, AdmWrapperContent } from "./style";

const AdmWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <AdmWrapperContainer>
            <AdmSideBar />
            <AdmWrapperContent>{children}</AdmWrapperContent>
        </AdmWrapperContainer>
    );
};

export default AdmWrapper;
