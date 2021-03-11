import express from "express"
const router = express.Router()

/**
 * @swagger
 * /test:
 *  get:
 *    responses:
 *      200:
 *        description: Response data object
 */
router.get("/", (req, res) => {
    res.status(200).send("Test")
})

export default router
