import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppContext.jsx";
import AllRoutes from "./AllRoutes.jsx";

import RunningText from "./components/RunningText/RunningText.jsx";



function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <nav><Navbar/></nav>
          <div className="running-tex"><RunningText/></div>
          <div className='upper-section'>
            <Sidebar />
            <div className="right-section">
              <div className='hero-section'><AllRoutes /></div>
            </div>
          </div>
          <footer><Footer /></footer>
        </div>
      </AppProvider>
    </BrowserRouter>

  );
}

export default App;
