import { User } from "./user"

export interface AuthWithEmailRequest {
  email: string
  password: string
}

export interface AuthResponse extends User {
  token: string
}
