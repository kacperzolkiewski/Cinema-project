import { IsString, MaxLength, MinLength, IsEmail, IsNumberString, IsISO8601 } from "class-validator"

class CreateUserDto {
  @IsString()
  @MaxLength(256)
  public name: string

  @IsString()
  @MaxLength(256)
  public surname: string

  @IsNumberString()
  @MaxLength(9)
  public phoneNumber: string

  @IsEmail()
  @MaxLength(64)
  public email: string

  @IsString()
  @MaxLength(256)
  @MinLength(6)
  public password: string

  @IsISO8601()
  @MaxLength(10)
  public dateOfBirth: string
}

export default CreateUserDto
