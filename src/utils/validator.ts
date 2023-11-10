import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

function generalValidator(req: Request, res: Response, next: NextFunction) {
    try {
        const errorValidation = validationResult(req);

        if (!errorValidation.isEmpty()) {
             let errors = convertErrors(res, errorValidation.array())

            throw new Error(JSON.stringify(errors));
        }
        next();
    } catch (err) {
        next(err)
    }
}

function convertErrors(res: Response, errorList: Array<any>, convertedErrors = {}) {
    for (let error of errorList) {
        if (error.nestedErrors && error.nestedErrors.length > 0) {
            convertedErrors = convertErrors(res, error.nestedErrors, convertedErrors)
            continue;
        }

        let translatedMsg = error.msg

        // @ts-ignore
        if (convertedErrors[error.param]) {
            // @ts-ignore
            convertedErrors[error.param].push(translatedMsg)
        } else {
            // @ts-ignore
            convertedErrors[error.param] = [translatedMsg]
        }
    }

    return convertedErrors
}

export default generalValidator