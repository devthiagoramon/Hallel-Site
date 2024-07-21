import { Provider } from 'react-redux';
import './App.css';
import AppTheme from './AppTheme';
import AppRouter from './route';
import { store as reduxStore } from './store/store';


function App() {
  return (
    <AppTheme>
      <Provider store={reduxStore}>
        <AppRouter />
      </Provider>
    </AppTheme>
  );
}

export default App;
