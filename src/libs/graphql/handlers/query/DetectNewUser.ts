import { useDetectNewUserQuery } from '@/libs/graphql/generated/graphql';

export const useDetectNewUser = (uid?: string) => {
  const [result] = useDetectNewUserQuery({ variables: uid ? { id: uid } : undefined, pause: !uid, requestPolicy: 'cache-and-network' });
  return result;
};
