import AdmSideBar from "components/AdmSideBar";
import { ReactNode } from "react";
import { AdmWrapperContainer } from "./style";

const AdmWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <AdmWrapperContainer>
            <AdmSideBar />
            {children}
        </AdmWrapperContainer>
    );
};

export default AdmWrapper;
