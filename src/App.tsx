import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Properties } from "./pages/Properties/index";
import { Login } from "./pages/Login";


const App = () => {

  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
      </Router >
    )
  }

  return (
    <Router>
      <React.Suspense fallback={() => null}>

        <Switch>
          <Route
            exact
            path="/"
            render={(props: any) => <Login {...props} />}
          />

          <Route component={AuthenticatedRoutes} />

        </Switch>


      </React.Suspense>
    </Router >
  )
}

export default App;