import express from "express"
import { createPayment, successPayment, refundPayment } from "../controllers/paymentController"

const paymentRouter = express.Router()

paymentRouter.post("/pay", createPayment)
paymentRouter.get("/success", successPayment)
paymentRouter.get("/refund", refundPayment)

export default paymentRouter
