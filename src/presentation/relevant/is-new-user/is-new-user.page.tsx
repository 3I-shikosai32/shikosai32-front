import type { FC } from 'react';
import { di } from 'react-magnetic-di';
import { HttpError500 } from '../../http-error/http-error-500.page';
import { NewUserDetectorContainer } from './component/new-user-detector.container';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';

export const IsNewUser: FC = () => {
  di(useCurrentUserIdUseCase);

  const user = useCurrentUserIdUseCase();
  if (user === null) {
    return <HttpError500 />;
  }

  return <NewUserDetectorContainer id={user.id} />;
};
IsNewUser.displayName = 'IsNewUser';
