import type { User } from '@/model/User';
import authActions from '@/state/authState';

export type UseCurrentUserIdResult = Partial<Pick<User, 'id'>>;

// Firebase Auth提供の認証情報から現在のユーザーのIDを取得する
export const useCurrentUserId = (): UseCurrentUserIdResult => {
  const user = authActions.useCurrentUser();
  return { id: user?.uid || undefined };
};
