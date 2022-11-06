import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);