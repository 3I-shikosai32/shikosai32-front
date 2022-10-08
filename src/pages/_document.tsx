import { Head, Html, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const CustomDocument: FC = () => (
  <Html lang="ja" data-theme="shikosai32">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;700&family=Oxygen:wght@400;700&family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
