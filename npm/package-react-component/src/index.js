/**
 * @file
 * index.js
 *
 * This file solely exists for development testing and is not used in the
 * actual npm package.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
