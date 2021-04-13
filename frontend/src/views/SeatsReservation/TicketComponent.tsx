import CSS from "csstype"
import { Component } from "react"
import { Ticket, TicketType } from "./Ticket.Model"

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

  getSeatRowLabel = (seatRow: number): string => {
    const dictionary: { [id: number]: string } = {
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "F",
      7: "G",
      8: "H",
      9: "I"
    }

    return dictionary[seatRow] || ""
  }

  private onSeatComponentClick = (event: any, type: TicketType): void => {
    event.preventDefault()

    const ticket = this.props.ticket

    if (type === TicketType.normal) {
      ticket.type = TicketType.normal
      ticket.price = 29.99
    }

    if (type === TicketType.discounted) {
      ticket.type = TicketType.discounted
      ticket.price = 19.99
    }

    this.props.onTicketChange(ticket)
  }

  render() {
    const ticketCss: CSS.Properties = {
      padding: "15px 20px",
      margin: "15px 15px",
      width: "calc(30%-30px)",
      backgroundColor: "#e0e0e0",
      color: "black",
      border: "1px solid #E0E0E0",
      boxSizing: "border-box",
      boxShadow:
        "0px 2px 10px rgba(34, 36, 38, 0.15), 0px 2px 4px rgba(34, 36, 38, 0.12), 0px 2px 4px #D4D4D5",
      borderRadius: "4px",
      fontSize: "x-large"
    }

    const activePriceButtonCss: CSS.Properties = {
      background: "linear-gradient(270deg, #6E093A 1.67%, #BF1063 100%)",
      border: "2px solid #BF1063",
      boxSizing: "border-box",
      borderRadius: "4px",
      color: "#FFFFFF",
      width: "140px",
      margin: "0px 5px",

      fontFamily: "Roboto",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      textAlign: "center",
      textTransform: "uppercase",
      padding: "0.5rem 1rem"
    }

    const priceButtonCss: CSS.Properties = {
      background: "#ffffff",
      border: "2px solid #BF1063",
      boxSizing: "border-box",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      width: "140px",
      margin: "0px 5px",

      fontFamily: "Roboto",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      textAlign: "center",
      textTransform: "uppercase"
    }

    const ticketPrice: CSS.Properties = {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px"
    }

    const buttonsContainer: CSS.Properties = {
      display: "flex",
      flexDirection: "row",
      flexFlow: "wrap",
      flexGrow: 2
    }

    return (
      <div style={ticketCss}>
        <p style={{ textAlign: "center", margin: "0.25em 0 0.5em 0" }}>
          Miejsce:{" "}
          <b>
            {this.props.ticket.seatNumber}
            {this.getSeatRowLabel(this.props.ticket.seatRow)}
          </b>
        </p>

        <div style={buttonsContainer}>
          <div
            style={
              this.props.ticket.type === TicketType.discounted
                ? activePriceButtonCss
                : priceButtonCss
            }
            onClick={(event) =>
              this.onSeatComponentClick(event, TicketType.discounted)
            }
          >
            <p>
              ULGOWY <br /> <span style={ticketPrice}>19.99 ZŁ </span>
            </p>
          </div>
          <div
            style={
              this.props.ticket.type === TicketType.normal
                ? activePriceButtonCss
                : priceButtonCss
            }
            onClick={(event) =>
              this.onSeatComponentClick(event, TicketType.normal)
            }
          >
            <p>
              NORMALNY <br /> <span style={ticketPrice}>29.99 ZŁ </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
