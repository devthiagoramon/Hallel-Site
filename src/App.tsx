import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import AppRouter from "routes/route";
import { register } from "swiper/element";
import "./App.css";
import AppTheme from "./AppTheme";
import { GlobalStyle } from "./globalStyle";
import { store as reduxStore } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient()

register();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <SnackbarProvider maxSnack={3}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="pt-BR"
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
    </QueryClientProvider>

  );
}

export default App;
