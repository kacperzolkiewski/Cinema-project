import App from "./App"
import CinemaHall from "./routes/controllers/CinemaHall.controller"
import AuthenticationController from "./routes/controllers/authentication.controller"
import FilmController from "./routes/controllers/film.controller"

const app = new App([new AuthenticationController(), new FilmController(), new CinemaHall()])

app.listen()
