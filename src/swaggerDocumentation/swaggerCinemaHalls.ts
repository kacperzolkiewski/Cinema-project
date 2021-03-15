export const cinemaHallModel = {
    type: "object",
    properties: {
        name: {
            type: "string",
            required: "true",
        },
        numberOfSeats: {
            type: "number",
            required: "true",
        },
    },
}
