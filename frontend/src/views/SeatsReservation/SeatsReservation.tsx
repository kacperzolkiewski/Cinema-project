import CSS from "csstype"
import { Component } from "react"
import { BuyButtonComponent } from "./BuyButtonComponent"
import { HallComponent } from "./HallComponent"
import { Seat, SeatState } from "./Seat.Model"
import { SEATS } from "./SeatsList.MockedData"
import { Ticket, TicketType } from "./Ticket.Model"
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
          type: TicketType.normal,
          price: 12,
          seatNumber: seat.seatNumber,
          seatRow: seat.seatRow
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
    const justifyCenter: CSS.Properties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }

    return (
      <div style={justifyCenter}>
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
        {this.state.tickets.length > 0 && (
          <BuyButtonComponent tickets={this.state.tickets} key={"BuyButton"} />
        )}
      </div>
    )
  }
}
