/**
 * Document Component
 * HTML document wrapper for Next.js
 */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="PageTurner - Premium European-style bookstore with curated collections and exceptional design." />
        <meta name="theme-color" content="#2c2c2c" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
