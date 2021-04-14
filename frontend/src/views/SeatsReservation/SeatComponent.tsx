import CSS from "csstype"
import { Component } from "react"
import { Seat, SeatState } from "./Seat.Model"

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
      padding: "10px 10px",
      width: "50px",
      height: "50px",
      textAlign: "center",

      color: this.props.seat.state === SeatState.excluded ? "black" : "white",
      backgroundColor:
        this.props.seat.state === SeatState.excluded
          ? "black"
          : this.props.seat.state === SeatState.free
          ? "green"
          : this.props.seat.state === SeatState.booked
          ? "grey"
          : "red"
    }
    return (
      <>
        <div style={seatCss}>
          {this.props.seat.state === SeatState.selected ? (
            <span></span>
          ) : (
            <span></span>
          )}
          <span className="row--seat__seat-number">
            {this.props.seat.seatNumber}
          </span>
        </div>
      </>
    )
  }
}
