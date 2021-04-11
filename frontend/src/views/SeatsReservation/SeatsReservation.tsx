import { Component } from "react" // let's also import Component
import { HallComponent } from "./HallComponent"
import { TicketComponent } from "./TicketComponent"

export interface SeatsReservationProps {}

export interface SeatsReservationState {
  isReady: boolean
  choosenTickets: JSX.Element[]
}

export class SeatsReservation extends Component<
  SeatsReservationProps,
  SeatsReservationState
> {
  constructor(props: SeatsReservationProps) {
    super(props)
    this.state = {
      isReady: false,
      choosenTickets: []
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

  private renderChoosenTicets = (): JSX.Element => {
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

        <div>{this.renderChoosenTicets()}</div>
      </>
    )
  }
}
