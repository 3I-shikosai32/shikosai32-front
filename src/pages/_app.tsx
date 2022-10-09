import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'urql';
import urqlClient from '@/infra/urql';
import { AudioProviderContainer } from '@/presentation/layout/components/AudioProvider/container';
import authActions from '@/state/authState';
import 'tailwindcss/tailwind.css';
import '@/style/global.scss';

const AppInit: FC = () => {
  authActions.useAuth();

  return null;
};

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <AppInit />
    <Provider value={urqlClient}>
      <AudioProviderContainer>
        <Component {...pageProps} />
      </AudioProviderContainer>
    </Provider>
  </RecoilRoot>
);

export default CustomApp;
