import { MuiThemeProvider } from '@material-ui/core/styles'
import Header from "./ui/Header";

import theme from './ui/Theme';
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header/>
      Hello !
    </MuiThemeProvider>
  );
}

export default App;
