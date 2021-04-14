import mongoose from "mongoose"

export default interface ITicket {
  client: mongoose.Types.ObjectId
  film: mongoose.Types.ObjectId
  seatId: number
  cinemaHall: number
  qrCode: string
}
