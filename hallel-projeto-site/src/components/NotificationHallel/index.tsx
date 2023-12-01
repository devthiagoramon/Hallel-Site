import { Alert, AlertColor, Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";

type Props = {
  tipo: AlertColor,
  text: string,
}

const NotificationHallel = (props:Props) => {
  const [open, setOpen] = useState(true);

  const handleCloseNotification = () => {
    setOpen(false);
  }
  
  return (
    <Snackbar anchorOrigin={{horizontal: "right", vertical: "bottom"}} open={open} autoHideDuration={4000} onClose={handleCloseNotification}>
      <Alert severity={props.tipo}>{props.text}</Alert>
    </Snackbar>
  );
};

export default NotificationHallel;
