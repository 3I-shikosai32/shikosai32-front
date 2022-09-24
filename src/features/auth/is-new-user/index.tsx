import type { User } from 'firebase/auth';
import Router from 'next/router';
import type { FC } from 'react';
import Loading from './components/Loading';
import { useFindUserBio } from '@/libs/graphql/handlers/query/FindUserBio';

const FindUserByID: FC<{ user: User }> = ({ user }) => {
  const { data, fetching } = useFindUserBio({ uid: user.uid });
  if (!fetching) {
    if (data) {
      Router.push('/');
    } else {
      Router.push('/auth/new-user');
    }
  }
  return (
    <div className="m-40 flex flex-col items-center justify-center">
      <Loading size={150} />
    </div>
  );
};
