import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './firebaseConfig.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter/>
    <App />
    <BrowserRouter/>
  </StrictMode>,
)