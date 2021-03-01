import * as mongoose from "mongoose"
import IFilm from "./Film.interface"
import AgeCategory from "./AgeCategory"
import FilmTypes from "./FilmTypes"

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
    hours: {
        required: false,
        type: Array,
    },
    dates: {
        required: false,
        type: Array,
    },
})

const FilmModel = mongoose.model<IFilm & mongoose.Document>("FilmModel", FilmSchema)

export default FilmModel
