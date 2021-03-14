import express from "express"
import { createPayment, successPayment } from "../controllers/paymentController"

const paymentRouter = express.Router()

paymentRouter.post("/pay", createPayment)
paymentRouter.get("/success", successPayment)

export default paymentRouter
