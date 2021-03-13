import { cleanEnv, str, port } from "envalid"

function validateEnv(): void {
  cleanEnv(process.env, {
    MONGODB_URI: str(),
    PORT: port()
    // tu powinno być wszucane wszystko to co w pliku .env definiujecie
  })
}

export default validateEnv
