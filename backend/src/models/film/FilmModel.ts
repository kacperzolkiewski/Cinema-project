import * as mongoose from "mongoose"
import AgeCategory from "./AgeCategory"
import IFilm from "./Film.model"
import FilmTypesArr from "./FilmTypes"

const FilmSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  producent: {
    required: true,
    type: String
  },
  mainActors: {
    required: true,
    type: Array
  },
  type: {
    required: true,
    type: String,
    enum: FilmTypesArr
  },
  trailer: {
    required: false,
    type: String
  },
  filmLength: {
    required: true,
    type: Number
  },
  ageCategory: {
    required: true,
    type: String,
    enum: AgeCategory
  },
  is3D: {
    required: true,
    type: Boolean
  },
  hours: {
    required: false,
    type: Array
  },
  dates: {
    required: false,
    type: Array
  },
  poster: {
    type: String,
    required: false
  },
  isPremiere: {
    type: Boolean,
    required: false,
    default: true
  },
  description: {
    type: String,
    required: true
  }
})

const FilmModel = mongoose.model<IFilm & mongoose.Document>("FilmModel", FilmSchema)

export default FilmModel
