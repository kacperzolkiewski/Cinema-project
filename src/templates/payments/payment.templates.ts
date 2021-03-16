import { Request } from "express"
import { Payment } from "paypal-rest-sdk"
import ExecuteRequestJson from "../../interfaces/payment.interface"
import { RequestParams1, RequestParams2 } from "../../routes/controllers/payment.controller"

export const samplePayment = (req: Request<{}, {}, {}, RequestParams1>): Payment => {
  return {
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
}

export const executePayment = (req: Request<{}, {}, {}, RequestParams2>): ExecuteRequestJson => {
  return {
    payer_id: req.query.PayerID,
    transactions: [
      {
        amount: {
          currency: "PLN",
          total: `${+req.query.quantity * 25.0}`
        }
      }
    ]
  }
}
