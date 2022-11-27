import { AppProps } from "next/app";
import Head from "next/head";
import { JetBrains_Mono } from "@next/font/google";
import "../styles/index.css";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
        <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
        <link
          rel="webmention"
          href="https://webmention.io/adamyonk.com/webmention"
        />
        <link rel="pingback" href="https://webmention.io/adamyonk.com/xmlrpc" />
        <link rel="me" href="https://github.com/adamyonk" />
        <link rel="me" href="https://micro.blog/adamyonk" />
        <link rel="me" href="https://reddit.com/u/adamyonk" />
        <link rel="me" href="https://twitter.com/adamyonk" />
        <link rel="me" href="https://hachyderm.io/@adamyonk" />
        <script
          async
          defer
          data-domain="adamyonk.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <style jsx global>{`
        :root {
          --body: ${jetbrains_mono.style.fontFamily}, system-ui, sans-serif;
          --font-monospace: ${jetbrains_mono.style.fontFamily}, monospace;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
