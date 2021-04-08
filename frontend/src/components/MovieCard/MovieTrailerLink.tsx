import { makeStyles } from "@material-ui/core/styles"
import { PlayCircleOutline } from "@material-ui/icons"
import { specialColor } from "../design/system/colors/colors"

const useStyles = makeStyles(() => ({
  navigateToMovieTrailer: {
    display: "flex",
    flexDirection: "row",
    fontSize: "0.6rem",
    alignItems: "center",
    color: "white",
    textTransform: "uppercase",
    "& $div": {
      width: "min-content",
      marginLeft: "2px"
    }
  },
  playIcon: {
    color: specialColor,
    fontSize: "2rem",
    marginRight: "auto"
  }
}))

interface IMovieTrailerLink {
  movieTrailer: string
}

function MovieTrailerLink(props: IMovieTrailerLink) {
  const classes = useStyles()
  return (
    <a className={classes.navigateToMovieTrailer} href={props.movieTrailer}>
      <PlayCircleOutline className={classes.playIcon} />
      <div>zobacz zwiastun</div>
    </a>
  )
}

export default MovieTrailerLink
