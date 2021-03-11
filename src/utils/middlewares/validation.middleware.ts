import { ClassConstructor, plainToClass } from "class-transformer"
import { validate, ValidationError } from "class-validator"
import { Request, RequestHandler, Response, NextFunction } from "express"

function validationMiddleware<T extends {}>(type: ClassConstructor<T>, skipMissingProperties = true): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req.body), { skipMissingProperties }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        res.status(400).json({
          error: errors,
          data: req.body
        })
      } else {
        next()
      }
    })
  }
}

export default validationMiddleware
