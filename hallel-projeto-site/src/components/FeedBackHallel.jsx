// import React, {useState} from 'react';
// import {Alert, Snackbar} from "@mui/material";
//
// export const TypesFBHallel = {
//     info: "info",
//     sucesso: "success",
//     alerta: "warning",
//     error: "error",
// }
//
//
// const FeedBackHallel = () => {
//     const [textFBHallel, setTextFBHallel] = useState("");
//     const [typeFBHallel, setTypeFBHallel] = useState("");
//     const [durationFBHallel, setDurationFBHallel] = useState(1000);
//     const [open, setOpen] = useState(false);
// function loadFeedBackHallel(text, type, duration) {
//
//     setOpen(true);
//     setTextFBHallel(text);
//     setTypeFBHallel(type);
//     setDurationFBHallel(duration);
// }
//
//
//     const handleCloseSnackBar = () => {
//         setOpen(false);
//     }
//     return (
//         <Snackbar open={open} onClose={handleCloseSnackBar} autoHideDuration={durationFBHallel}>
//             <Alert severity={typeFBHallel}>{textFBHallel}</Alert>
//         </Snackbar>
//     );
// };
//
// export default {FeedBackHallel};