import { IsString, MaxLength, MinLength, IsDate, IsEmail, IsNumberString } from "class-validator"

class CreateUserDto {
    @IsString()
    public name: string

    @IsString()
    public surname: string

    @IsNumberString()
    @MaxLength(9)
    public phoneNumber: string

    @IsEmail()
    public email: string

    @IsString()
    @MaxLength(256)
    @MinLength(6)
    public password: string

    @IsDate()
    public dateOfBirth: string
}

export default CreateUserDto
