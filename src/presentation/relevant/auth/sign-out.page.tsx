import Router from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';
import { SignOut } from './sign-out.presenter';
import { logout } from '@/infra/firebase/auth';

export const SignOutPage: FC = () => {
  useEffect(() => {
    logout();
    const timer = setTimeout(() => {
      Router.push('/');
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return <SignOut />;
};
