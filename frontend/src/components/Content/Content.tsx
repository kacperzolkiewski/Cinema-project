import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { RouteBuilder } from "../../routes"
import Checkout from "../../views/Checkout"
import Login from "../../views/Login/Login"
import Main from "../../views/Main/Main"
import { SeatsReservation } from "../../views/SeatsReservation/SeatsReservation"
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
        <Route path={RouteBuilder.toSeatsReservation("")}>
          <SeatsReservation />
        </Route>
        <Route path={RouteBuilder.toCheckout()}>
          <Checkout />
        </Route>
        <Redirect exact from="/" to={RouteBuilder.toMain()} />
      </Switch>
    </ContentWrapper>
  )
}

export default Content
