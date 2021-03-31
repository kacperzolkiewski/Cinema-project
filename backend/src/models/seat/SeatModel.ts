import mongoose from "mongoose"
import ISeat from "./Seat.model"

const SeatSchema = new mongoose.Schema({
  seatId: {
    required: true,
    type: Number
  },
  seatNumber: {
    required: true,
    type: Number
  },
  seatRow: {
    required: true,
    type: Number
  },
  cinemaHall: {
    required: true,
    type: Number
  }
})

const SeatModel = mongoose.model<ISeat & mongoose.Document>("SeatModel", SeatSchema)

export default SeatModel
