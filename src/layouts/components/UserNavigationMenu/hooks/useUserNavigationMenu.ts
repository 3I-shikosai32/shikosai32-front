import type { UserNavigationMenuStateProps } from '../index';
import { Role } from '@/infra/graphql/generated/graphql';
import { useFindUserBio } from '@/infra/graphql/handlers/query/FindUserBio';
import authActions from '@/state/authState';

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
