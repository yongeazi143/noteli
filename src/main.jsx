import React from "react";
import ReactDOM from "react-dom/client";
import { ContextApp } from "../context.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextApp>
      <App />
    </ContextApp>
  </BrowserRouter>
);
