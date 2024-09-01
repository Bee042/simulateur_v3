// import './App.css';
import useDocMeta from './components/utils/useDocMeta';
import useDocTitle from './components/utils/useDocTitle';
import RouterConfig from './routes/Router';
import { StyledEngineProvider } from '@mui/material';

function App() {

useDocMeta("Ce site vous permet de connaître les aides au financement de votre permis de conduire");
useDocTitle("Simulateur d'aides au permis de conduire");


  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <RouterConfig />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
