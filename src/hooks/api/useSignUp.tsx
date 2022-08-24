import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { useApiClientContext } from "@/contexts/ApiClientContext"
import { useFirebaseContext } from "@/contexts/FirebaseContext"
import { AuthResponse, AuthWithEmailRequest } from "@/types/auth"

import useToken from "../useToken"
import useUser from "../useUser"

export default function useSignUp() {
  const { auth } = useFirebaseContext()
  const apiClient = useApiClientContext()
  const { setToken } = useToken()
  const { setUser } = useUser()

  return useMutation<AuthResponse, AxiosError, AuthWithEmailRequest>(
    async ({ email, password }) => {
      const credential = await createUserWithEmailAndPassword(auth, email, password)

      const token = await credential.user.getIdToken()

      const { data } = await apiClient.post("/groomers/authenticate", { token })

      return data
    },
    {
      onSuccess({ token, ...rest }) {
        setToken(token)

        console.log(rest)

        setUser(rest)
      },
    }
  )
}
