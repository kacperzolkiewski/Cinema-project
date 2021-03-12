export const swaggerDocument = {
    swagger: "2.0",
    info: {
        title: "Cinema App",
        description: "An website app for cinema",
        version: "1.0",
    },
    produces: ["application/json"],
    paths: {
        "/api/films": {
            get: {
                tags: ["films"],
                description: "Endpoints to cooperate with films gallery",
                parameters: [
                    {
                        name: "Film",
                        in: "path",
                        schema: {},
                    },
                ],
                responses: {
                    "200": {
                        description: "Returns an array of films",
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/definitions/filmModel",
                            },
                        },
                    },
                },
            },
        },
    },
    definitions: {
        filmModel: {
            type: "object",
            properties: {
                title: {
                    type: "string",
                    required: "true",
                    example: "Batman",
                },
                producent: {
                    type: "string",
                    required: "true",
                    example: "Warner Bros",
                },
                mainActors: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    required: "true",
                    example: ["Christian Bale", "Cillian Murphy", "Katie Holmes"],
                },
                type: {
                    type: "string",
                    required: "true",
                    enum: ["comedy", "horror", "action", "anime"],
                    example: "action",
                },
                trailer: {
                    type: "string",
                    format: "uri",
                    example: "https://www.filmweb.pl/film/Batman+-+Pocz%C4%85tek-2005-106376",
                },
                filmLength: {
                    type: "number",
                    required: "true",
                    example: "1:30",
                },
                ageCategory: {
                    type: "string",
                    required: "true",
                    enum: ["NoRestriction", "Over13", "Over16", "OnlyForAdults"],
                    example: "Over13",
                },
                is3D: {
                    type: "boolean",
                    required: "true",
                    example: "true",
                },
                dates: {
                    type: "array",
                    items: {
                        type: "string",
                        format: "date",
                        example: "2017-07-21",
                    },
                    example: ["2017-07-21", "2017-07-21", "2017-07-21"],
                },
                hours: {
                    type: "array",
                    items: {
                        type: "string",
                        format: "date-time",
                        example: "2017-07-21T17:32:28Z",
                    },
                    example: ["2017-07-21T17:32:28Z", "2017-07-21T17:32:28Z", "2017-07-21T17:32:28Z"],
                },
            },
        },
        ticketModel: {
            type: "object",
            properties: {
                client: {
                    type: "string",
                    format: "uuid",
                    required: "true",
                },
                film: {
                    $ref: "#/definitions/filmModel",
                },
                seatNumber: {
                    type: "number",
                    required: "true",
                    example: "45",
                },
                cinemaHall: {
                    type: "number",
                    required: "true",
                    example: "2",
                },
                qrCode: {
                    type: "string",
                    required: "true",
                    example: "qrcode",
                },
            },
        },
        userModel: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                    required: "true",
                    example: "Andrzej",
                },
                surname: {
                    type: "string",
                    required: "true",
                    example: "Gołota",
                },
                phoneNumber: {
                    type: "string",
                    required: "true",
                    example: "123-432-322",
                },
                email: {
                    type: "string",
                    format: "email",
                    pattern: "/S+@S+.S+/",
                    required: "true",
                    example: "boskiandrzej20@buziaczek.com",
                },
                password: {
                    type: "string",
                    required: "true",
                    format: "password",
                    example: "1234",
                },
                dateOfBirth: {
                    required: "true",
                    type: "string",
                    format: "date",
                },
            },
        },
    },
}
