import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { User, createUserWithEmailAndPassword } from "firebase/auth"

import { useApp } from "@/contexts/AppContext"
import { useFirebase } from "@/contexts/FirebaseContext"
import { AuthResponse, AuthWithEmailRequest } from "@/types/auth"

export default function useSignUp() {
  const { auth } = useFirebase()
  const { apiClient, setToken, setUser } = useApp()

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
        setUser(rest)
      },
    }
  )
}
