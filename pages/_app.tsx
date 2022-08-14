import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-body text-gray-dark text-15 font-500 min-w-[1024px]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
