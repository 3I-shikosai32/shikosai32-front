import { devtoolsExchange } from '@urql/devtools';
import { authExchange } from '@urql/exchange-auth';
import { createClient as createWsClient } from 'graphql-ws';
import { createClient, ClientOptions, cacheExchange, dedupExchange, fetchExchange, subscriptionExchange, Exchange } from 'urql';
import authConfig from './auth-config';
import { scalarsExchange } from './scalars-exchange';

const url = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_DEVELOP || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
if (!url) {
  throw new Error('"NEXT_PUBLIC_GRAPHQL_ENDPOINT" または "NEXT_PUBLIC_GRAPHQL_ENDPOINT_DEVELOP"は必須の環境変数です.');
}

const exchanges: Exchange[] = [devtoolsExchange, dedupExchange, scalarsExchange, cacheExchange, authExchange(authConfig), fetchExchange];

if (typeof window !== 'undefined') {
  const wsUrl = process.env.NEXT_PUBLIC_WS_ENDPOINT_DEVELOP || process.env.NEXT_PUBLIC_WS_ENDPOINT;
  if (!wsUrl) {
    throw new Error('"NEXT_PUBLIC_WS_ENDPOINT" または "NEXT_PUBLIC_WS_ENDPOINT_DEVELOP"は必須の環境変数です.');
  }

  const wsClient = createWsClient({
    url: wsUrl,
  });

  exchanges.push(
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  );
}

const clientOptions: ClientOptions = {
  url,
  exchanges,
};

const urqlClient = createClient(clientOptions);

export default urqlClient;
