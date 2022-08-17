import type { AppProps } from "next/app"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-body text-gray-700 text-15 font-500 min-w-[1024px]">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
