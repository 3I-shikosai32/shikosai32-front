import type { User } from '@/model/user/user.model';
import authActions from '@/state/auth/auth-state';

export type UseCurrentUserIdUseCaseResult = Partial<Pick<User, 'id'>>;

// Firebase Auth提供の認証情報から現在のユーザーのIDを取得する
export const useCurrentUserIdUseCase = (): UseCurrentUserIdUseCaseResult => {
  const user = authActions.useCurrentUser();
  return { id: user?.uid || undefined };
};
