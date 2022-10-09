import type { UserNavigationMenuStateProps } from '../user-navigation-menu.component';
import { UserRole } from '@/model/user/user-role.model';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { useFindUserMetaDataUseCase } from '@/use-case/user/use-find-user-meta-data.use-case';

export const useUserNavigationMenu = (): UserNavigationMenuStateProps => {
  const { id } = useCurrentUserIdUseCase();
  const user = useFindUserMetaDataUseCase({ id });

  return {
    userIconUrl: user?.characterStatus.iconUrl,
    isLoggedIn: !!user,
    showAdminLink: user?.role === UserRole.Admin,
  };
};
