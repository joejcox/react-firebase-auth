import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.min.css";
import "./test.css";
import App from "./App.js";
import AuthContextProvider from "Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
