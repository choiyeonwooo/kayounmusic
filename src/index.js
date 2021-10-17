import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { hydrate, render } from "react-dom";
import "./assets/css/style.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
