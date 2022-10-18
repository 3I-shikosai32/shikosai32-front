import { useRouter } from 'next/router';
import { useState, useMemo, useEffect } from 'react';
import type { SignupProgressNotificationModalProps } from '../signup-progress-notification-modal.presenter';
import { useCheckUserExistanceUseCase } from '@/use-case/user/use-check-user-existance.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';

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
  const currentUser = useCurrentUserIdUseCase(); // Firebase Authの認証情報由来のid
  const hasUserAuthenticated = useMemo(() => !!currentUser, [currentUser]); // ユーザーがFirebase Authでログイン済みかどうか
  // ユーザーが各種情報を登録済みかどうか
  const hasUserRegisteredInfo = useCheckUserExistanceUseCase({
    id: currentUser?.id,
  });
  const shouldShowModal = useMemo(() => {
    if (!hasComponentMounted) return false; // Hydrationが失敗しないようにするため
    return hasUserAuthenticated && !hasUserRegisteredInfo && !isCurrentlyAtAuthPage;
  }, [hasUserAuthenticated, hasUserRegisteredInfo, isCurrentlyAtAuthPage, hasComponentMounted]);
  return {
    open: shouldShowModal,
  };
};
