import Button from "@material-ui/core/Button"
import CSS from "csstype"
import { Component } from "react"
import { Link } from "react-router-dom"
import { Ticket } from "./Ticket.Model"

interface ITicket {
  tickets: Ticket[]
  key: string
}

interface ITicketState {
  tickets: Ticket[]
  isReady: boolean
}

export class BuyButtonComponent extends Component<ITicket, ITicketState> {
  constructor(props: ITicket | Readonly<ITicket>) {
    super(props)
    this.state = {
      tickets: this.props.tickets,
      isReady: false
    }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  private submitHandler = (): void => {
    typeof window !== "undefined" &&
      window.localStorage.setItem("tickets", JSON.stringify(this.state.tickets))
  }

  render() {
    const SeatReservationCss: CSS.Properties = {
      width: "15%",
      background: "linear-gradient(270deg, #6E093A 1.67%, #BF1063 100%)",
      border: "2px solid #BF1063",
      boxSizing: "border-box",
      borderRadius: "4px",
      color: "#FFFFFF",
      fontSize: "1.5em",
      margin: "1em"
    }

    return (
      <Button
        to="/checkout"
        component={Link}
        onClick={this.submitHandler}
        style={SeatReservationCss}
      >
        KUP BILETY
      </Button>
    )
  }
}
