import { cinemaHallModel } from "./swaggerComponents/swaggerCinemaHalls"
import { filmModel, filmEndpoints } from "./swaggerComponents/swaggerFilms"
import { ticketModel } from "./swaggerComponents/swaggerTickets"
import { userModel, userEndpoints } from "./swaggerComponents/swaggerUsers"

export const swaggerDocument = {
  swagger: "2.0",
  info: {
    title: "Cinema App",
    description: "An website app for cinema",
    version: "1.0"
  },
  produces: ["application/json"],
  paths: { ...filmEndpoints, ...userEndpoints },
  definitions: {
    filmModel,
    ticketModel,
    userModel,
    cinemaHallModel
  }
}
