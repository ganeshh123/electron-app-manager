import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "typeface-roboto/index.css";
import "../assets/style.css";

let window_events = require('./window_events')

ReactDOM.render(<App />, document.getElementById("app"));

/* Functions for title bar buttons */
window_events()




