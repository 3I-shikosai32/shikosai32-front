import type { User } from 'firebase/auth';
import Error from 'next/error';
import Router from 'next/router';
import type { FC } from 'react';
import Loading from '@/components/Loading';
import { useDetectNewUser } from '@/libs/graphql/handlers/query/DetectNewUser';
import authActions from '@/state/authState';

const FindUserById: FC<{ user: User }> = ({ user }) => {
  const { data, fetching } = useDetectNewUser({ uid: user.uid });
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

const IsNewUser: FC = () => {
  const user = authActions.useCurrentUser();
  if (!user) {
    return <Error statusCode={500} />;
  }

  return <FindUserById user={user} />;
};

export default IsNewUser;
