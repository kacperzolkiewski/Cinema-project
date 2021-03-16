import "dotenv/config"
import App from "./App"
import AuthenticationController from "./routes/controllers/Authentication.controller"
import CinemaHall from "./routes/controllers/CinemaHall.controller"
import FilmController from "./routes/controllers/Film.controller"
import PaymentController from "./routes/controllers/Payment.controller"

const app = new App([new AuthenticationController(), new FilmController(), new CinemaHall(), new PaymentController()])

app.listen(process.env.PORT || "8080")
