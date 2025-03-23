import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppContext.jsx";
import AllRoutes from "./AllRoutes.jsx";

import RunningText from "./components/RunningText/RunningText.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <Navbar />
          <div className="running-text">
            <RunningText />
          </div>
          <div className="upper-section">
            <Sidebar />
            <div className="right-section">
              <div className="hero-section">
                <AllRoutes />
              </div>
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
          <ToastContainer autoClose={2000} />
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
