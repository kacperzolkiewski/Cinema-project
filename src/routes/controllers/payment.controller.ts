import "dotenv/config"
import { Router, Request, Response } from "express"
import * as paypal from "paypal-rest-sdk"
import { SDKError, Payment, PaymentResponse } from "paypal-rest-sdk"
import Controller from "../../interfaces/Controller.interface"

type RequestParams1 = { 
  name: string,
  quantity: number,
  description: string,
} 

type RequestParams2 = {
  quantity: number,
  PayerID: string,
  paymentId: string,
  token?: string
}

paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID || "",
  client_secret: process.env.CLIENT_SECRET || ""
})

class PaymentController implements Controller {
  public readonly path: string = "/payment"
  public readonly router: Router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes(): void {
    this.router.post(`${this.path}/pay`, this.createPayment)
    this.router.post(`${this.path}/success`, this.successPayment)
  }

  private createPayment = (req: Request<{}, RequestParams1>, res: Response): void => {
    const sample_payment_json: Payment = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: `http://localhost:3000/success?quantity=${req.query.quantity}`,
        cancel_url: "http://localhost:3000/cancel"
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: JSON.stringify(req.query.name),
                sku: "001",
                price: "25.00",
                currency: "PLN",
                quantity: 1
              }
            ]
          },
          amount: {
            currency: "PLN",
            total: `${req.query.quantity * 25.0}`
          },
          description: JSON.stringify(req.query.description)
        }
      ]
    }

    paypal.payment.create(sample_payment_json, (error: SDKError, payment: PaymentResponse): void => {
      if (error) {
        res.status(400).send(error)
      } else {
        payment.links.forEach((link: paypal.Link) => {
          link.rel === "approval_url" && res.status(200).redirect(link.href)
        })
      }
    })
  }

  private successPayment = (req: Request<RequestParams2>, res: Response): void => {
    const execute_payment_json = {
      payer_id: req.params.PayerID,
      transactions: [
        {
          amount: {
            currency: "PLN",
            total: +req.params.quantity * 25.0
          }
        }
      ]
    }

    paypal.payment.execute(req.params.paymentId, execute_payment_json, (error: SDKError, payment: Payment): void => {
      if (error) {
        res.status(400).send(error)
      } else {
        res.status(200).json(payment)
      }
    })
  }
}

export default PaymentController
