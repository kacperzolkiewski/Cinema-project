export const filmEndpoints = {
    "/api/films": {
        get: {
            tags: ["films"],
            description: "Endpoint to return films collection",
            parameters: [
                {
                    name: "film",
                    description: "Returns an array of film objects",
                    in: "path",
                    schema: {},
                },
            ],
            responses: {
                "200": {
                    description: "Returns an array of film objects",
                    schema: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/filmModel",
                        },
                    },
                },
                "503": {
                    description: "Returns error message",
                    schema: {
                        type: "error",
                        example: "Service Unavailable",
                    },
                },
            },
        },
        post: {
            tags: ["films"],
            description: "Endpoint to create new film object",
            parameters: [
                {
                    in: "body",
                    name: "film",
                    type: "object",
                    description: "Request body",
                    schema: {
                        $ref: "#/definitions/filmModel",
                    },
                },
            ],
            responses: {
                "201": {
                    description: "Confirms that film was posted",
                    schema: {
                        $ref: "#/definitions/filmModel",
                    },
                },
                "503": {
                    description: "Returns error message",
                    schema: {
                        type: "error",
                        example: "Service Unavailable",
                    },
                },
            },
        },
    },
    "/api/films/{id}": {
        get: {
            tags: ["films"],
            description: "Endpoint to retrun film with specific id",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: "true",
                    description: "Valid film ID from database",
                    schema: {
                        type: "string",
                        format: "uuid",
                    },
                },
            ],
            responses: {
                "200": {
                    description: "Returns a film object",
                    schema: {
                        $ref: "#/definitions/filmModel",
                    },
                },
                "404": {
                    description: "Returns error message",
                    schema: {
                        type: "error",
                        example: "Film with given ID is not found",
                    },
                },
                "503": {
                    description: "Returns error message",
                    schema: {
                        type: "error",
                        example: "Service Unavailable",
                    },
                },
            },
        },
        patch: {
            tags: ["films"],
            description: "Endpoint to update film object",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    type: "string",
                    required: "true",
                    description: "Valid film ID from database",
                    schema: {
                        type: "string",
                        format: "uuid",
                    },
                },
                {
                    in: "body",
                    name: "film",
                    type: "object",
                    description: "Request body",
                    schema: {
                        $ref: "#/definitions/filmModel",
                    },
                },
            ],
            responses: {
                "200": {
                    description: "Confirms that film was updated",
                    schema: {
                        $ref: "#/definitions/filmModel",
                    },
                },
                "503": {
                    description: "Returns error message",
                    schema: {
                        type: "error",
                        example: "Service Unavailable",
                    },
                },
            },
        },
        delete: {
            tags: ["films"],
            description: "Endpoint to delete film object",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    type: "string",
                    required: "true",
                    description: "Valid film ID from database",
                    schema: {
                        type: "string",
                        format: "uuid",
                    },
                },
            ],
            responses: {
                "200": {
                    description: "Confirms that film was deleted",
                    schema: {
                        $ref: "#/definitions/filmModel",
                    },
                },
                "503": {
                    description: "Returns error message",
                    schema: {
                        type: "error",
                        example: "Service Unavailable",
                    },
                },
            },
        },
    },
}

export const filmModel = {
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
            example: "108",
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
                example: "18-03-2021",
            },
            example: ["18-03-2021", "18-03-2021", "18-03-2021"],
        },
        hours: {
            type: "array",
            items: {
                type: "string",
                format: "date-time",
                example: "18.40",
            },
            example: ["18.40", "18.40", "18.40"],
        },
    },
}
