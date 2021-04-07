import { Component } from "react"

export interface TicketComponentProps {
  seatId: string
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
    return (
      <>
        <p>Ticket for seatId: {this.props.seatId}</p>
      </>
    )
  }
}
