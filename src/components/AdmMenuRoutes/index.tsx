import {
    Fab,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@mui/material";
import { admRoutesObj } from "components/AdmSideBar/admRouteObj";
import { List } from "phosphor-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdmMenuRoutesContainer } from "./style";

const AdmMenuRoutes = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigation = useNavigate();

    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGoTo = (to: string) => {
        navigation(to);
    };

    return (
        <AdmMenuRoutesContainer>
            <Fab color="primary" onClick={handleClick}>
                <List size={32} color="#FAFAFA" />
            </Fab>
            <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                {admRoutesObj.map((route, index) => {
                    return (
                        <MenuItem onClick={() => handleGoTo(route.link)}>
                            <ListItemIcon>{route.Icon}</ListItemIcon>
                            <ListItemText>{route.title}</ListItemText>
                        </MenuItem>
                    );
                })}
            </Menu>
        </AdmMenuRoutesContainer>
    );
};

export default AdmMenuRoutes;
