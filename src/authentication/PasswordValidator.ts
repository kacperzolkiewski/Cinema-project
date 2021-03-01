export interface PasswordValidationResult {
    isPasswordInlineWithPolicy: boolean
    validationErrors: string[]
}

export class PasswordValidator {
    public static validate(password: string): PasswordValidationResult {
        const validationErrors: string[] = []

        if (!password) {
            return false
        }

        if (password.length < 6) {
            return false
        }
        if (password.length > 256) {
            return false
        }
        return {
            isPasswordInlineWithPolicy: true,
            validationErrors: [],
        }
    }
}
