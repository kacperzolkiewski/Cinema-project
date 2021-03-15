import { Request, Response } from "express"
import paypal from "paypal-rest-sdk"

paypal.configure({
    mode: "sandbox",
    client_id: "ASpNB2cVl_ZuF1bTHvzCLPuo3XsH_azwbuNp2S6-aWnScByHcCSoVywTEtwmHmE_bDdQnLSOXlLLEy1H",
    client_secret: "EESgAZabiTtNvXCZNBJLUYntYGr4gHZfNf2-o82dQ6jmoYWUuj2mqy1kSvQ-NxnwW-1Eq75A6oHEoigQ",
})

export const createPayment = async (req: Request, res: Response) => {}

export const successPayment = async (req: Request, res: Response) => {}

export const refundPayment = async (req: Request, res: Response) => {}
