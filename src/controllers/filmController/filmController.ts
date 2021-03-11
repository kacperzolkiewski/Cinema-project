import {Router, Request, Response} from 'express'
import FilmModel from "../../models/filmModel/FilmModel";

const router = Router();

router.get("/", async (req: Request, res: Response)=>{

    await FilmModel.find()
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(e => res.status(500).json({"error": e.message}))
})

router.get("/:id", async (req: Request, res: Response)=> {
    const id = req.params;
    await FilmModel.findById(id)
        .then( resp => {
            if (resp){
                res.status(200).json(resp)
            } else{
                res.status(404).json({"message": "Film with this ID"})
            }
        })
        .catch( e => res.status(500).json({"error": e.message}))
})



export default router
