import { IconButton } from "@mui/material";
import TitleH from "components/TitleH";
import { CaretLeft } from "phosphor-react";
import { HTMLProps } from "react";
import { useNavigate } from "react-router-dom";
import { AdmHeaderContainer } from "./style";

interface AdmHeaderProps extends HTMLProps<HTMLDivElement> {
    title: string;
    goBack?: boolean;
    onGoBack?: () => void;
}

const AdmHeaderH = ({
    title,
    goBack,
    onGoBack,
    ...props
}: AdmHeaderProps) => {
    const navigation = useNavigate();

    const handleGoBack = () => {
        navigation(-1);
        onGoBack && onGoBack();
    };

    return (
        <AdmHeaderContainer {...props}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {goBack && (
                    <IconButton onClick={handleGoBack}>
                        <CaretLeft size={32} color="#252525" />
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
