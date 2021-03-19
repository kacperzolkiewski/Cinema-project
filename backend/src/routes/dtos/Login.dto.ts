import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator"

class LoginDto {
  @IsString()
  @IsEmail()
  public email: string

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*])/, {
    message:
      "Password is too weak. It must contain at least 1 lowercase letter, at least 1 uppercase leter, at least 1 numeric character and at least one special character from: !@#$%^&*"
  })
  public password: string
}

export default LoginDto
