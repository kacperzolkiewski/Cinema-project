import { ListItem } from "@material-ui/core"
import React from "react"
import IMovie from "../../../common/interfaces/Movies/Movie.interface"
import ShowingCard from "../ShowingCard/ShowingCard"
import styles from "./MovieItem.module.css"

const MovieItem: React.FC<IMovie> = (props: Partial<IMovie>): JSX.Element => {
  return (
    <ListItem key={props._id} className={styles.gridContainer}>
      <h1>{props.title}</h1>
      <p>
        {props.type} | {props.ageCategory} | {props.filmLength}
      </p>
      <p>{props.mainActors}</p>
      <ShowingCard
        key={props._id}
        hours={props.hours as string[]}
        is3D={props.is3D as boolean}
      />
    </ListItem>
  )
}

export default MovieItem
