import Fonts from "@/components/Fonts";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fonts>
      <Component {...pageProps} />
    </Fonts>
  );
}
