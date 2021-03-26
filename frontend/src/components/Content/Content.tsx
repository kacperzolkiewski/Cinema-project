import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { RouteBuilder } from "../../routes"
import Login from "../../views/Login/Login"
import Main from "../../views/Main/Main"
import ContentWrapper from "./ContentWrapper"

const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Switch>
        <Route path={RouteBuilder.toLogin()} render={() => <Login />} />
        <Route
          path={RouteBuilder.toRegister()}
          render={() => <React.Fragment />}
        />
        <Route path={RouteBuilder.toMain()} render={() => <Main />} />
        <Redirect exact from="/" to={RouteBuilder.toMain()} />
      </Switch>
    </ContentWrapper>
  )
}

export default Content
