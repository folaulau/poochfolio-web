import { useCookies } from "react-cookie"

export default function useToken() {
  const [cookies, setCookie] = useCookies(["token"])

  const setToken = (token: string) => setCookie("token", token)

  return {
    token: cookies.token as string | null,
    setToken,
  }
}
