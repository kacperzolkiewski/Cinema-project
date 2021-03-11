import {Router, Request, Response} from 'express'
import FilmModel from "../../models/filmModel/FilmModel";
import validationMiddleware from "../../utils/middlewares/validation.middlewares";
import FilmDto from "./FilmDto";

const router = Router();

router.get("/", async (req: Request, res: Response) => {

    await FilmModel.find()
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(e => res.status(500).json({"error": e.message}))
})

router.get("/:id", async (req: Request, res: Response) => {

    const id = req.params;

    await FilmModel.findById(id)
        .then(resp => {
            if (resp) {
                res.status(200).json(resp)
            } else {
                res.status(404).json({"message": "Film with this ID"})
            }
        })
        .catch(e => res.status(500).json({"error": e.message}))
})

router.post("/",  [validationMiddleware(FilmDto)],async (req: Request, res: Response) => {

    await FilmModel.create(req.body)
        .then(resp => {
            res.status(201).json(resp)
        })
        .catch(e => res.status(500).json({"error": e.message}))
})

router.patch("/:id",  [validationMiddleware(FilmDto)],async (req: Request, res: Response) => {

    const id = req.params.id

    await FilmModel.findByIdAndUpdate(id,req.body,)
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(e => res.status(500).json({"error": e.message}))
})


export default router
