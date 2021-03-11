import { Router, Request, Response } from "express"
import FilmModel from "../../models/film/FilmModel"
import validationMiddleware from "../../utils/middlewares/validation.middleware"
import FilmDTO from "./Film.dto"

const router = Router()

type RequestParam = { id?: string }

router.get("/", async (req: Request, res: Response) => {
  await FilmModel.find()
    .then((resp) => {
      res.status(200).json(resp)
    })
    .catch((e) => res.status(503).json({ error: e.message }))
})

router.get("/:id", async (req: Request<RequestParam>, res: Response) => {
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
})

router.post("/", [validationMiddleware(FilmDTO)], async (req: Request<RequestParam, {}, FilmDTO>, res: Response) => {
  await FilmModel.create(req.body)
    .then((resp) => {
      res.status(201).json(resp)
    })
    .catch((e) => res.status(503).json({ error: e.message }))
})

router.patch("/:id", [validationMiddleware(FilmDTO)], async (req: Request<RequestParam, {}, FilmDTO>, res: Response) => {
  const id = req.params.id

  await FilmModel.findByIdAndUpdate(id, req.body)
    .then((resp) => {
      res.status(200).json(resp)
    })
    .catch((e) => res.status(503).json({ error: e.message }))
})

router.delete("/:id", async (req: Request<RequestParam>, res: Response) => {
  const id = req.params.id

  await FilmModel.findByIdAndDelete(id)
    .then((resp) => res.status(200).json(resp))
    .catch((e) => res.status(503).json(e.message))
})

export default router
