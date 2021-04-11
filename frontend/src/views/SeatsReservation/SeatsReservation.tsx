import { Component } from "react"
import { HallComponent } from "./HallComponent"
import { Seat, SeatState } from "./Seat.Model"
import { SEATS } from "./SeatsList.MockedData"
import { Ticket } from "./Ticket.Model"
import { TicketSection } from "./TicketSection"

export interface SeatsReservationProps {}

export interface SeatsReservationState {
  isReady: boolean
  seats: Seat[]
  tickets: Ticket[]
  changeTimestamp: number
}

export class SeatsReservation extends Component<
  SeatsReservationProps,
  SeatsReservationState
> {
  constructor(props: SeatsReservationProps) {
    super(props)
    this.state = {
      isReady: false,
      seats: [],
      tickets: [],
      changeTimestamp: new Date().getTime()
    }
  }

  componentDidMount() {
    this.setState({
      isReady: true,
      seats: SEATS,
      changeTimestamp: new Date().getTime()
    })
  }

  private onSeatSelection = (seat: Seat): void => {
    this.setState((prevState) => {
      const seats = prevState.seats
      let tickets = prevState.tickets

      if (seat.state === SeatState.free) {
        seats.forEach((s) => {
          if (s.id === seat.id) {
            seat.state = SeatState.selected
          }
        })

        tickets.push({
          id: "ticket-" + seat.id,
          seatId: seat.id,
          type: "normal",
          price: 12
        })
      } else if (seat.state === SeatState.selected) {
        seats.forEach((s) => {
          if (s.id === seat.id) {
            seat.state = SeatState.free
          }
        })

        tickets = tickets.filter((ticket) => ticket.seatId !== seat.id)
      }

      return {
        seats: seats,
        tickets: tickets,
        changeTimestamp: new Date().getTime()
      }
    })
  }

  private onTicketChange = (ticket: Ticket): void => {
    const tickets = this.state.tickets!

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i]!.id === ticket.id) {
        tickets[i] = ticket
      }
    }

    this.setState({ tickets: tickets, changeTimestamp: new Date().getTime() })
  }

  render() {
    return (
      <>
        <p>temp page url = "/seatsReservation?movieId=12"</p>

        <HallComponent
          seats={this.state.seats}
          onSeatSelection={this.onSeatSelection}
          key={`seats-${this.state.tickets.length}-${this.state.changeTimestamp}`}
        />

        <TicketSection
          tickets={this.state.tickets}
          onTicketChange={this.onTicketChange}
          key={`tickets-${this.state.tickets.length}-${this.state.changeTimestamp}`}
        />
      </>
    )
  }
}
