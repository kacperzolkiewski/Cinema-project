import { Request, Response } from "express"
import paypal, { SDKError, Payment } from "paypal-rest-sdk"

paypal.configure({
    mode: "sandbox",
    client_id: "ASpNB2cVl_ZuF1bTHvzCLPuo3XsH_azwbuNp2S6-aWnScByHcCSoVywTEtwmHmE_bDdQnLSOXlLLEy1H",
    client_secret: "EESgAZabiTtNvXCZNBJLUYntYGr4gHZfNf2-o82dQ6jmoYWUuj2mqy1kSvQ-NxnwW-1Eq75A6oHEoigQ",
})

export const createPayment = (req: Request, res: Response): void => {
    const sample_payment_json: Payment = {
        intent: "sale",
        payer: {
            payment_method: "paypal",
        },
        redirect_urls: {
            return_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        },
        transactions: [
            {
                item_list: {
                    items: [
                        {
                            name: "Red Sox Hat",
                            sku: "001",
                            price: "25.00",
                            currency: "USD",
                            quantity: 1,
                        },
                    ],
                },
                amount: {
                    currency: "USD",
                    total: "25.00",
                },
                description: "Hat for the best team ever",
            },
        ],
    }

    paypal.payment.create(sample_payment_json, (error: SDKError, payment: Payment): void => {
        if (error) {
            throw error
        } else {
            payment.links!.forEach((link: paypal.Link) => {
                link.rel === "approval_url" && res.redirect(link.href)
            })
        }
    })
}

// export const successPayment = (req: Request, res: Response): void => {}

// export const refundPayment = (req: Request, res: Response): void => {}
