import HttpException from "./HttpException"

class PasswordPolicyException extends HttpException {
  constructor() {
    super(400, "Password must contain at least...")
  }
}

export default PasswordPolicyException
