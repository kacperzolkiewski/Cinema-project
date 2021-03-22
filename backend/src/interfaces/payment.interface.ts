import { Transaction } from "paypal-rest-sdk"

export default interface ExecuteRequestJson {
  payer_id: string
  transactions: Transaction[]
}
