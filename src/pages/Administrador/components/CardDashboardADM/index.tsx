import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./card_dashboard_adm.css";

interface CardDashboardADMProps {
    title: string;
    description: string;
    link: string;
}

const CardDashboardADM = ({
    description,
    link,
    title,
}: CardDashboardADMProps) => {
    const navigation = useNavigate();

    const handleGoTo = () => {
        navigation(link);
    };

    return (
        <Card className="card_container" sx={{ p: 1 }}>
            <CardContent>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleGoTo()} color="primary">
                    Ir para {`${title.toLowerCase()}`}
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardDashboardADM;
