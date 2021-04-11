import { Component } from "react" // let's also import Component
import { HallComponent } from "./HallComponent"
import { Seat } from "./Seat.Model"
import { TicketComponent } from "./TicketComponent"

export interface TicketSectionProps {
  choosenSeats: Seat[]
  tickets: Ticket[]
}

export interface TicketSectionState {
  isReady: boolean
}

export class TicketSection extends Component<
  TicketSectionProps,
  TicketSectionState
> {
  constructor(props: TicketSectionProps) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  private onSeatSelection = (selectedSeatId: string): void => {
    this.setState((prevState) => {
      const tickets = prevState.choosenTickets

      tickets.push(<TicketComponent seatId={selectedSeatId} />)

      return { choosenTickets: tickets }
    })
  }

  private renderChoosenTickets = (): JSX.Element => {
    return (
      <>
        {this.state.choosenTickets.map((ticket) => (
          <>{ticket}</>
        ))}
      </>
    )
  }

  render() {
    return (
      <>
        <p>temp page url = "/seatsReservation?movieId=12"</p>

        <HallComponent onSeatSelection={this.onSeatSelection} />

        <h3>Choosen tickets:</h3>

        <div>{this.renderChoosenTickets()}</div>
      </>
    )
  }
}
