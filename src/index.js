import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Loader from "./components/shared/Loader";
import NotFound from "./pages/NotFound";
import reportWebVitals from "./reportWebVitals";
import routes from "./routes";

const App = (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((prop, key) => (
          <Route path={prop.path} component={prop.component} key={key} exact />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React.StrictMode>{App}</React.StrictMode>, rootElement);
} else {
  render(<React.StrictMode>{App}</React.StrictMode>, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
