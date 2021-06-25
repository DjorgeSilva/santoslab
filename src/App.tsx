import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Properties } from "./pages/Properties/index";
import { Login } from "./pages/Login";


const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={() => null}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props: any) => <Login {...props} />}
        />
        <Route
          exact
          path="/properties"
          render={(props: any) => <Properties {...props} />}
        />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;
