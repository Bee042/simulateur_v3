import "./App.css";
import "../src/Style.css";
import useDocMeta from "./components/utils/useDocMeta";
import useDocTitle from "./components/utils/useDocTitle";
import RouterConfig from "./routes/Router";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme();

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
    // injects the customize style in <head> before the default style (override MUI)
    <StyledEngineProvider injectFirst>

      {/* provides the theme to all components */}
      <ThemeProvider theme={theme}>

        {/* helps to make sure the app looks the same in different web browsers */}
        <CssBaseline />
        
        <div className="App">
          <RouterConfig />
        </div>

      </ThemeProvider>

    </StyledEngineProvider>
  );
}

export default App;
