import type { IdTokenResult } from '@firebase/auth';
import type { AuthConfig } from '@urql/exchange-auth';
import { makeOperation } from 'urql';
import auth from '@/infra/firebase/auth';

type AuthState = {
  token: string;
  result: IdTokenResult;
  uid: string;
};

const authConfig: AuthConfig<AuthState> = {
  getAuth: async () => {
    const tokenResult = await auth.currentUser?.getIdTokenResult();
    return tokenResult && auth.currentUser ? { token: tokenResult.token, result: tokenResult, uid: auth.currentUser.uid } : null;
  },
  willAuthError: ({ authState }) => {
    if (authState?.result?.expirationTime) {
      const expirationDate = new Date(authState.result.expirationTime);
      // eslint-disable-next-line no-console
      console.log('⚠️ expirationDate: ', expirationDate);
      return expirationDate < new Date();
    }

    return !authState || !authState.token;
  },
  addAuthToOperation: ({ authState, operation }) => {
    if (!authState || !authState.token) {
      return operation;
    }

    const fetchOptions =
      typeof operation.context.fetchOptions === 'function' ? operation.context.fetchOptions() : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `${authState.token}`,
          uid: `${authState.uid}`,
        },
      },
    });
  },
};

export default authConfig;
