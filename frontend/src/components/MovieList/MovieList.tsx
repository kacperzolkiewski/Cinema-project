import { Container, List } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import IMovie from "../../common/interfaces/Movies/Movie.interface"
import MovieItem from "./MovieItem/MovieItem"

const url = "http://localhost:3004/films"

const MovieList: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<IMovie[]>([])
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((movies: IMovie[]) => setMovies(movies))
  }, [])

  return (
    <Container maxWidth={"lg"}>
      <List>
        {movies.map((m) => (
          <MovieItem
            _id={m._id}
            title={m.title}
            producent={m.producent}
            mainActors={m.mainActors}
            type={m.type}
            filmLength={m.filmLength}
            ageCategory={m.ageCategory}
            is3D={m.is3D}
            hours={m.hours}
            dates={m.dates}
            key={m._id}
          />
        ))}
      </List>
    </Container>
  )
}

export default MovieList
