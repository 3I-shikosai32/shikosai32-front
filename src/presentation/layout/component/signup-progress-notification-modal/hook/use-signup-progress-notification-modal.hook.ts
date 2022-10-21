import { useRouter } from 'next/router';
import { useState, useMemo, useEffect } from 'react';
import type { SignupProgressNotificationModalProps } from '../signup-progress-notification-modal.presenter';
import { useCurrentUserAuthenticationStatusUseCase } from '@/use-case/user/use-current-user-authentication-status.use-case';

const authPagePathnameRegExp = /^\/auth(\/.+|)/; // `/auth`以下のすべてのパスにマッチする正規表現

export const useSignupProgressNotificationModal = (): Pick<SignupProgressNotificationModalProps, 'open'> => {
  //
  // コンポーネントがマウントされた後にのみログイン状態から計算された値を使用するようにしないと、SSRのものと差異が生じてHydrationに失敗してしまう
  // 参照: https://nextjs.org/docs/messages/react-hydration-error
  //
  const [hasComponentMounted, setHasComponentMounted] = useState(false);
  useEffect(() => {
    setHasComponentMounted(true);
  }, []);

  const { pathname } = useRouter();
  const isCurrentlyAtAuthPage = useMemo(() => authPagePathnameRegExp.test(pathname), [pathname]);
  const { hasUserAuthenticated, hasUserRegisteredInfo } = useCurrentUserAuthenticationStatusUseCase();

  const shouldShowModal = useMemo(() => {
    if (!hasComponentMounted) return false; // Hydrationが失敗しないようにするため
    return hasUserAuthenticated && hasUserRegisteredInfo === false && hasUserRegisteredInfo !== null && !isCurrentlyAtAuthPage;
  }, [hasUserAuthenticated, hasUserRegisteredInfo, isCurrentlyAtAuthPage, hasComponentMounted]);
  return {
    open: shouldShowModal,
  };
};
