export interface Ticket {
  id: string
  seatId: string
  seatRow: number
  seatNumber: number
  type: TicketType
  price: number
}

export enum TicketType {
  normal,
  discounted
}
