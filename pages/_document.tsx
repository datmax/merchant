import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="The best coin. We make you rich. Buy now."
        />
        <meta property="og:title" content="THE merchant coin." />

        <meta property="og:image" content="/shabbat.png" />
        <meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
