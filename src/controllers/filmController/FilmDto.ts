import {
    IsArray,
    IsBoolean,
    IsInt,
    IsOptional,
    IsString,
    Min
} from 'class-validator'

class FilmDto {

    @IsString()
    // @ts-ignore
    public title

    @IsString()
    // @ts-ignore
    public producent

    @IsArray()
    // @ts-ignore
    public mainActions

    @IsString()
    // @ts-ignore
    public type

    @IsOptional()
    @IsString()
    // @ts-ignore
    public trailer

    @IsInt()
    @Min(1)
    // @ts-ignore
    public filmLength

    @IsString()
    // @ts-ignore
    public ageCategory

    @IsBoolean()
    // @ts-ignore
    public is3D

    @IsOptional()
    @IsArray()
    // @ts-ignore
    public hours

    @IsOptional()
    @IsArray()
    // @ts-ignore
    public dates

}

export default FilmDto
