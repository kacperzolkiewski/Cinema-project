import { cleanEnv, str, port } from "envalid"

function validateEnv(): void {
  cleanEnv(process.env, {
    MONGODB_URI: str(),
    PORT: port()
  })
}

export default validateEnv
