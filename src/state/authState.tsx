import type { User } from 'firebase/auth';
import { useEffect } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from './recoilKeys';
import auth from '@/libs/firebase/auth';

const authState = atom<User | null | undefined>({
  key: atomKeys.AUTH,
  default: undefined,
  dangerouslyAllowMutability: true,
});

type AuthActions = {
  useCurrentUser: () => User | null | undefined;
  useAuth: () => void;
};

const authActions: AuthActions = {
  useCurrentUser: () => {
    const user = useRecoilValue(authState);

    return user;
  },
  useAuth: () => {
    const setUserRecoil = useSetRecoilState(authState);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => setUserRecoil(authUser));

      return () => unsubscribe();
    }, [setUserRecoil]);
  },
};

export default authActions;
