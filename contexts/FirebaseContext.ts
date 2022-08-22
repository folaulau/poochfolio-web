import constate from "constate"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { useMemo } from "react"

import { FIREBASE_CONFIG } from "@/constants"

export const [FirebaseProvider, useFirebase] = constate(() => {
  const app = useMemo(() => initializeApp(FIREBASE_CONFIG), [])

  const auth = useMemo(() => getAuth(app), [app])

  return { app, auth }
})
