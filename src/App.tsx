import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './route';
import { store as reduxStore } from './store/store';

function App() {
  return (
    <Provider store={reduxStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;
