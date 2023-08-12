import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>UVA MEDIA NETWORK</title>
        <meta property="og:title" content="UVA MEDIA NETWORK" />
        <meta
          property="og:image"
          content="https://uva-media-network.vercel.app/meta.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
