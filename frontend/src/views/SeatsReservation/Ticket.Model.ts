export interface Ticket {
  id: string
  seatId: string
  seatRow: number
  seatNumber: number
  type: TicketType
  price: number
  movieId: string
}

export enum TicketType {
  normal,
  discounted
}
