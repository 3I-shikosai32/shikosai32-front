import { useRouter } from 'next/router';
import type { FC } from 'react';
import { di } from 'react-magnetic-di';
import { NewUserDetectorPresenter } from './new-user-detector.presenter';
import { useCheckUserExistanceUseCase } from '@/use-case/user/use-check-user-existance.use-case';

export const NewUserDetectorContainer: FC<{ id?: string }> = ({ id }) => {
  di(useCheckUserExistanceUseCase);

  const router = useRouter();

  const isUserExistance = useCheckUserExistanceUseCase({ id });
  if (router.isReady) {
    if (isUserExistance) {
      router.push('/');
    } else {
      router.push('/auth/new-user');
    }
  }

  return <NewUserDetectorPresenter />;
};

NewUserDetectorContainer.defaultProps = {
  id: undefined,
};
