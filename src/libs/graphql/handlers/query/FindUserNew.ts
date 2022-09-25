import { useFindUserNewQuery } from '@/libs/graphql/generated/graphql';

export type UseFindUserNewProps = {
  uid?: string;
};

export const useFindUserNew = ({ uid }: UseFindUserNewProps) => {
  const [userNew] = useFindUserNewQuery({ variables: { id: uid || '' }, pause: !uid, requestPolicy: 'cache-and-network' });
  return userNew;
};
