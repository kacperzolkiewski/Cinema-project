import { plainToClass } from "class-transformer"
import { validate, ValidationError } from "class-validator"
import { RequestHandler } from "express"
import HttpException from "../exceptions/HttpException"
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function validationMiddleware(type: any, skipMissingProperties = false): RequestHandler {
  return (req, res, next) => {
    validate(plainToClass(type, req.body), { skipMissingProperties }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors
          .filter((error) => error.constraints !== null && error.constraints !== undefined)
          .map((error) => error.constraints!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
          .map((constraints) => Object.values(constraints))
          .join(", ")
        next(new HttpException(400, message))
      } else {
        next()
      }
    })
  }
}

export default validationMiddleware
