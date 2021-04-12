import { Grid } from "@material-ui/core"
import blue from "@material-ui/core/colors/blue"
import { makeStyles } from "@material-ui/core/styles"
import MovieCard from "../MovieCard/MovieCard"
import { specialColor } from "../design/system/colors/colors"

interface IMovieSection {
  movies: {
    title: string
    trailer: string
    imageSource: string
    isPremiere: boolean
  }[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 180,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  section: {
    paddingTop: 30
  },
  rectangle: {
    width: 80,
    padding: "2px",
    background: `linear-gradient(to right, ${specialColor} 50%, ${blue[900]})`
  },
  header: {
    textTransform: "uppercase"
  },
  cardsContainer: {
    overflow: "hidden",
    flexFlow: "row"
  }
}))

function MovieSection(props: IMovieSection) {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <div className={classes.rectangle} />
      <h1 className={classes.header}>nadchodzące filmy</h1>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        className={classes.cardsContainer}
      >
        {props.movies.map((movie) => {
          return (
            <MovieCard
              movieTitle={movie.title}
              imageSource={movie.imageSource}
              isPremiere={movie.isPremiere}
              movieTrailer={movie.trailer}
            />
          )
        })}
      </Grid>
    </section>
  )
}

export default MovieSection
