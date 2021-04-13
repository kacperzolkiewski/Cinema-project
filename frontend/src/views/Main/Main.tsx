import React from "react"
import MovieList from "../../components/MovieList/MovieList"
import MovieSection from "../../components/MovieSection/MovieSection"

const Main: React.FC = () => {
  const exampleMovies = [
    {
      title: "Gwiezdne Wojny",
      trailer: "https://google.com",
      imageSource:
        "https://a.allegroimg.com/original/11319f/c05eb92d4ff8b3764c2642d73183/Star-Wars-Skywalker-Odrodzenie-plakat-61x91-5-cm",
      isPremiere: true
    },
    {
      title: "Joker",
      trailer: "https://google.com",
      imageSource: "https://fwcdn.pl/fpo/01/67/810167/7905225.3.jpg",
      isPremiere: true
    },
    {
      title: "Kraina Lodu",
      trailer: "https://google.com",
      imageSource:
        "https://lumiere-a.akamaihd.net/v1/images/image_bf2c13ad.jpeg?region=0%2C0%2C540%2C810",
      isPremiere: true
    },
    {
      title: "Titanic",
      trailer: "https://google.com",
      imageSource:
        "https://wf1.xcdn.pl/files/12/04/13/295026_tiitanic_C1200x1200-LlZFM3.png.webp?conv=JGQFAAAABLAEsAC8Qwqh",
      isPremiere: false
    },
    {
      title: "Harry Potter",
      trailer: "https://google.com",
      imageSource:
        "https://cdn-1.cdp.pl/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/1/3/13916_0.jpg",
      isPremiere: false
    }
  ]
  return (
    <div>
      <MovieSection movies={exampleMovies} />
      <MovieList />
    </div>
  )
}

export default Main
