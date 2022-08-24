import constate from "constate"
import { FIREBASE_CONFIG } from "consts"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { useMemo } from "react"

export const [FirebaseProvider, useFirebaseContext] = constate(() => {
  const app = useMemo(() => initializeApp(FIREBASE_CONFIG), [])

  const auth = useMemo(() => getAuth(app), [app])

  return { app, auth }
})
