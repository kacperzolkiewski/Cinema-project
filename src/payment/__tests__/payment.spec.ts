import * as supertest from "supertest"
import * as app from "./../../index"
import { mockResponse1, mockResponse2, mockResponse3, mockResponse4, mockResponse5 } from  "./__mocks__/mockResponses"


jest.useFakeTimers()

describe("Create matching 'execute_payment' Objects", () => {
    it("Successfull payment since every data matches mock response", () => {
      const PayerID = "EPSETXNXPKL6C"
      const quantity = 1
      const payment1 = {
          payer_id: PayerID,
          transactions: [
            {
              amount: {
                currency: "PLN",
                total: `${(quantity * 25.0).toFixed(1)}`
              }
            }
          ]
      }
        expect(payment1).toStrictEqual(mockResponse1)
    })

    it("Failure attempt since PayerID doesn't match mock response", () => {
      const PayerID = "WRONGPAYERID"
      const quantity = 1
      const payment2 = {
          payer_id: PayerID,
          transactions: [
            {
              amount: {
                currency: "PLN",
                total: `${(quantity * 25.0).toFixed(1)}`
              }
            }
          ]
      }
        expect(payment2).not.toStrictEqual(mockResponse2)
    })

    it("Successfull payment since even numbers multiply correctly", () => {
      const PayerID = "1D0SCG39STJ39"
      const quantity = 2
      const payment3 = {
          payer_id: PayerID,
          transactions: [
            {
              amount: {
                currency: "PLN",
                total: `${(quantity * 25.0).toFixed(1)}`
              }
            }
          ]
      }
        expect(payment3).toStrictEqual(mockResponse3)
    })

    it("Failure attempt since quantity doesn't multiply correctly", () => {
      const PayerID = "5ED0L94IQVTEA"
      const quantity = 70
      const payment4 = {
          payer_id: PayerID,
          transactions: [
            {
              amount: {
                currency: "PLN",
                total: `${(quantity * 25.0).toFixed(1)}`
              }
            }
          ]
      }
        expect(payment4).not.toStrictEqual(mockResponse4)
    })
})

describe("Create matching 'sample_payment_json' Objects", () => {
  it("Successfull payment since every data matches mock response", () => {
    const quantity = 2
    const sample_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: `http://localhost:3000/success?quantity=${quantity}`,
        cancel_url: "http://localhost:3000/cancel"
      },
      transactions: [{
        item_list: {
          items: [{
            name: "The Shawshank Redemption",
            sku: "001",
            price: (quantity * 25.0).toFixed(1),
            currency: "PLN",
            quantity: quantity
          }]
        },
      amount: {
        currency: "PLN",
        total: "25.0"
      },
      description: "Film ticket for 'The Shawshank Redemption'."
      }]
    }
    expect(sample_payment_json).toStrictEqual(mockResponse5)
  })
  
  it("Failure attempt to create Object since quantity doesn't match the mock response", () => {
    const quantity = 1
    const sample_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: `http://localhost:3000/success?quantity=${quantity}`,
        cancel_url: "http://localhost:3000/cancel"
      },
      transactions: [{
        item_list: {
          items: [{
            name: "The Shawshank Redemption",
            sku: "001",
            price: (quantity * 25.0).toFixed(1),
            currency: "PLN",
            quantity: quantity
          }]
        },
      amount: {
        currency: "PLN",
        total: (quantity * 25.0).toFixed(1)
      },
      description: "Film ticket for 'The Shawshank Redemption'."
      }]
    }
    expect(sample_payment_json).not.toStrictEqual(mockResponse5)
  })
})

describe("Getting responses status from /payment/pay", () => {
  it("Getting response 200",  (done) => {
    const request = supertest(app)
    request
      .post("/payment/pay?name=Harry-Potter&quantity=1&description=Best-movie-ever")
      .expect(200)
    
    done()
  })
})