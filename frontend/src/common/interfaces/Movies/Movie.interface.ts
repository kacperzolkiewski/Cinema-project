import AgeCategoryArr from "./AgeCategory"
import FilmTypesArr from "./FilmTypes"

export default interface IMovie {
  _id: string
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
}
