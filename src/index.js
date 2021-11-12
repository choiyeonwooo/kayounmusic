import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Loader from "./components/shared/Loader";
import GaWrapper from "./GaWrapper";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import reportWebVitals from "./reportWebVitals";
import routes from "./routes";

const COMING_SOON = false;

const App = (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((prop, key) => {
          const Component = prop.component;
          return (
            <Route
              path={prop.path}
              render={() => (
                <GaWrapper>
                  <Component />
                </GaWrapper>
              )}
              key={key}
              exact
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const AppComingSoon = <ComingSoon />;

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React.StrictMode>{COMING_SOON ? AppComingSoon : App}</React.StrictMode>, rootElement);
} else {
  render(<React.StrictMode>{COMING_SOON ? AppComingSoon : App}</React.StrictMode>, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
