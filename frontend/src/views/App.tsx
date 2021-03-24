import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom"
import Navbar from "../components/header/navbar/Navbar"
import SimpleContainer from "../components/simpleContainer/SimpleContainer"
import { RouteBuilder } from "../routes"
import Login from "./Login/Login"
import Main from "./Main/Main"

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <SimpleContainer>
        <Switch>
          <Route path={RouteBuilder.toLogin()} render={() => <Login />} />
          <Route
            path={RouteBuilder.toRegister()}
            render={() => <React.Fragment />}
          />
          <Route path={RouteBuilder.toMain()} render={() => <Main />} />
          <Redirect exact from="/" to={RouteBuilder.toMain()} />
        </Switch>
      </SimpleContainer>
    </Router>
  )
}

export default App
