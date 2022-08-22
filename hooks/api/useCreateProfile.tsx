import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

import { useApp } from "@/contexts/AppContext"
import { Draft } from "@/types"
import { Address } from "@/types/address"
import { CareService } from "@/types/careService"
import { User } from "@/types/user"

interface CreateProfileRequest
  extends Pick<User, "uuid" | "firstName" | "lastName" | "businessName" | "phoneNumber"> {
  careServices: Partial<CareService>[]
  address: Draft<Address>
}

export default function useCreateProfile() {
  const { apiClient } = useApp()

  return useMutation<User, AxiosError, CreateProfileRequest>((variables) =>
    apiClient.put("/groomers/create-profile", variables).then((r) => r.data)
  )
}
