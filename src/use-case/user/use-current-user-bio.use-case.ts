import authActions from '@/state/auth/auth-state';

export type UseCurrentUserBioUseCaseResult =
  | {
      id: string;
      name: string;
      email: string;
    }
  | null
  | undefined;

export const useCurrentUserBioUseCase = (): UseCurrentUserBioUseCaseResult => {
  const user = authActions.useCurrentUser();
  if (user === null) {
    return null;
  }

  return user && user?.displayName && user?.email ? { id: user.uid, name: user.displayName, email: user.email } : undefined;
};
