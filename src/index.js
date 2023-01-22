import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RandomNumContextProvider } from "./context/randomNumContext";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RandomNumContextProvider>
      <App />
    </RandomNumContextProvider>
  </React.StrictMode>
);
