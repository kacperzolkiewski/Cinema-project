import { cleanEnv, str, port } from "envalid"

function validateEnv(): void {
  cleanEnv(process.env, {
    MONGO_PASSWORD: str(),
    MONGO_PATH: str(),
    MONGO_USER: str(),
    PORT: port()
  })
}

export default validateEnv
