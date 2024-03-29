import { useMemo } from 'react';
import { useCheckUserExistanceUseCase } from '@/use-case/user/use-check-user-existance.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';

export type UseCurrentUserAuthenticationStatusUseCaseResult = {
  hasUserAuthenticated: boolean | undefined;
  hasUserRegisteredInfo: boolean | undefined | null;
};

export const useCurrentUserAuthenticationStatusUseCase = (): UseCurrentUserAuthenticationStatusUseCaseResult => {
  const currentUser = useCurrentUserIdUseCase(); // Firebase Authの認証情報由来のid
  const hasUserAuthenticated = useMemo<UseCurrentUserAuthenticationStatusUseCaseResult['hasUserAuthenticated']>(() => {
    if (currentUser === null) return false;
    if (currentUser && currentUser.id) return true;
    return undefined;
  }, [currentUser]); // ユーザーがFirebase Authでログイン済みかどうか
  // ユーザーが各種情報を登録済みかどうか
  const hasUserRegisteredInfo = useCheckUserExistanceUseCase({
    id: currentUser?.id,
  });
  return {
    hasUserAuthenticated,
    hasUserRegisteredInfo,
  };
};
