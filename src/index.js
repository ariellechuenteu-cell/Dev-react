import React from "react";
//ReactDom sert a brancher react sur la page html
import ReactDOM from "react-dom/client";
//BrowserRouter active le systeme de navigation pour toute l'application
import { BrowserRouter } from "react-router-dom";
//on importe notre composant principal
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  // BrowserRouter entoure app: sans lui <Routes>, <link>, useNavigate... ne marchent pas 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();