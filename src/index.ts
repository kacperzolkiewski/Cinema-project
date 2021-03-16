import App from "./App"
import AuthenticationController from "./routes/controllers/Authentication.controller"
import CinemaHall from "./routes/controllers/CinemaHall.controller"
import FilmController from "./routes/controllers/Film.controller"

const app = new App([new AuthenticationController(), new FilmController(), new CinemaHall()])

app.listen()
