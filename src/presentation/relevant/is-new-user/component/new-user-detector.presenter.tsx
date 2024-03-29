import type { FC } from 'react';
import Loading from '../../../primitive/component/loading/loading.presenter';

export const NewUserDetectorPresenter: FC = () => (
  <div className="m-40 flex flex-col items-center justify-center">
    <Loading className="h-36 w-36" />
  </div>
);
