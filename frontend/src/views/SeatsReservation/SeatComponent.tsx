import CSS from "csstype"
import { Component } from "react"

export interface Seat {
  id: string
  state: string
  seatRow: number
  seatNumber: number
}

export interface SeatComponentProps {
  seat: Seat
}

export interface SeatComponentState {
  isReady: boolean
}

export class SeatComponent extends Component<
  SeatComponentProps,
  SeatComponentState
> {
  constructor(props: SeatComponentProps) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  render() {
    const seatCss: CSS.Properties = {
      flexGrow: 1,
      color: "white",
      backgroundColor: this.props.seat.state === "free" ? "green" : "yellow"
    }
    return (
      <>
        <div style={seatCss}>
          {this.props.seat.state === "selected" ? (
            <span>selected</span>
          ) : (
            <span>free</span>
          )}
          <span className="row--seat__row-number">
            {this.props.seat.seatRow}{" "}
          </span>
          <span className="row--seat__seat-number">
            {this.props.seat.seatNumber}
          </span>
        </div>
      </>
    )
  }
}
