import "dotenv/config"
import { Request, Response } from "express"
import * as paypal from "paypal-rest-sdk"
import { SDKError, Payment, PaymentResponse } from "paypal-rest-sdk"
import ExecuteRequestJson from "../../interfaces/payment.interface"
import { samplePayment, executePayment } from "../../templates/payments/payment.templates"
import { IPayment, RequestParamsPay, RequestParamsSuccess } from "./IPayment"

paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID || "",
  client_secret: process.env.CLIENT_SECRET || ""
})

class PaymentService implements IPayment {
  createPayment = (req: Request<{}, {}, RequestParamsPay, {}>, res: Response): void => {
    const createPaymentJson: Payment = samplePayment(req)

    paypal.payment.create(createPaymentJson, (error: SDKError, payment: PaymentResponse): void => {
      if (error) {
        res.status(400).send(error)
      } else {
        payment.links &&
          payment.links.forEach((link: paypal.Link) => {
            link.rel === "approval_url" && res.status(200).redirect(link.href)
          })
      }
    })
  }

  successPayment = (req: Request<{}, {}, {}, RequestParamsSuccess>, res: Response): void => {
    const executePayemntJson: ExecuteRequestJson = executePayment(req)

    paypal.payment.execute(req.query.paymentId, executePayemntJson, (error: SDKError, payment: Payment): void => {
      if (error) {
        res.status(400).send(error)
      } else {
        window.localStorage.setItem("payment", JSON.stringify(payment))
        res.status(200).redirect("/")
      }
    })
  }
}

export default PaymentService
