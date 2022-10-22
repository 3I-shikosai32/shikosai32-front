import type { FC } from 'react';
import { useMemo } from 'react';
import { GamePlayground } from './component/game-playground/game-playground.presenter';
import type { GamePlaygroundProps } from './component/game-playground/game-playground.presenter';
import { PointInputForm, PointInputFormProps } from './component/point-input-form/point-input-form.presenter';

import type { UserBio } from '@/model/user/user-bio.model';
import { LoadingScreen } from '@/presentation/primitive/component/loading-screen/loading-screen.presenter';
import { UserKickForm, UserKickFormProps } from '@/presentation/relevant/game/component/user-kick-form/user-kick-form.presenter';

export type GameAdminProps = Pick<UserKickFormProps, 'onKick'> &
  Pick<PointInputFormProps, 'onSubmit'> & {
    detailedGameAttenders: GamePlaygroundProps['attenders'];
    isLoading: boolean;
    children: GamePlaygroundProps['children'];
  };

export const GameAdmin: FC<GameAdminProps> = ({ isLoading, detailedGameAttenders, onKick, onSubmit, children }) => {
  const gameAttenders = useMemo<Array<UserBio>>(
    () => detailedGameAttenders.map(({ avatarUrl, itemLayerUrls, ...userBio }) => userBio),
    [detailedGameAttenders],
  );
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className="flex w-full flex-col items-center justify-start gap-4 ">
      <GamePlayground
        disabled
        attenders={detailedGameAttenders}
        isAttending={false}
        onAttendanceChange={() => {}}
        className="-mb-20 w-screen grow pb-24 text-game-g1 gradient-game"
      >
        {children}
      </GamePlayground>
      <div className="flex flex-col items-stretch justify-center gap-4 p-4">
        <UserKickForm users={gameAttenders} onKick={onKick} />
        <PointInputForm users={gameAttenders} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
