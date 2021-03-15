/* eslint-disable @typescript-eslint/no-var-requires */
import { createPayment, successPayment } from "../controllers/paymentController"
const express = require("express")

const paymentRouter = express.Router()

paymentRouter.post("/pay", createPayment)
paymentRouter.post("/success", successPayment)

export default paymentRouter
