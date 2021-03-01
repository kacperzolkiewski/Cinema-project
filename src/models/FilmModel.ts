import * as mongoose from "mongoose"
import FilmTypes from "./FilmTypes"
import AgeCategory from "./AgeCategory"
import IFilm from "./Film.interface"

const FilmSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    producent: {
        required: true,
        type: String,
    },
    mainActions: {
        required: true,
        type: Array,
    },
    type: {
        required: true,
        type: FilmTypes,
    },
    trailer: {
        required: false,
        type: String,
    },
    filmLength: {
        required: true,
        type: Number,
    },
    ageCategory: {
        required: true,
        type: AgeCategory,
    },
    is3D: {
        required: true,
        type: Boolean,
    },
})

const FilmModel = mongoose.model<IFilm & mongoose.Document>("FilmModel", FilmSchema)

export default FilmModel
