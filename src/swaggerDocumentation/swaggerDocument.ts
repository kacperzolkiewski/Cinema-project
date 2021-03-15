import { filmModel, filmEndpoints } from "./swaggerFilms"
import { ticketModel } from "./swaggerTickets"
import { userModel, userEndpoints } from "./swaggerUsers"
import { cinemaHallModel } from "./swaggerCinemaHalls"

export const swaggerDocument = {
    swagger: "2.0",
    info: {
        title: "Cinema App",
        description: "An website app for cinema",
        version: "1.0",
    },
    produces: ["application/json"],
    paths: { ...filmEndpoints, ...userEndpoints },
    definitions: {
        filmModel,
        ticketModel,
        userModel,
        cinemaHallModel,
    },
}
