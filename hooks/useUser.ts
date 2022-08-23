import { useCookies } from "react-cookie"

import { User } from "@/types/user"

export default function useUser() {
  const [cookies, setCookie] = useCookies(["user"])

  const setUser = (user: User | null) => setCookie("user", user)

  return {
    user: cookies.user as User | null,
    setUser,
  }
}
