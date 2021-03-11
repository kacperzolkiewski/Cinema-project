import {plainToClass} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import {Request, RequestHandler, Response, NextFunction} from "express";

function validationMiddleware<T> (type: any, skipMissingProperties = true): RequestHandler  {
    return ((req: Request, res: Response, next: NextFunction) =>{
        validate(plainToClass(type, req.body), {skipMissingProperties})
            .then((errors: ValidationError[]) =>{
                if (errors.length > 0){
                    console.log(errors)
                    res.status(400).json({
                        error: errors,
                        data: req.body
                    })
                } else{
                    next()
                }
        })
    } )
}

export default validationMiddleware;
