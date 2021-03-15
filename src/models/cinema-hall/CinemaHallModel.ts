import * as mongoose from "mongoose"
import ICinemaHall from "./CinemaHall.model"

const CinemaHallSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  numberOfSeats: {
    required: true,
    type: Number
  }
})

const CinemaHallModel = mongoose.model<ICinemaHall & mongoose.Document>("CinemaHallModel", CinemaHallSchema)

export default CinemaHallModel
