import Router from 'next/router';
import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import {
  GamePlaygroundTitle,
  GamePlaygroundDescription,
  GamePlaygroundDifficultyIndicator,
} from './component/game-playground/game-playground.presenter';

import { GameAdmin } from './game-admin.presenter';
import type { GameAdminProps } from './game-admin.presenter';
import { Game } from '@/model/game/game.model';

import { UserRole } from '@/model/user/user-role.model';
import { useRealtimeDetailedGameAttendersUseCase } from '@/use-case/game/use-realtime-detailed-game-attenders.use-case';
import { useCurrentUserAuthenticationStatusUseCase } from '@/use-case/user/use-current-user-authentication-status.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { useExitGameUseCase } from '@/use-case/user/use-exit-game.use-case';
import { useFindUserMetaDataUseCase } from '@/use-case/user/use-find-user-meta-data.use-case';
import { useIncrementPointUseCase } from '@/use-case/user/use-increment-point.use-case';

type UseGameAdminPageResult = Pick<GameAdminProps, 'isLoading' | 'detailedGameAttenders' | 'onKick' | 'onSubmit'>;

const useGameAdminPage = (game: Game): UseGameAdminPageResult => {
  // `Role`が`Admin`でない場合は、`/`にリダイレクトする
  const currentUser = useCurrentUserIdUseCase();
  const { hasUserAuthenticated, hasUserRegisteredInfo } = useCurrentUserAuthenticationStatusUseCase();
  const currentUserMetaData = useFindUserMetaDataUseCase({ id: currentUser?.id });

  const isLoading = useMemo(() => {
    if (hasUserAuthenticated === undefined || hasUserRegisteredInfo === undefined || currentUserMetaData === null) return true;
    if (currentUserMetaData.role === UserRole.Admin) return false;
    Router.push('/');
    return true;
  }, [hasUserAuthenticated, hasUserRegisteredInfo, currentUserMetaData]);

  const { attenders: detailedGameAttenders } = useRealtimeDetailedGameAttendersUseCase({ game });
  const { exitGame } = useExitGameUseCase();
  const { incrementPoint } = useIncrementPointUseCase();

  const onKickHandler = useCallback<UseGameAdminPageResult['onKick']>(
    ({ id }) => {
      exitGame({ user: { id } });
    },
    [exitGame],
  );
  const onSubmitHandler = useCallback<UseGameAdminPageResult['onSubmit']>(
    (distribution) => {
      incrementPoint(distribution);
    },
    [incrementPoint],
  );

  return {
    detailedGameAttenders,
    onKick: onKickHandler,
    onSubmit: onSubmitHandler,
    isLoading,
  };
};

export const CoinDroppingGameAdminPage: FC = () => {
  const props = useGameAdminPage(Game.CoinDropping);
  return (
    <GameAdmin {...props}>
      <GamePlaygroundTitle>水中コイン落とし</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={1} />
    </GameAdmin>
  );
};

export const XenoGameAdminPage: FC = () => {
  const props = useGameAdminPage(Game.Xeno);
  return (
    <GameAdmin {...props}>
      <GamePlaygroundTitle className="font-pixel-latin">Xeno</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={5} />
      <GamePlaygroundDescription>ここにゲームの簡潔な説明を挿入</GamePlaygroundDescription>
    </GameAdmin>
  );
};

export const IceRazeGameAdminPage: FC = () => {
  const props = useGameAdminPage(Game.IceRaze);
  return (
    <GameAdmin {...props}>
      <GamePlaygroundTitle className="font-pixel-latin">ICE RAZE</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={2} />
      <GamePlaygroundDescription>
        ルーレットを回し、それに対応したアイスをハンマーで落とそう！ ペンギンを落としてしまった人の負け...
      </GamePlaygroundDescription>
    </GameAdmin>
  );
};

export const PokerGameAdminPage: FC = () => {
  const props = useGameAdminPage(Game.Poker);
  return (
    <GameAdmin {...props}>
      <GamePlaygroundTitle>ポーカー</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={3} />
      <GamePlaygroundDescription>
        最初に1人5枚ずつ配られるトランプとカードチェンジを巧みに使って、より強い役を目指そう！
        <br />
        チェンジは2回まで。 カードの強い順は2、3、4 … Q、K、A
      </GamePlaygroundDescription>
    </GameAdmin>
  );
};

export const PresidentGameAdminPage: FC = () => {
  const props = useGameAdminPage(Game.President);
  return (
    <GameAdmin {...props}>
      <GamePlaygroundTitle>大富豪</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={4} />
      <GamePlaygroundDescription>みんなおなじみの大富豪！</GamePlaygroundDescription>
    </GameAdmin>
  );
};

export const WeDidntPlayTestGameAdminPage: FC = () => {
  const props = useGameAdminPage(Game.WeDidntPlaytest);
  return (
    <GameAdmin {...props}>
      <GamePlaygroundTitle>
        テストプレイなんて
        <br />
        してないよ
      </GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={3} />
    </GameAdmin>
  );
};
