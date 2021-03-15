export const userEndpoints = {
  "/auth/register": {
    post: {
      tags: ["users"],
      description: "Endpoint to register new user.",
      parameters: [
        {
          in: "body",
          name: "user",
          type: "object",
          description: "Request body",
          schema: {
            $ref: "#/definitions/userModel"
          }
        }
      ],
      responses: {
        "200": {
          description: "Confirms that user was created",
          headers: {
            "Set-Cookie": {
              description: "Adds JWT to request headers",
              schema: {
                type: "string",
                example:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
              }
            }
          },
          schema: {
            $ref: "#/definitions/userModel"
          }
        },
        "400": {
          description: "Returns error message",
          schema: {
            type: "error",
            example:
              "User with provided email already exists or Password is too weak. It must contain at least 1 lowercase letter, at least 1 uppercase leter, at least 1 numeric character and at least one special character from: !@#$%^&*"
          }
        }
      }
    }
  },
  "/auth/login": {
    post: {
      tags: ["users"],
      description: "Endpoint to login user.",
      parameters: [
        {
          in: "body",
          name: "user",
          type: "object",
          description: "Request body",
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                format: "email",
                pattern: "/S+@S+.S+/",
                required: "true",
                example: "boskiandrzej20@buziaczek.com"
              },
              password: {
                type: "string",
                required: "true",
                format: "password"
              }
            }
          }
        }
      ],
      responses: {
        "200": {
          description: "Confirms that user was logged",
          headers: {
            "Set-Cookie": {
              description: "Adds JWT to request headers",
              schema: {
                type: "string",
                example:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
              }
            }
          },
          schema: {
            $ref: "#/definitions/userModel"
          }
        },
        "401": {
          description: "Returns error message",
          schema: {
            type: "error",
            example: "Wrong credentials provided"
          }
        }
      }
    }
  },
  "/auth/logout": {
    post: {
      tags: ["users"],
      description: "Endpoint to logout user.",
      responses: {
        "200": {
          description: "Confirms that user was logged out",
          headers: {
            "Set-Cookie": {
              description: "Removes JWT from request headers",
              schema: {
                type: "string",
                example: "null"
              }
            }
          }
        }
      }
    }
  }
}

export const userModel = {
  type: "object",
  properties: {
    name: {
      type: "string",
      required: "true",
      example: "Andrzej"
    },
    surname: {
      type: "string",
      required: "true",
      example: "Gołota"
    },
    phoneNumber: {
      type: "string",
      required: "true",
      example: "123-432-322"
    },
    email: {
      type: "string",
      format: "email",
      pattern: "/S+@S+.S+/",
      required: "true",
      example: "boskiandrzej20@buziaczek.com"
    },
    password: {
      type: "string",
      required: "true",
      format: "password"
    },
    dateOfBirth: {
      required: "true",
      type: "string",
      format: "date"
    }
  }
}
