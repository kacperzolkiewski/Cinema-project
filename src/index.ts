import "dotenv/config"
import App from "./App"
import CinemaHall from "./routes/controllers/CinemaHall.controller"
import AuthenticationController from "./routes/controllers/authentication.controller"
import FilmController from "./routes/controllers/film.controller"
import PaymentController from "./routes/controllers/payment.controller"

const app = new App([new AuthenticationController(), new FilmController(), new CinemaHall(), new PaymentController()])

app.listen(process.env.PORT || "8080")
