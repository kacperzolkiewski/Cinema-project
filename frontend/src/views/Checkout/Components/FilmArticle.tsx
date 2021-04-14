import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles(() => ({
  filmArticle: {
    width: "30vw"
  },
  filmTitle: {
    width: "100%",
    borderBottom: "2px solid #ffffff",
    textAlign: "center"
  }
}))

const FilmArticle: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <article className={classes.filmArticle}>
      <h4 className={classes.filmTitle}>KLASA</h4>
    </article>
  )
}

export default FilmArticle
