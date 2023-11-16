import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";

const NotificationHallel = ({ tipo, text }) => {
  const [open, setOpen] = useState(true);

  const handleCloseNotification = () => {
    setOpen(false);
  }
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseNotification}>
      <Alert severity={tipo}>{text}</Alert>
    </Snackbar>
  );
};

export default NotificationHallel;
