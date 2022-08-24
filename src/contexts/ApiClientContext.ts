import axios from "axios"
import constate from "constate"
import { useMemo } from "react"

import { API_URL, X_API_KEY } from "@/constants"
import useToken from "@/hooks/useToken"

export const [ApiClientProvider, useApiClientContext] = constate(() => {
  const { token } = useToken()

  return useMemo(
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
})
