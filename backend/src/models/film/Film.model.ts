import AgeCategoryArr from "./AgeCategory"
import FilmTypesArr from "./FilmTypes"

export default interface IFilm {
  title: string
  producent: string
  mainActors: string[]
  type: typeof FilmTypesArr
  trailer?: string
  filmLength: number
  ageCategory: typeof AgeCategoryArr
  is3D: boolean
  hours: string[]
  dates: string[]
  poster: string
  isPremiere: boolean
  description: string
}
