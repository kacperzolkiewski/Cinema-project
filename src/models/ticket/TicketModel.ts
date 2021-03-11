import mongoose from "mongoose"
import ITicket from "./Ticket.model"

const TicketSchema = new mongoose.Schema({
    client: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "UserModel",
    },
    film: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "FilmModel",
    },
    seatNumber: {
        required: true,
        type: Number,
    },
    cinemaHall: {
        required: true,
        type: Number,
    },
    qrCode: {
        required: true,
        type: String,
    },
})

const TicketModel = mongoose.model<ITicket & mongoose.Document>("TicketModel", TicketSchema)

export default TicketModel
