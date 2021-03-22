export const ticketModel = {
  type: "object",
  properties: {
    client: {
      $ref: "#/definitions/userModel"
    },
    film: {
      $ref: "#/definitions/filmModel"
    },
    seatNumber: {
      type: "number",
      required: "true",
      example: "45"
    },
    cinemaHall: {
      type: "number",
      required: "true",
      example: "2"
    },
    qrCode: {
      type: "string",
      required: "true",
      example: "qrcode"
    }
  }
}
