import { Component } from "react"
import { Seat } from "./Seat.Model"
import { SeatComponent } from "./SeatComponent"
import { SEATS } from "./SeatsList.MockedData"

export interface HallComponentProps {
  onSeatSelection(selectedSeatId: string): void
}

export interface HallComponentState {
  isReady: boolean
  seats: Seat[]
}

export class HallComponent extends Component<
  HallComponentProps,
  HallComponentState
> {
  constructor(props: HallComponentProps) {
    super(props)
    this.state = { isReady: false, seats: SEATS }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  private onSeatComponentClick = (event: any, seat: Seat): void => {
    event.preventDefault()
    this.setState((prevState) => {
      const seats = prevState.seats
      seats.forEach((s) => {
        if (s.id === seat.id) {
          switch (s.state) {
            case "empty":
              break
            case "free":
              s.state = "selected"
              break
            case "selected":
              s.state = "free"
              break
          }
        }
      })
      return { seats: seats }
    })

    this.props.onSeatSelection(seat.id)
  }

  render() {
    const groupedByRows = this.state.seats.reduce(
      (entryMap: Map<number, Seat[]>, e: Seat) =>
        entryMap.set(e.seatRow, [...(entryMap.get(e.seatRow) || []), e]),
      new Map<number, Seat[]>()
    )

    const groupedArray: Array<Seat[]> = []

    groupedByRows.forEach((row) =>
      groupedArray.push(row.sort((n1, n2) => parseInt(n1.id) - parseInt(n2.id)))
    )

    return (
      <>
        <h1>SCREEN</h1>

        <table>
          {groupedArray.map((row: Seat[]) => (
            <tr>
              {row.map((seat: Seat) => (
                <td onClick={(event) => this.onSeatComponentClick(event, seat)}>
                  <SeatComponent seat={seat} key={seat.id} />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </>
    )
  }
}
