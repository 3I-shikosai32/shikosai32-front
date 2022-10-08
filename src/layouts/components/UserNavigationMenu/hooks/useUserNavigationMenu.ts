import type { UserNavigationMenuStateProps } from '../index';
import { UserRole } from '@/entity/User';
import { useCurrentUserId } from '@/usecases/User/useCurrentUserId';
import { useFindUserMetaData } from '@/usecases/User/useFindUserMetaData';

export const useUserNavigationMenu = (): UserNavigationMenuStateProps => {
  const { id } = useCurrentUserId();
  const user = useFindUserMetaData({ id });

  return {
    userIconUrl: user?.characterStatus.iconUrl,
    isLoggedIn: !!user,
    showAdminLink: user?.role === UserRole.Admin,
  };
};
