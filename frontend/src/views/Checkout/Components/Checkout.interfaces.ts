import { ITicket } from "../../SeatsReservation/BuyButtonComponent"

export interface IFilmArticle {
  title: string
  imageUrl: string
  quantity: number
  onQuantityChange?: any
}

export interface IFilmSection {
  filmsCount: number
  tickets: ITicket[]
}

export interface IPaymentButton {
  total: number
  onQuantityChange?: any
}
