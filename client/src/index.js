import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import './components/in.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);