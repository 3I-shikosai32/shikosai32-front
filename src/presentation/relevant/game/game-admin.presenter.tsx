import Image from 'next/image';
import type { FC } from 'react';
import { useMemo } from 'react';
import { GamePlayground } from './component/game-playground/game-playground.presenter';
import type { GamePlaygroundProps } from './component/game-playground/game-playground.presenter';
import { PointInputForm, PointInputFormProps } from './component/point-input-form/point-input-form.presenter';

import type { UserBio } from '@/model/user/user-bio.model';
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
    <figure className="grid max-w-md flex-none select-none grid-cols-1 grid-rows-1">
      <div className="relative col-span-full row-span-full">
        <Image src="/heroes/concept.png" className="select-none" width={1176} height={1342} alt="OZ at 3Iのロゴ画像" />
      </div>
      <div className="col-span-full row-span-full flex items-center justify-center">
        <div className="relative z-10 bg-neutral-900/75 p-6 text-center font-pixel-latin text-white backdrop-blur-md">Loading...</div>
      </div>
    </figure>
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
