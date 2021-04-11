import CSS from "csstype"
import { Component } from "react"
import { Seat, SeatState } from "./Seat.Model"
import { SeatComponent } from "./SeatComponent"

export interface HallComponentProps {
  seats: Seat[]
  onSeatSelection(seat: Seat): void
}

export interface HallComponentState {
  isReady: boolean
}

export class HallComponent extends Component<
  HallComponentProps,
  HallComponentState
> {
  constructor(props: HallComponentProps) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  private onSeatComponentClick = (event: any, seat: Seat): void => {
    event.preventDefault()
    if (seat.state === SeatState.selected || seat.state === SeatState.free)
      this.props.onSeatSelection(seat)
  }

  render() {
    const groupedByRows = this.props.seats.reduce(
      (entryMap: Map<number, Seat[]>, e: Seat) =>
        entryMap.set(e.seatRow, [...(entryMap.get(e.seatRow) || []), e]),
      new Map<number, Seat[]>()
    )

    const groupedArray: Array<Seat[]> = []

    groupedByRows.forEach((row) =>
      groupedArray.push(row.sort((n1, n2) => parseInt(n1.id) - parseInt(n2.id)))
    )

    const tableContainer: CSS.Properties = {
      display: "flex",
      justifyContent: "center"
    }

    const screenH1Css: CSS.Properties = {
      textAlign: "center",
      borderColor: "white"
    }

    return (
      <>
        <h1 style={screenH1Css}>SCREEN</h1>

        <div style={tableContainer}>
          <table>
            <tbody>
              {groupedArray.map((row: Seat[]) => (
                <tr>
                  {row.map((seat: Seat) => (
                    <td
                      onClick={(event) =>
                        this.onSeatComponentClick(event, seat)
                      }
                    >
                      <SeatComponent
                        seat={seat}
                        key={`${seat.id}-${seat.state}-${seat.seatRow}-${seat.seatNumber}}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
