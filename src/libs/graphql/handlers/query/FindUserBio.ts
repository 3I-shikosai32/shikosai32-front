import { useFindUserBioQuery } from '@/libs/graphql/generated/graphql';

export type UseFindUserBioProps = {
  uid?: string;
};

export const useFindUserBio = ({ uid }: UseFindUserBioProps) => {
  const [userBio] = useFindUserBioQuery({ variables: { id: uid || '' }, pause: !uid });
  return userBio;
};
