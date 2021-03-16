export const cinemaHallEndpoints = {
  "api/halls": {
    get: {
      tags: ["cinema halls"],
      description: "Endpoint to return cinema halls collection",
      parameters: [
        {
          name: "hall",
          description: "Returns an array of cinema hall objects",
          in: "path",
          schema: {}
        }
      ],
      responses: {
        "200": {
          description: "Returns an array of cinema hall objects",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/cinemaHallModel"
            }
          }
        },
        "503": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Service Unavailable"
          }
        }
      }
    },
    post: {
      tags: ["cinema halls"],
      description: "Endpoint to create new cinema hall object",
      parameters: [
        {
          in: "body",
          name: "hall",
          type: "object",
          description: "Request body",
          schema: {
            $ref: "#/definitions/cinemaHallModel"
          }
        }
      ],
      responses: {
        "201": {
          description: "Confirms that cinema hall was posted",
          schema: {
            $ref: "#/definitions/cinemaHallModel"
          }
        },
        "503": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Service Unavailable"
          }
        }
      }
    }
  },
  "api/halls/{id}": {
    get: {
      tags: ["cinema halls"],
      description: "Endpoint to retrun cinema hall with specific id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: "true",
          description: "Valid cinema hall ID from database",
          schema: {
            type: "string",
            format: "uuid"
          }
        }
      ],
      responses: {
        "200": {
          description: "Returns a cinema hall object",
          schema: {
            $ref: "#/definitions/cinemaHallModel"
          }
        },
        "404": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Cinema hall with given ID is not found"
          }
        },
        "503": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Service Unavailable"
          }
        }
      }
    },
    patch: {
      tags: ["cinema halls"],
      description: "Endpoint to update cinema hall object",
      parameters: [
        {
          in: "path",
          name: "id",
          type: "string",
          required: "true",
          description: "Valid cinema hall ID from database",
          schema: {
            type: "string",
            format: "uuid"
          }
        },
        {
          in: "body",
          name: "hall",
          type: "object",
          description: "Request body",
          schema: {
            $ref: "#/definitions/cinemaHallModel"
          }
        }
      ],
      responses: {
        "201": {
          description: "Confirms that cinema hall was updated",
          schema: {
            $ref: "#/definitions/cinemaHallModel"
          }
        },
        "503": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Service Unavailable"
          }
        }
      }
    },
    delete: {
      tags: ["cinema halls"],
      description: "Endpoint to delete cinema hall object",
      parameters: [
        {
          in: "path",
          name: "id",
          type: "string",
          required: "true",
          description: "Valid cinema hall ID from database",
          schema: {
            type: "string",
            format: "uuid"
          }
        }
      ],
      responses: {
        "200": {
          description: "Confirms that cinema hall was deleted",
          schema: {
            $ref: "#/definitions/cinemaHallModel"
          }
        },
        "503": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Service Unavailable"
          }
        }
      }
    }
  }
}

export const cinemaHallModel = {
  type: "object",
  properties: {
    name: {
      type: "string",
      required: "true"
    },
    numberOfSeats: {
      type: "number",
      required: "true"
    }
  }
}
