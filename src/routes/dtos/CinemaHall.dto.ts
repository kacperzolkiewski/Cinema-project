import { IsNumber, IsString } from "class-validator"

export default class CinemaHallDTO {
  @IsString()
  name: string

  @IsNumber()
  numberOfSeats: number
}
