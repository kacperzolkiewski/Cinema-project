import CSS from "csstype"
import { Component } from "react"
import { Ticket } from "./Ticket.Model"

export interface TicketComponentProps {
  ticket: Ticket
  onTicketChange(ticket: Ticket): void
}

export interface TicketComponentState {
  isReady: boolean
}

export class TicketComponent extends Component<
  TicketComponentProps,
  TicketComponentState
> {
  constructor(props: TicketComponentProps) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  render() {
    const ticketCss: CSS.Properties = {
      padding: "15px 20px",
      margin: "30px 30px",
      width: "25%",
      backgroundColor: "#e0e0e0",
      color: "black"
    }

    return (
      <div style={ticketCss}>
        <p>Ticket for seatId: {this.props.ticket.id}</p>
      </div>
    )
  }
}
