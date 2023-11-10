import {body} from 'express-validator';
import generalValidator from "../utils/validator";

class AuthValidator {
    register() {
        return [
            body('name')
                .notEmpty()
                .trim()
                .withMessage('name is required'),
            body('email')
                .notEmpty()
                .isEmail()
                .trim()
                .withMessage('name is email'),
            body('password')
                .notEmpty()
                .withMessage('name is required')
                .isLength({min: 8})
                .withMessage('auth.validations.password_length')
                .trim(),
            generalValidator
        ]
    }
}

export default new AuthValidator();