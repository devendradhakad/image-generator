import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

/**
 * @description Mount App component on 'root' DOM node
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
