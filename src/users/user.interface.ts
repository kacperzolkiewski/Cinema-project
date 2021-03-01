import { Date } from "mongoose"

interface User {
    name: string
    surname: string
    email: string
    password: string
    phoneNumber: number
    birthDate: Date
}

export default User
