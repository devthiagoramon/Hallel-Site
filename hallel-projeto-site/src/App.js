import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RoutesApp from "./routes";
import { LocalizationProvider, ptBR } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            ptBR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <BrowserRouter>
            <RoutesApp />
          </BrowserRouter>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default App;
