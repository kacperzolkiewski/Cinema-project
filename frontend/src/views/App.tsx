import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom"
import Navbar from "../components/header/navbar/Navbar"
import { RouteBuilder } from "../routes"

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path={RouteBuilder.toLogin()}
          render={() => <React.Fragment />}
        />
        <Route
          path={RouteBuilder.toRegister()}
          render={() => <React.Fragment />}
        />
        <Route path={RouteBuilder.toMain()} render={() => <React.Fragment />} />
        <Redirect exact from="/" to={RouteBuilder.toMain()} />
      </Switch>
    </Router>
  )
}

export default App
