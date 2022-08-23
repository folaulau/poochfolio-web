import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

import { ApiClientProvider } from "@/contexts/ApiClientContext"
import { FirebaseProvider } from "@/contexts/FirebaseContext"

import "../styles/globals.css"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <FirebaseProvider>
        <ApiClientProvider>
          <div className="font-body text-gray-700 text-15 font-500 min-w-[1024px]">
            <Component {...pageProps} />
          </div>
        </ApiClientProvider>
      </FirebaseProvider>
    </QueryClientProvider>
  )
}

export default MyApp
