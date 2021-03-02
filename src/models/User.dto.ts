import { IsString, MaxLength, MinLength } from "class-validator"

class CreateUserDto {
    @IsString()
    public name: string

    @IsString()
    public surname: string

    @IsString()
    public email: string

    @IsString()
    @MaxLength(256)
    @MinLength(6)
    public password: string
}

export default CreateUserDto
