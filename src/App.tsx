import { Mapping } from "./components/Mapping";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Mapping/>
    </MuiThemeProvider>
  );
}

export default App;
