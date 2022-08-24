import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./index.css"
import { Toaster } from "react-hot-toast"

import { ApiClientProvider } from "@/contexts/ApiClientContext"
import { FirebaseProvider } from "@/contexts/FirebaseContext"
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <FirebaseProvider>
        <ApiClientProvider>
          <div className="font-body text-gray-700 text-15 font-500 min-w-[1024px]">
            <App />
          </div>
        </ApiClientProvider>
      </FirebaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
