import { Head, Html, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const CustomDocument: FC = () => (
  <Html lang="ja" data-theme="shikosai32" className="h-full">
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <body className="h-full">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
