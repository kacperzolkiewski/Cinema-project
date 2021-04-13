import { Request, Response } from "express"

export type RequestParamsPay = {
  name: string
  quantity: number
  description: string
}

export type RequestParamsSuccess = {
  quantity: number
  PayerID: string
  paymentId: string
  token?: string
}
export interface IPayment {
  createPayment(req: Request<{}, {}, RequestParamsPay, {}>, res: Response): void
  successPayment(req: Request<{}, {}, RequestParamsSuccess, {}>, res: Response): void
}
