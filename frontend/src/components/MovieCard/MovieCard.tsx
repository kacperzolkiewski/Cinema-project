import blue from "@material-ui/core/colors/blue"
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
  layer: {},
  movieContainer: {
    padding: "5px"
  },
  premiere: {
    display: "flex",
    maxWidth: "90px",
    fontSize: "0.5rem",
    position: "absolute",
    textTransform: "uppercase"
  },
  rectangle: {
    padding: "1px 4px 0 4px",
    background: `linear-gradient(to right, ${specialColor} 50%, ${blue[900]})`
  },
  triangle: {
    margin: 0,
    width: 0,
    height: 0,
    borderTop: `15px solid ${blue[900]}`,
    borderRight: "3px solid transparent"
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
      <div className={classes.layer}>
        <div className={classes.movieContainer}>
          <div className={props.isPremiere ? classes.premiere : classes.hidden}>
            <div className={classes.rectangle}>premiera</div>
            <div className={classes.triangle}></div>
          </div>
          <img
            className={classes.movieImg}
            alt="Movie"
            src={props.imageSource}
          />
        </div>
        <div className={classes.movieTitle}>{props.movieTitle}</div>
      </div>
    </div>
  )
}

export default MovieCard
