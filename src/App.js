// import './App.css';
import useDocMeta from './components/utils/useDocMeta';
import useDocTitle from './components/utils/useDocTitle';
import RouterConfig from './routes/Router';
import { StyledEngineProvider } from '@mui/material';





function App() {
/**
 * Sets the meta description : sets a summary of what the site is about (see 'useDocMeta.js')
 * and the title of the document  : chose the title of the browser tab (see 'useDocTitle.js')
 */

useDocMeta("Ce site vous permet de connaître les aides au financement de votre permis de conduire");
useDocTitle("Simulateur d'aides au permis de conduire");


/**
 * Renders the main component of the application
 * with the possibility to chose to use a personnal style, or to keep MUI's style
 * and configures a router (see Router.js) to define the content to display, depending on the url 
 */
  return (
    <div className="App">

      {/* wrapping the app with 'StyledEngineProvider' and using 'injectFirst' allow to override the MUI default style */}
      <StyledEngineProvider injectFirst // injects the customize style in <head> before the default style
      >
        <RouterConfig />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
