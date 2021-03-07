import mongoose from "mongoose"

const TicketSchema = new mongoose.Schema({
    client: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "User",
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
    QR_CODE: {
        required: true,
        type: String,
    },
})

const TicketModel = mongoose.model("TicketModel", TicketSchema)

export default TicketModel
