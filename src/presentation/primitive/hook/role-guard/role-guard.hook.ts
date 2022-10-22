import { useRouter } from 'next/router';
import { useMemo } from 'react';
import type { UserRole } from '@/model/user/user-role.model';
import { useCurrentUserAuthenticationStatusUseCase } from '@/use-case/user/use-current-user-authentication-status.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { useFindUserMetaDataUseCase } from '@/use-case/user/use-find-user-meta-data.use-case';

export const useRoleGuard = (roleGuard: (currentUserRole: UserRole) => boolean) => {
  const router = useRouter();

  const currentUser = useCurrentUserIdUseCase();
  const { hasUserAuthenticated, hasUserRegisteredInfo } = useCurrentUserAuthenticationStatusUseCase();
  const currentUserMetaData = useFindUserMetaDataUseCase({ id: currentUser?.id });

  const isLoading = useMemo(() => {
    if (hasUserAuthenticated === undefined || hasUserRegisteredInfo === undefined || currentUserMetaData === null) {
      return true;
    }
    if (roleGuard(currentUserMetaData.role)) {
      return false;
    }
    router.replace('/');

    return true;
  }, [roleGuard, router, hasUserAuthenticated, hasUserRegisteredInfo, currentUserMetaData]);

  return isLoading;
};
