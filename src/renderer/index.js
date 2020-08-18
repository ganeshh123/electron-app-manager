import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "typeface-roboto/index.css";
import "./app/style.css";

let window_events = require('./app/window_events')

ReactDOM.render(<App />, document.getElementById("app"));

/* Functions for title bar buttons */
window_events()




