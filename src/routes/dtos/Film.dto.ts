import { IsArray, IsBoolean, IsInt, IsOptional, IsString, Min } from "class-validator"
import AgeCategory from "../../models/film/AgeCategory"
import FilmTypes from "../../models/film/FilmTypes"

class FilmDTO {
  @IsString()
  title: string

  @IsString()
  producent: string

  @IsArray()
  mainActors: Array<string>

  @IsString()
  type: typeof FilmTypes

  @IsOptional()
  @IsString()
  trailer: string

  @IsInt()
  @Min(1)
  filmLength: number

  @IsString()
  ageCategory: typeof AgeCategory

  @IsBoolean()
  is3D: boolean

  @IsOptional()
  @IsArray()
  hours: Array<string>

  @IsOptional()
  @IsArray()
  dates: Array<string>
}

export default FilmDTO
