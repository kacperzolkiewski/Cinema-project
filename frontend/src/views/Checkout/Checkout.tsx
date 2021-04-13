import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { CheckoutHeader, FilmSection } from "./Components"
import { IFilmSection } from "./Components/Checkout.interfaces"

const filmsValues: IFilmSection = {
  filmsCount: 2
}

const useStyles = makeStyles(() => ({
  checkoutContent: {
    marginTop: "-2em"
  }
}))

const Checkout: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.checkoutContent}>
      <CheckoutHeader />
      <FilmSection filmsCount={filmsValues.filmsCount} />
    </section>
  )
}

export default Checkout
