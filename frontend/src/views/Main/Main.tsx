import React from "react"
import MovieCard from "../../components/MovieCard/MovieCard"

const Main: React.FC = () => {
  return (
    <div>
      <MovieCard
        imageSource="https://a.allegroimg.com/original/11319f/c05eb92d4ff8b3764c2642d73183/Star-Wars-Skywalker-Odrodzenie-plakat-61x91-5-cm"
        movieTitle="Gwiezdne wojny"
        isPremiere={true}
      />
    </div>
  )
}
export default Main
