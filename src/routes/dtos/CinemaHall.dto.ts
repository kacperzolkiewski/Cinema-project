import { IsNumber, IsString, Max, Min } from "class-validator"

export default class CinemaHallDTO {
  @IsString()
  @Min(3)
  @Max(32)
  name: string

  @IsNumber()
  numberOfSeats: number
}
