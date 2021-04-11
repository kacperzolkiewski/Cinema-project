import CSS from "csstype"
import { Component } from "react"
import { Seat } from "./Seat.Model"

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

      color: this.props.seat.state === "empty" ? "black" : "white",
      backgroundColor:
        this.props.seat.state === "empty"
          ? "black"
          : this.props.seat.state === "free"
          ? "green"
          : "red"
    }
    return (
      <>
        <div style={seatCss}>
          {this.props.seat.state === "selected" ? <span></span> : <span></span>}
          <span className="row--seat__seat-number">
            {this.props.seat.seatNumber}
          </span>
        </div>
      </>
    )
  }
}
