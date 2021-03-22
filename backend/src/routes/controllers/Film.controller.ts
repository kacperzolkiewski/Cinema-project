import { Router, Request, Response } from "express"
import Controller from "../../interfaces/Controller.interface"
import FilmModel from "../../models/film/FilmModel"
import validationMiddleware from "../../utils/middlewares/validation.middleware"
import FilmDTO from "../dtos/Film.dto"

type RequestParam = { id?: string }

class FilmController implements Controller {
  public readonly path: string = "/films"
  public readonly router: Router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes(): void {
    this.router.get(`${this.path}/`, this.getAllFilms)
    this.router.get(`${this.path}/:id`, this.getFilmById)
    this.router.post(`${this.path}`, [validationMiddleware(FilmDTO)], this.addFilm)
    this.router.patch(`${this.path}/:id`, [validationMiddleware(FilmDTO)], this.updateFilm)
    this.router.delete(`${this.path}/:id`, this.deleteFilm)
  }

  private getAllFilms = async (req: Request, res: Response): Promise<void> => {
    await FilmModel.find()
      .then((resp) => {
        res.status(200).json(resp)
      })
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private getFilmById = async (req: Request<RequestParam>, res: Response): Promise<void> => {
    const id = req.params.id

    await FilmModel.findById(id)
      .then((resp) => {
        if (resp) {
          res.status(200).json(resp)
        } else {
          res.status(404).json({ message: "Film with given ID is not found" })
        }
      })
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private addFilm = async (req: Request<RequestParam, {}, FilmDTO>, res: Response): Promise<void> => {
    await FilmModel.create(req.body)
      .then((resp) => {
        res.status(201).json(resp)
      })
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private updateFilm = async (req: Request<RequestParam, {}, FilmDTO>, res: Response): Promise<void> => {
    const id = req.params.id

    await FilmModel.findByIdAndUpdate(id, req.body)
      .then((resp) => {
        res.status(200).json(resp)
      })
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private deleteFilm = async (req: Request<RequestParam>, res: Response): Promise<void> => {
    const id = req.params.id

    await FilmModel.findByIdAndDelete(id)
      .then((resp) => res.status(200).json(resp))
      .catch((e) => res.status(503).json(e.message))
  }
}

export default FilmController
