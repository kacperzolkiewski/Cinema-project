export interface Seat {
  id: string
  state: SeatState
  seatRow: number
  seatNumber: number
}

export enum SeatState {
  free,
  selected,
  booked,
  excluded
}
