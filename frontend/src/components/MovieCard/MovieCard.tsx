import { blueGrey } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"
import { specialColor } from "../design/system/colors/colors"

interface IMovieCard {
  movieTitle: string
  imageSource: string
  isPremiere: boolean
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: "190px",
    maxWidth: "120px",
    marginRight: "auto"
  },
  movieContainer: {
    padding: "5px"
  },
  premiere: {
    padding: "1px 6px",
    maxWidth: "90px",
    fontSize: "0.6rem",
    // eslint-disable-next-line
    background: `linear-gradient(to right, ${specialColor} 80%, ${blueGrey[900]})`,
    position: "absolute",
    textTransform: "uppercase"
  },
  movieImg: {
    maxHeight: 180,
    width: 120,
    objectFit: "cover"
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
    <div className={classes.container}>
      <div className={classes.movieContainer}>
        <div className={props.isPremiere ? classes.premiere : classes.hidden}>
          premiera
        </div>
        <img className={classes.movieImg} alt="Movie" src={props.imageSource} />
      </div>
      <div className={classes.movieTitle}>{props.movieTitle}</div>
    </div>
  )
}

export default MovieCard
