import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

require("spectre.css/dist/spectre.css");
require("../css/main.scss");

ReactDOM.render(
  <App />,
  document.getElementById("main")
);
