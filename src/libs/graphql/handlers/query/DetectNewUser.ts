import { useDetectNewUserQuery } from '@/libs/graphql/generated/graphql';

export type UseFindUserNewProps = {
  uid?: string;
};

export const useDetectNewUser = ({ uid }: UseFindUserNewProps) => {
  const [userNew] = useDetectNewUserQuery({ variables: { id: uid || '' }, pause: !uid, requestPolicy: 'cache-and-network' });
  return userNew;
};
