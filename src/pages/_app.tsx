import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import 'tailwindcss/tailwind.css';
import '../styles/global.scss';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default CustomApp;
