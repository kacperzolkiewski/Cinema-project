import FilmTypesArr from "./FilmTypes"
import AgeCategoryArr from "./AgeCategory"

export default interface IFilm {
    title: string
    producent: string
    mainActors: string[]
    type: typeof FilmTypesArr
    trailer?: string
    filmLength: number
    ageCategory: typeof AgeCategoryArr
    is3D: boolean
    hours?: string[]
    dates?: string[]
}
