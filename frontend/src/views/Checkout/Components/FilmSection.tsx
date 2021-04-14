import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import FilmAricle from "./FilmArticle"

export interface IFilmSection {
  filmsCount: number
}

const useStyles = makeStyles(() => ({
  filmSection: {
    width: "90vw",
    marginLeft: "-5vw",
    display: "flex",
    justifyContent: "center",
    gap: "1vw"
  }
}))

const FilmSection: React.FC<IFilmSection> = (
  props: IFilmSection
): JSX.Element => {
  const classes = useStyles()

  return (
    <section className={classes.filmSection}>
      {Array(props.filmsCount).fill(<FilmAricle />)}
    </section>
  )
}

export default FilmSection
