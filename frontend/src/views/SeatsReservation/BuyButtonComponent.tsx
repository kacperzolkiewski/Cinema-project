import CSS from "csstype"
import { Component } from "react"

export class BuyButtonComponent extends Component {
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
      background: "linear-gradient(270deg, #6E093A 1.67%, #BF1063 100%)",
      border: "2px solid #BF1063",
      boxSizing: "border-box",
      borderRadius: "4px",
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: "1.5em"
    }

    return (
      <div style={SeatReservationCss}>
        <p>KUP BILETY</p>
      </div>
    )
  }
}
