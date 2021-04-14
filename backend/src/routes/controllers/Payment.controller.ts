import { Router } from "express"
import Controller from "../../interfaces/Controller.interface"
import { IPayment } from "../../services/Payment/IPayment"
import PaymentService from "../../services/Payment/PaymentService"

class PaymentController implements Controller {
  readonly path: string = "/payment"
  readonly router: Router = Router()
  readonly paymentService: IPayment = new PaymentService()

  constructor() {
    this.initRoutes()
  }

  initRoutes = (): void => {
    this.router.post(`${this.path}/pay`, this.paymentService.createPayment)
    this.router.post(`${this.path}/success`, this.paymentService.successPayment)
  }
}

export default PaymentController
