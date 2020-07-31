import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import "./index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "PROD") {
  console.log("APP VERSION " + process.env.APP_VERSION);
}