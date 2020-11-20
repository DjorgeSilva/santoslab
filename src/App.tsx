import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Properties from "./pages/Properties";
import Login from "./pages/Login";

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={() => null}>
      <Switch>
        <Route
          exact
          path="/"
          name="Propriedades"
          render={(props: any) => <Properties {...props} />}
        />
        <Route
          exact
          path="/"
          name="Propriedades"
          render={(props: any) => <Login {...props} />}
        />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;
