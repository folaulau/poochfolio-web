import { AxiosError } from "axios"
import toast from "react-hot-toast"

interface ErrorItem {
  message: string
}

interface ApiError {
  errors: ErrorItem[]
  message: string
}

export const getApiError = (error: AxiosError) => {
  const data = error.response?.data as ApiError | null

  if (data) {
    return data.errors[0].message ?? data.message
  }

  return error.message
}

export const toastError = (error: AxiosError) => toast.error(getApiError(error))
