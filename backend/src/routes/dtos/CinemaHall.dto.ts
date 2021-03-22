import { IsNumber, IsString, Length } from "class-validator"

export default class CinemaHallDTO {
  @IsString()
  @Length(3, 32)
  name: string

  @IsNumber()
  numberOfSeats: number
}
