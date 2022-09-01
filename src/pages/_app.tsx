import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'urql';
import urqlClient from '@/libs/urql';
import authActions from '@/state/authState';
import 'tailwindcss/tailwind.css';
import '@/styles/global.scss';

const AppInit: FC = () => {
  authActions.useAuth();

  return null;
};

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <AppInit />
    <Provider value={urqlClient}>
      <Component {...pageProps} />
    </Provider>
  </RecoilRoot>
);

export default CustomApp;
