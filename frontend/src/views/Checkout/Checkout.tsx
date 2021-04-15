import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { ITicket } from "../SeatsReservation/BuyButtonComponent"
import { CheckoutHeader, FilmSection } from "./Components"

const useStyles = makeStyles(() => ({
  checkoutContent: {
    marginTop: "-2em"
  }
}))

const Checkout: React.FC = () => {
  const classes = useStyles()

  const handleTickets = (): string => {
    const ticketsArr: string | null = window.localStorage.getItem("tickets")
    return ticketsArr!.toString()
  }
  const tickets: ITicket[] = JSON.parse(handleTickets())

  return (
    <section className={classes.checkoutContent}>
      <CheckoutHeader />
      <FilmSection filmsCount={tickets.length} tickets={tickets} />
    </section>
  )
}

export default Checkout
