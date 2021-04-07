import { Component } from "react"
import { SeatComponent, Seat } from "./SeatComponent"

export interface BoardComponentProps {
  onSeatSelection(selectedSeatId: string): void
}

export interface BoardComponentState {
  isReady: boolean
  seats: Seat[]
}

const SEATS: Seat[] = [
  { id: "1", state: "free", seatRow: 1, seatNumber: 1 },
  { id: "2", state: "free", seatRow: 1, seatNumber: 2 },
  { id: "3", state: "free", seatRow: 1, seatNumber: 3 },
  { id: "4", state: "free", seatRow: 1, seatNumber: 4 },

  { id: "5", state: "free", seatRow: 2, seatNumber: 1 },
  { id: "6", state: "free", seatRow: 2, seatNumber: 2 },
  { id: "7", state: "free", seatRow: 2, seatNumber: 3 },
  { id: "8", state: "free", seatRow: 2, seatNumber: 4 },

  { id: "9", state: "free", seatRow: 3, seatNumber: 1 }
]

export class BoardComponent extends Component<
  BoardComponentProps,
  BoardComponentState
> {
  constructor(props: BoardComponentProps) {
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
      groupedArray.push(row.sort((n1, n2) => n1.seatNumber - n2.seatNumber))
    )

    return (
      <>
        <h1>Board</h1>

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
