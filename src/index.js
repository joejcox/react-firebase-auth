import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.min.css";
import "./test.css";
import App from "./App.js";
import AuthContextProvider from "Context/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
