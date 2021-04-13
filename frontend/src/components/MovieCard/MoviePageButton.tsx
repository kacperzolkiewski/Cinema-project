import { makeStyles } from "@material-ui/core/styles"
import { RouteBuilder } from "../../routes"
import { Button } from "../design/system/button"
import { specialColor } from "../design/system/colors/colors"

const useStyles = makeStyles(() => ({
  navigateToMoviePageButton: {
    textTransform: "uppercase",
    border: `1px solid ${specialColor}`,
    borderRadius: "2px",
    width: "80%",
    color: "white",
    padding: "4px",
    marginBottom: 10,
    fontSize: "0.6rem"
  }
}))

function MoviePageButton() {
  const classes = useStyles()
  return (
    <Button
      href={RouteBuilder.toMovie()}
      variant="outlined"
      color="primary"
      className={classes.navigateToMoviePageButton}
    >
      sprawdź
    </Button>
  )
}

export default MoviePageButton
