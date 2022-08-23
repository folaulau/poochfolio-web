import { useEffect, useState } from "react"

export default function useMoutedData<T>(data: T | null) {
  const [mountedData, setMountedData] = useState<T | null>(null)

  useEffect(() => {
    setMountedData(data)
  }, [data])

  return mountedData
}
