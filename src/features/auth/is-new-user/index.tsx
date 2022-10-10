import type { User } from 'firebase/auth';
import Error from 'next/error';
import Router from 'next/router';
import type { FC } from 'react';
import Loading from '@/components/Loading';
import { useDetectNewUser } from '@/libs/graphql/handlers/query/DetectNewUser';
import authActions from '@/state/authState';

const NewUserDetector: FC<{ user?: User }> = ({ user }) => {
  const { data, fetching } = useDetectNewUser(user?.uid);
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
NewUserDetector.defaultProps = {
  user: undefined
}
const IsNewUser: FC = () => {
  const user = authActions.useCurrentUser();
  if (user === null) {
    return <Error statusCode={500} />;
  }

  return <NewUserDetector user={user} />;
};

export default IsNewUser;
