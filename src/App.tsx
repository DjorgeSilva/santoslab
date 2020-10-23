import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Properties from "./pages/Properties";

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={() => null}>
      <Switch>
        <Route
          exact
          path="/login"
          name="Login"
          render={(props: any) => <Login {...props} />}
        />
        <Route
          exact
          path="/"
          name="Propriedades"
          render={(props: any) => <Properties {...props} />}
        />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;
