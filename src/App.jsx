import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid/Grid";
import "./index.css";

const App = () => (
  <div className="container">
    <Grid/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
