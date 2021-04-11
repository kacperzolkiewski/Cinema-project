import { ListItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import IMovie from "../../../common/interfaces/Movies/Movie.interface"
import ShowingCard from "../ShowingCard/ShowingCard"

const MovieItem: React.FC<IMovie> = (props: Partial<IMovie>): JSX.Element => {
  const useStyles = makeStyles(() => ({
    flexWrapper: {
      display: "flex",
      flexDirection: "column"
    },
    title: {
      textAlign: "center",
      width: "100%"
    },
    cardContainer: {
      display: "flex",
      flexDirection: "row",
      margin: "15px"
    },
    actors: {
      padding: "10px 15px",
      display: "inline"
    },
    actorsContainer: {
      flex: "row",
      width: "100%",
      flexDirection: "row",
      textAlign: "center"
    }
  }))

  const classes = useStyles()

  return (
    <ListItem key={props.title} className={classes.flexWrapper}>
      <h2 className={classes.title}>{props.title}</h2>
      <p>
        {props.type} | {props.ageCategory} | {props.filmLength}
      </p>
      <div className={classes.actorsContainer}>
        {props.mainActors?.map((a) => (
          <p className={classes.actors} key={a}>
            {a}
          </p>
        ))}
      </div>
      <ShowingCard
        key={props._id}
        hours={props.hours as string[]}
        is3D={props.is3D as boolean}
      />
    </ListItem>
  )
}

export default MovieItem
