import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import "./App.css";
import AppTheme from "./AppTheme";
import { GlobalStyle } from "./globalStyle";
import AppRouter from "./routes/route";
import { store as reduxStore } from "./store/store";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="ptBR"
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps
            .localeText
        }
      >
        <AppTheme>
          <GlobalStyle />
          <Provider store={reduxStore}>
            <AppRouter />
          </Provider>
        </AppTheme>
      </LocalizationProvider>
    </SnackbarProvider>
  );
}

export default App;
