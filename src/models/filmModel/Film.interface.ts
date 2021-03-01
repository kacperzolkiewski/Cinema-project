import FilmTypes from "./FilmTypes"
import AgeCategory from "./AgeCategory"

export default interface IFilm {
    title: string
    producent: string
    mainActors: string[]
    type: FilmTypes
    trailer?: string
    filmLength: number
    ageCategory: AgeCategory
    is3D: boolean
    hours: string[]
    dates: string[]
}
