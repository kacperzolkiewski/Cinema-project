import { Seat, SeatState } from "./Seat.Model"

export const SEATS: Seat[] = [
  { id: "11", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "12", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "13", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "14", state: SeatState.free, seatRow: 1, seatNumber: 1 },
  { id: "15", state: SeatState.free, seatRow: 1, seatNumber: 2 },
  { id: "16", state: SeatState.free, seatRow: 1, seatNumber: 3 },
  { id: "17", state: SeatState.free, seatRow: 1, seatNumber: 4 },
  { id: "18", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "19", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "110", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "111", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "112", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "113", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "114", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "115", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },
  { id: "116", state: SeatState.excluded, seatRow: 1, seatNumber: 0 },

  { id: "21", state: SeatState.excluded, seatRow: 2, seatNumber: 0 },
  { id: "22", state: SeatState.excluded, seatRow: 2, seatNumber: 0 },
  { id: "23", state: SeatState.excluded, seatRow: 2, seatNumber: 0 },
  { id: "24", state: SeatState.free, seatRow: 2, seatNumber: 1 },
  { id: "25", state: SeatState.free, seatRow: 2, seatNumber: 2 },
  { id: "26", state: SeatState.free, seatRow: 2, seatNumber: 3 },
  { id: "27", state: SeatState.free, seatRow: 2, seatNumber: 4 },
  { id: "28", state: SeatState.excluded, seatRow: 2, seatNumber: 0 },
  { id: "29", state: SeatState.excluded, seatRow: 2, seatNumber: 0 },
  { id: "210", state: SeatState.free, seatRow: 2, seatNumber: 5 },
  { id: "211", state: SeatState.free, seatRow: 2, seatNumber: 6 },
  { id: "212", state: SeatState.free, seatRow: 2, seatNumber: 7 },
  { id: "213", state: SeatState.booked, seatRow: 2, seatNumber: 8 },
  { id: "214", state: SeatState.booked, seatRow: 2, seatNumber: 9 },
  { id: "215", state: SeatState.booked, seatRow: 2, seatNumber: 10 },
  { id: "216", state: SeatState.free, seatRow: 2, seatNumber: 11 },

  { id: "31", state: SeatState.excluded, seatRow: 3, seatNumber: 0 },
  { id: "32", state: SeatState.excluded, seatRow: 3, seatNumber: 0 },
  { id: "33", state: SeatState.excluded, seatRow: 3, seatNumber: 0 },
  { id: "34", state: SeatState.free, seatRow: 3, seatNumber: 1 },
  { id: "35", state: SeatState.free, seatRow: 3, seatNumber: 2 },
  { id: "36", state: SeatState.free, seatRow: 3, seatNumber: 3 },
  { id: "37", state: SeatState.free, seatRow: 3, seatNumber: 4 },
  { id: "38", state: SeatState.excluded, seatRow: 3, seatNumber: 0 },
  { id: "39", state: SeatState.excluded, seatRow: 3, seatNumber: 0 },
  { id: "310", state: SeatState.free, seatRow: 3, seatNumber: 5 },
  { id: "311", state: SeatState.free, seatRow: 3, seatNumber: 6 },
  { id: "312", state: SeatState.free, seatRow: 3, seatNumber: 7 },
  { id: "313", state: SeatState.free, seatRow: 3, seatNumber: 8 },
  { id: "314", state: SeatState.free, seatRow: 3, seatNumber: 9 },
  { id: "315", state: SeatState.free, seatRow: 3, seatNumber: 10 },
  { id: "316", state: SeatState.free, seatRow: 3, seatNumber: 11 },

  { id: "41", state: SeatState.excluded, seatRow: 4, seatNumber: 0 },
  { id: "42", state: SeatState.excluded, seatRow: 4, seatNumber: 0 },
  { id: "43", state: SeatState.excluded, seatRow: 4, seatNumber: 0 },
  { id: "44", state: SeatState.free, seatRow: 4, seatNumber: 1 },
  { id: "45", state: SeatState.free, seatRow: 4, seatNumber: 2 },
  { id: "46", state: SeatState.free, seatRow: 4, seatNumber: 3 },
  { id: "47", state: SeatState.free, seatRow: 4, seatNumber: 4 },
  { id: "48", state: SeatState.excluded, seatRow: 4, seatNumber: 0 },
  { id: "49", state: SeatState.excluded, seatRow: 4, seatNumber: 0 },
  { id: "410", state: SeatState.free, seatRow: 4, seatNumber: 5 },
  { id: "411", state: SeatState.free, seatRow: 4, seatNumber: 6 },
  { id: "412", state: SeatState.free, seatRow: 4, seatNumber: 7 },
  { id: "413", state: SeatState.free, seatRow: 4, seatNumber: 8 },
  { id: "414", state: SeatState.free, seatRow: 4, seatNumber: 9 },
  { id: "415", state: SeatState.free, seatRow: 4, seatNumber: 10 },
  { id: "416", state: SeatState.free, seatRow: 4, seatNumber: 11 },

  { id: "51", state: SeatState.excluded, seatRow: 5, seatNumber: 0 },
  { id: "52", state: SeatState.excluded, seatRow: 5, seatNumber: 0 },
  { id: "53", state: SeatState.excluded, seatRow: 5, seatNumber: 0 },
  { id: "54", state: SeatState.free, seatRow: 5, seatNumber: 1 },
  { id: "55", state: SeatState.free, seatRow: 5, seatNumber: 2 },
  { id: "56", state: SeatState.free, seatRow: 5, seatNumber: 3 },
  { id: "57", state: SeatState.free, seatRow: 5, seatNumber: 4 },
  { id: "58", state: SeatState.excluded, seatRow: 5, seatNumber: 0 },
  { id: "59", state: SeatState.excluded, seatRow: 5, seatNumber: 0 },
  { id: "510", state: SeatState.free, seatRow: 5, seatNumber: 5 },
  { id: "511", state: SeatState.free, seatRow: 5, seatNumber: 6 },
  { id: "512", state: SeatState.free, seatRow: 5, seatNumber: 7 },
  { id: "513", state: SeatState.free, seatRow: 5, seatNumber: 8 },
  { id: "514", state: SeatState.free, seatRow: 5, seatNumber: 9 },
  { id: "515", state: SeatState.free, seatRow: 5, seatNumber: 10 },
  { id: "516", state: SeatState.free, seatRow: 5, seatNumber: 11 },

  { id: "61", state: SeatState.free, seatRow: 6, seatNumber: 1 },
  { id: "62", state: SeatState.free, seatRow: 6, seatNumber: 2 },
  { id: "63", state: SeatState.free, seatRow: 6, seatNumber: 3 },
  { id: "64", state: SeatState.free, seatRow: 6, seatNumber: 4 },
  { id: "65", state: SeatState.free, seatRow: 6, seatNumber: 5 },
  { id: "66", state: SeatState.free, seatRow: 6, seatNumber: 6 },
  { id: "67", state: SeatState.free, seatRow: 6, seatNumber: 7 },
  { id: "68", state: SeatState.excluded, seatRow: 6, seatNumber: 0 },
  { id: "69", state: SeatState.excluded, seatRow: 6, seatNumber: 0 },
  { id: "610", state: SeatState.free, seatRow: 6, seatNumber: 8 },
  { id: "611", state: SeatState.free, seatRow: 6, seatNumber: 9 },
  { id: "612", state: SeatState.free, seatRow: 6, seatNumber: 10 },
  { id: "613", state: SeatState.free, seatRow: 6, seatNumber: 11 },
  { id: "614", state: SeatState.free, seatRow: 6, seatNumber: 12 },
  { id: "615", state: SeatState.free, seatRow: 6, seatNumber: 13 },
  { id: "616", state: SeatState.free, seatRow: 6, seatNumber: 14 },

  { id: "71", state: SeatState.free, seatRow: 7, seatNumber: 1 },
  { id: "72", state: SeatState.free, seatRow: 7, seatNumber: 2 },
  { id: "73", state: SeatState.free, seatRow: 7, seatNumber: 3 },
  { id: "74", state: SeatState.free, seatRow: 7, seatNumber: 4 },
  { id: "75", state: SeatState.free, seatRow: 7, seatNumber: 5 },
  { id: "76", state: SeatState.free, seatRow: 7, seatNumber: 6 },
  { id: "77", state: SeatState.free, seatRow: 7, seatNumber: 7 },
  { id: "78", state: SeatState.excluded, seatRow: 7, seatNumber: 0 },
  { id: "79", state: SeatState.excluded, seatRow: 7, seatNumber: 0 },
  { id: "710", state: SeatState.free, seatRow: 7, seatNumber: 8 },
  { id: "711", state: SeatState.free, seatRow: 7, seatNumber: 9 },
  { id: "712", state: SeatState.free, seatRow: 7, seatNumber: 10 },
  { id: "713", state: SeatState.free, seatRow: 7, seatNumber: 11 },
  { id: "714", state: SeatState.free, seatRow: 7, seatNumber: 12 },
  { id: "715", state: SeatState.free, seatRow: 7, seatNumber: 13 },
  { id: "716", state: SeatState.booked, seatRow: 7, seatNumber: 14 },

  { id: "81", state: SeatState.free, seatRow: 8, seatNumber: 1 },
  { id: "82", state: SeatState.free, seatRow: 8, seatNumber: 2 },
  { id: "83", state: SeatState.free, seatRow: 8, seatNumber: 3 },
  { id: "84", state: SeatState.free, seatRow: 8, seatNumber: 4 },
  { id: "85", state: SeatState.free, seatRow: 8, seatNumber: 5 },
  { id: "86", state: SeatState.free, seatRow: 8, seatNumber: 6 },
  { id: "87", state: SeatState.booked, seatRow: 8, seatNumber: 7 },
  { id: "88", state: SeatState.excluded, seatRow: 8, seatNumber: 0 },
  { id: "89", state: SeatState.excluded, seatRow: 8, seatNumber: 0 },
  { id: "810", state: SeatState.free, seatRow: 8, seatNumber: 8 },
  { id: "811", state: SeatState.free, seatRow: 8, seatNumber: 9 },
  { id: "812", state: SeatState.free, seatRow: 8, seatNumber: 10 },
  { id: "813", state: SeatState.free, seatRow: 8, seatNumber: 11 },
  { id: "814", state: SeatState.free, seatRow: 8, seatNumber: 12 },
  { id: "815", state: SeatState.free, seatRow: 8, seatNumber: 13 },
  { id: "816", state: SeatState.free, seatRow: 8, seatNumber: 14 },

  { id: "91", state: SeatState.free, seatRow: 9, seatNumber: 1 },
  { id: "92", state: SeatState.free, seatRow: 9, seatNumber: 2 },
  { id: "93", state: SeatState.free, seatRow: 9, seatNumber: 3 },
  { id: "94", state: SeatState.free, seatRow: 9, seatNumber: 4 },
  { id: "95", state: SeatState.free, seatRow: 9, seatNumber: 5 },
  { id: "96", state: SeatState.free, seatRow: 9, seatNumber: 6 },
  { id: "97", state: SeatState.free, seatRow: 9, seatNumber: 7 },
  { id: "98", state: SeatState.booked, seatRow: 9, seatNumber: 8 },
  { id: "99", state: SeatState.booked, seatRow: 9, seatNumber: 9 },
  { id: "910", state: SeatState.free, seatRow: 9, seatNumber: 10 },
  { id: "911", state: SeatState.free, seatRow: 9, seatNumber: 11 },
  { id: "912", state: SeatState.free, seatRow: 9, seatNumber: 12 },
  { id: "913", state: SeatState.free, seatRow: 9, seatNumber: 13 },
  { id: "914", state: SeatState.free, seatRow: 9, seatNumber: 14 },
  { id: "915", state: SeatState.free, seatRow: 9, seatNumber: 15 },
  { id: "916", state: SeatState.free, seatRow: 9, seatNumber: 16 }
]
