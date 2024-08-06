import { IconButton } from "@mui/material";
import TitleH from "components/TitleH";
import { CaretLeft } from "phosphor-react";
import { HTMLProps } from "react";
import { useNavigate } from "react-router-dom";
import { AdmHeaderContainer } from "./style";

interface AdmHeaderProps extends HTMLProps<HTMLDivElement> {
    title: string;
    goBack?: boolean;
}

const AdmHeaderH = ({ title, goBack, ...props }: AdmHeaderProps) => {
    const navigation = useNavigate();

    const handleGoBack = () => {
        navigation(-1);
    };

    return (
        <AdmHeaderContainer {...props}>
            <div>
                {goBack && (
                    <IconButton onClick={handleGoBack}>
                        <CaretLeft size={24} />
                    </IconButton>
                )}
                <TitleH color="black" size="medium">
                    {title}
                </TitleH>
            </div>
            {props.children}
        </AdmHeaderContainer>
    );
};

export default AdmHeaderH;
