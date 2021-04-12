import CSS from "csstype"
import { Component } from "react"

export class SeatReservationComponent extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  render() {
    const SeatReservationCss: CSS.Properties = {
      margin: "auto",
      padding: "5px",
      width: "15%",
      height: "fit-content",
      backgroundColor: "#1976d2",
      color: "white",
      fontFamily: "Sarpanch",
      fontSize: "25px",
      textAlign: "center",
      placeSelf: "center"
    }

    return (
      <div style={SeatReservationCss}>
        <p>Rezerwuj</p>
      </div>
    )
  }
}
