import axios from "axios"
import constate from "constate"
import { useMemo } from "react"
import { useCookie } from "react-use"

import { API_URL, X_API_KEY } from "@/constants"
import { User } from "@/types/user"

export const [AppProvider, useApp] = constate(() => {
  const [token, setToken, deleteToken] = useCookie("token")
  const [userCookie, setUserCookie, deleteUser] = useCookie("user")

  const user = useMemo(() => (userCookie ? (JSON.parse(userCookie) as User) : null), [userCookie])
  const setUser = (value: Partial<User>) => setUserCookie(JSON.stringify(value))

  const apiClient = useMemo(
    () =>
      axios.create({
        baseURL: `${API_URL}/v1`,
        headers: {
          "x-api-key": X_API_KEY,
          ...(token && { token }),
        },
      }),
    [token]
  )

  return { apiClient, setToken, deleteToken, user, setUser, deleteUser }
})
