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
        <Route path={RouteBuilder.toLogin()}>
          <Login />
        </Route>
        <Route path={RouteBuilder.toRegister()}>
          <React.Fragment />
        </Route>
        <Route path={RouteBuilder.toMain()}>
          <Main />
        </Route>
        <Redirect exact from="/" to={RouteBuilder.toMain()} />
      </Switch>
    </ContentWrapper>
  )
}

export default Content
