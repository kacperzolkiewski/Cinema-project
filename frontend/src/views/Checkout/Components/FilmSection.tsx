import { makeStyles } from "@material-ui/core/styles"
import React, { useState } from "react"
import { IFilmSection, IFilmArticle } from "./Checkout.interfaces"
import FilmAricle from "./FilmArticle"
import PaymentButton from "./PaymentButton"

const filmValues: IFilmArticle = {
  title: "Star Wars",
  imageUrl:
    "https://a.allegroimg.com/original/11319f/c05eb92d4ff8b3764c2642d73183/Star-Wars-Skywalker-Odrodzenie-plakat-61x91-5-cm",
  quantity: 2
}

const useStyles = makeStyles(() => ({
  filmSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%"
  },
  buttonSection: {
    width: "100%"
  }
}))

const FilmSection: React.FC<IFilmSection> = (
  props: IFilmSection
): JSX.Element => {
  const [total, setTotal] = useState<number>(
    props.filmsCount * filmValues.quantity
  )
  const classes = useStyles()

  const handleQuantityChange = (setSign: boolean): void => {
    setSign
      ? setTotal((prevTotal) => prevTotal + 1)
      : setTotal((prevTotal) => prevTotal - 1)
  }
  const handleQuantity = handleQuantityChange.bind(this)

  return (
    <section className={classes.filmSection}>
      <FilmAricle
        title={filmValues.title}
        imageUrl={filmValues.imageUrl}
        quantity={props.filmsCount}
      />
      <div className={classes.buttonSection}>
        <PaymentButton total={total} onQuantityChange={handleQuantity} />
      </div>
    </section>
  )
}

export default FilmSection
