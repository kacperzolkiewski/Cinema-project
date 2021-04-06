import { ListItem } from "@material-ui/core"
import React from "react"
import IMovie from "../../../common/interfaces/Movies/Movie.interface"
import styles from "./MovieItem.module.css"

const MovieItem: React.FC<IMovie> = (props: Partial<IMovie>): JSX.Element => {
  return (
    <ListItem key={props._id} className={styles.gridContainer}>
      <h1>{props.title}</h1>
      <p>
        {props.type} | {props.ageCategory} | {props.filmLength}
      </p>
      <p>{props.mainActors}</p>
    </ListItem>
  )
}

export default MovieItem
