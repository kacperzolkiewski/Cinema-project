import { IsArray, IsBoolean, IsInt, IsOptional, IsString, Min } from "class-validator"

class FilmDto {
  @IsString()
  title: string

  @IsString()
  producent: string

  @IsArray()
  mainActions: Array<string>

  @IsString()
  type: string

  @IsOptional()
  @IsString()
  trailer: string

  @IsInt()
  @Min(1)
  filmLength: number

  @IsString()
  ageCategory: string

  @IsBoolean()
  is3D: boolean

  @IsOptional()
  @IsArray()
  hours: Array<string>

  @IsOptional()
  @IsArray()
  dates: Array<string>
}

export default FilmDto
