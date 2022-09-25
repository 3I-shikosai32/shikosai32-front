import type { UserNavigationMenuStateProps } from '../index';
import { Role } from '@/libs/graphql/generated/graphql';
import { useFindUserBio } from '@/libs/graphql/handlers/query/FindUserBio';
import authActions from '@/state/authState';

// eslint-disable-next-line import/prefer-default-export
export const useUserNavigationMenu = (): UserNavigationMenuStateProps => {
  const firebaseUser = authActions.useCurrentUser();
  const { data, fetching, error } = useFindUserBio({ uid: firebaseUser?.uid });
  if (!data || fetching || error) {
    return {};
  }
  return {
    showAdminLink: data.findUser?.role === Role.Admin,
    userIconUrl: data.findUser?.iconUrl,
    isLoggedIn: !!data.findUser?.id,
  };
};
