import { makeStyles } from "@material-ui/core/styles"
import MoviePageButton from "./MoviePageButton"
import MovieTrailerLink from "./MovieTrailerLink"
import PremiereFlag from "./PremiereFlag"

interface IMovieCard {
  movieTitle: string
  imageSource: string
  isPremiere: boolean
  movieTrailer: string
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: "200px",
    maxWidth: "140px",
    marginRight: "auto"
  },
  movieContainer: {
    // padding: "5px",
    opacity: "100%"
  },
  layer: {
    display: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between"
  },
  emptyDiv: {
    height: "40px",
    weight: "20px"
  },
  visible: {
    display: "block"
  },
  movieImg: {
    backgroundImage:
      "url(https://a.allegroimg.com/original/11319f/c05eb92d4ff8b3764c2642d73183/Star-Wars-Skywalker-Odrodzenie-plakat-61x91-5-cm)",
    height: 220,
    width: 140,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "&:hover $layer": {
      display: "flex"
    }
  },
  movieTitle: {
    margin: "auto",
    textTransform: "uppercase",
    textDecoration: "underline",
    textAlign: "center",
    fontSize: "0.6rem"
  },
  hidden: {
    display: "none"
  }
}))

function MovieCard(props: IMovieCard) {
  const classes = useStyles()
  return (
    <article className={classes.container}>
      <div className={classes.movieContainer}>
        <div className={props.isPremiere ? classes.visible : classes.hidden}>
          <PremiereFlag />
        </div>
        <div className={classes.movieImg}>
          <div className={classes.layer}>
            <div className={classes.emptyDiv} />
            <MoviePageButton />
            <MovieTrailerLink movieTrailer={props.movieTrailer} />
          </div>
        </div>
        <h2 className={classes.movieTitle}>{props.movieTitle}</h2>
      </div>
    </article>
  )
}

export default MovieCard
