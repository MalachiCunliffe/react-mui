import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/Header";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./ui/Theme";
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={()=> {return(<div>Home</div>)} }/>
          <Route path="/services" element={()=> <div>Services</div>} />
          <Route path="/customsoftware" element={()=> <div>Custom Software</div>} />
          <Route path="/mobileapps" element={()=> <div>Mobile Apps</div>} />
          <Route path="/websites" element={()=> <div>Websites</div>} />
          <Route path="/revolution" element={()=> <div>Revolution</div>} />
          <Route path="/about" element={()=> <div>About</div>} />
          <Route path="/contact" element={()=> <div>Contact</div>} />
          <Route path="/estimate" element={()=> <div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
