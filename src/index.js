import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import './sass/styleguide.scss';
import './sass/base/_base.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
