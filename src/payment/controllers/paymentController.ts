/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from "express"
const paypal = require("paypal-rest-sdk")
import { SDKError, Payment } from "paypal-rest-sdk"

paypal.configure({
  mode: "sandbox",
  client_id: "ASpNB2cVl_ZuF1bTHvzCLPuo3XsH_azwbuNp2S6-aWnScByHcCSoVywTEtwmHmE_bDdQnLSOXlLLEy1H",
  client_secret: "EESgAZabiTtNvXCZNBJLUYntYGr4gHZfNf2-o82dQ6jmoYWUuj2mqy1kSvQ-NxnwW-1Eq75A6oHEoigQ"
})

export const createPayment = (req: Request, res: Response): void => {
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
              quantity: +req.query.quantity!
            }
          ]
        },
        amount: {
          currency: "PLN",
          total: `${+req.query.quantity! * 25.0}`
        },
        description: JSON.stringify(req.query.description)
      }
    ]
  }

<<<<<<< HEAD
    paypal.payment.create(sample_payment_json, (error: SDKError, payment: Payment): void => {
        if (error) {
            throw error
        } else {
            payment.links!.forEach((link: paypal.Link) => {
                link.rel === "approval_url" && res.redirect(link.href)
            })
        }
    })
=======
  paypal.payment.create(sample_payment_json, (error: SDKError, payment: Payment): void => {
    if (error) {
      throw error
    } else {
      payment.links!.forEach((link) => {
        link.rel === "approval_url" && res.redirect(link.href)
      })
    }
  })
>>>>>>> b291d03 (Create success endpoint, implementing api to project)
}

export const successPayment = (req: Request, res: Response): void => {
  const payerId: string = JSON.stringify(req.query.PayerID)
  const paymentId: string = JSON.stringify(req.query.paymentId)

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "PLN",
          total: +req.query.quantity! * 25.0
        }
      }
    ]
  }

  paypal.payment.execute(paymentId, execute_payment_json, (error: SDKError, payment: Payment): void => {
    if (error) {
      throw error
    } else {
      res.json(payment)
    }
  })
}
