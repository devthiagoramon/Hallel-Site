import AdmMenuRoutes from "components/AdmMenuRoutes";
import AdmSideBar from "components/AdmSideBar";
import { ReactNode, useState } from "react";
import { AdmWrapperContainer, AdmWrapperContent } from "./style";

const AdmWrapper = ({ children }: { children: ReactNode }) => {
    const [expanded, setExpanded] = useState<boolean>(true);
    const [isPhone, setIsPhone] = useState<boolean>(false);

    return (
        <AdmWrapperContainer>
            <AdmSideBar expanded={expanded} setExpanded={setExpanded} />

            <AdmWrapperContent>
                {children}
                <AdmMenuRoutes />
            </AdmWrapperContent>
        </AdmWrapperContainer>
    );
};

export default AdmWrapper;
