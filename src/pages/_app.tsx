import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'urql';
import urqlClient from '@/infra/urql';
import { AudioProviderContainer } from '@/presentation/layout/component/audio-provider/audio-provider.container';
import authActions from '@/state/auth/auth-state';
import 'tailwindcss/tailwind.css';
import '@/presentation/style/stylesheet/global.scss';

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
