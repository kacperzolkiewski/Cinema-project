import { Router, Response, Request } from "express"
import Controller from "../../interfaces/Controller.interface"
import CinemaHallModel from "../../models/cinema-hall/CinemaHallModel"
import validationMiddleware from "../../utils/middlewares/validation.middleware"
import CinemaHallDTO from "../dtos/CinemaHall.dto"

type RequestParams = { id?: string }

class CinemaHall implements Controller {
  readonly path: string = "/halls"
  readonly router: Router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes = (): void => {
    this.router.get(`${this.path}`, this.getAllHalls)
    this.router.get(`${this.path}/:id`, this.getHallById)
    this.router.post(`${this.path}`, validationMiddleware(CinemaHallDTO, false), this.addHall)
    this.router.patch(`${this.path}/:id`, validationMiddleware(CinemaHallDTO), this.updateHall)
    this.router.delete(`${this.path}/:id`, this.deleteHall)
  }

  private getAllHalls = async (req: Request, res: Response): Promise<void> => {
    await CinemaHallModel.find()
      .then((hall) => res.status(200).json(hall))
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private getHallById = async (req: Request<RequestParams>, res: Response): Promise<void> => {
    const id = req.params.id

    await CinemaHallModel.findById(id)
      .then((hall) => (hall ? res.status(200).json(hall) : res.status(404).json({ message: "CinemaHall with given ID is not found" })))
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private addHall = async (req: Request<{}, {}, CinemaHallDTO>, res: Response): Promise<void> => {
    await CinemaHallModel.create(req.body)
      .then((hall) => res.status(201).json(hall))
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private updateHall = async (req: Request<RequestParams, {}, CinemaHallDTO>, res: Response): Promise<void> => {
    const id = req.params.id

    await CinemaHallModel.findByIdAndUpdate(id, req.body, { new: true })
      .then((hall) => res.status(201).json(hall))
      .catch((e) => res.status(503).json({ error: e.message }))
  }

  private deleteHall = async (req: Request<RequestParams>, res: Response): Promise<void> => {
    const id = req.params.id
    await CinemaHallModel.findByIdAndDelete(id)
      .then((hall) => res.status(200).json(hall))
      .catch((e) => res.status(503).json({ error: e.message }))
  }
}

export default CinemaHall
