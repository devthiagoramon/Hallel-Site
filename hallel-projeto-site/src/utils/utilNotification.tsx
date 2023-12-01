import React from "react";
import { AlertColor } from "@mui/material";
import { notification } from ".."
import NotificationHallel from "../components/NotificationHallel/index.tsx";

export function exibirNotificacao(text: string, tipo: AlertColor) {
    notification.render(<NotificationHallel tipo={tipo} text={text} />);
    setTimeout(() => {
        notification.render(<></>)
    }, 4000);
}