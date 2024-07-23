import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import './App.css';
import AppTheme from './AppTheme';
import { GlobalStyle } from './globalStyle';
import AppRouter from './route';
import { store as reduxStore } from './store/store';


function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <AppTheme>
        <GlobalStyle />
        <Provider store={reduxStore}>
          <AppRouter />
        </Provider>
      </AppTheme>
    </SnackbarProvider>
  );
}

export default App;
