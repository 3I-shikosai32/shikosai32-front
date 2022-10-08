import { useFindUserBioQuery } from '@/infra/graphql/generated/graphql';

export type UseFindUserBioProps = {
  uid?: string;
};

export const useFindUserBio = ({ uid }: UseFindUserBioProps) => {
  const [userBio] = useFindUserBioQuery({ variables: { id: uid || '' }, pause: !uid, requestPolicy: 'cache-and-network' });
  return userBio;
};
