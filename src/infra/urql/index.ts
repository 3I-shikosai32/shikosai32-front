import { devtoolsExchange } from '@urql/devtools';
import { authExchange } from '@urql/exchange-auth';
import { createClient as createWsClient } from 'graphql-ws';
import type { SSRData, NextUrqlClientConfig } from 'next-urql';
import { createClient, ClientOptions, ssrExchange, cacheExchange, dedupExchange, fetchExchange, subscriptionExchange, Exchange } from 'urql';
import authConfig from './auth-config';
import { scalarsExchange } from './scalars-exchange';

// 実行環境を判定する
const runtime: 'client' | 'server' = typeof window === 'undefined' ? 'server' : 'client';

// GraphQLエンドポイントを環境変数から取得する
const url = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_DEVELOP || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
if (!url) {
  throw new Error('"NEXT_PUBLIC_GRAPHQL_ENDPOINT" または "NEXT_PUBLIC_GRAPHQL_ENDPOINT_DEVELOP"は必須の環境変数です.');
}

export type WindowWithUrqlData = typeof window & { __URQL_DATA__: SSRData };

// SSR用のExchangeを実行環境に合わせて作成する
const ssrConfig: Parameters<typeof ssrExchange>[0] = {
  isClient: runtime === 'client',
  // eslint-disable-next-line no-underscore-dangle
  initialState: runtime === 'client' ? (window as WindowWithUrqlData).__URQL_DATA__ ?? undefined : undefined,
};

// クライアント(ブラウザ)とサーバー(SSR/SSG/ISR時に使用する)で共通のExchangeを作成する
const commonExchanges: Exchange[] = [devtoolsExchange, dedupExchange, scalarsExchange, cacheExchange];

// 実行環境に特有なExchangeを返す
const getExchangesByRuntime = (_runtime: 'client' | 'server'): Exchange[] => {
  if (_runtime === 'client') {
    const wsUrl = process.env.NEXT_PUBLIC_WS_ENDPOINT_DEVELOP || process.env.NEXT_PUBLIC_WS_ENDPOINT;
    if (!wsUrl) {
      throw new Error('"NEXT_PUBLIC_WS_ENDPOINT" または "NEXT_PUBLIC_WS_ENDPOINT_DEVELOP"は必須の環境変数です.');
    }

    const wsClient = createWsClient({
      url: wsUrl,
    });

    return [
      subscriptionExchange({
        forwardSubscription: (operation) => ({
          subscribe: (sink) => ({
            unsubscribe: wsClient.subscribe(operation, sink),
          }),
        }),
      }),
    ];
  }
  return [];
};

// プロバイダに渡すクライアント用のExchangeを作成する
const exchanges: Exchange[] = [
  ...commonExchanges,
  authExchange(authConfig),
  ssrExchange(ssrConfig),
  fetchExchange,
  ...getExchangesByRuntime(runtime),
];

export const clientOptions: ClientOptions = {
  url,
  exchanges,
};

export const nextUrqlClientConfig: NextUrqlClientConfig = (_ssrExchange) => ({
  url,
  exchanges: [...commonExchanges, _ssrExchange, fetchExchange],
});

const urqlClient = createClient(clientOptions);

export default urqlClient;
