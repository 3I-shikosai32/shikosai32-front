import type { FC } from 'react';
import { di } from 'react-magnetic-di';
import type { GameLinkCardProps } from './game-link-card.presenter';
import { GameLinkCard } from './game-link-card.presenter';
import { Game } from '@/model/game/game.model';
import twMerge from '@/presentation/style/twmerge';
import { useRealtimeGameAttendersUseCase } from '@/use-case/game/use-realtime-game-attenders.use-case';

export type BindedGameLinkCardProps = Omit<GameLinkCardProps, 'children' | 'href' | 'maxAttenders' | 'attenders'>;

export const CoinDropGameLinkCard: FC<BindedGameLinkCardProps> = ({ className, ...props }) => {
  di(useRealtimeGameAttendersUseCase);
  const { attenders } = useRealtimeGameAttendersUseCase({
    game: Game.CoinDropping,
  });
  return (
    <GameLinkCard
      className={twMerge('gradient-game-coindrop', className)}
      maxAttenders={10}
      href="/games/coin-dropping"
      attenders={attenders}
      {...props}
    >
      <span className="text-3xl">水中コイン落とし</span>
    </GameLinkCard>
  );
};

export const XenoGameLinkCard: FC<BindedGameLinkCardProps> = ({ className, ...props }) => {
  di(useRealtimeGameAttendersUseCase);
  const { attenders } = useRealtimeGameAttendersUseCase({
    game: Game.Xeno,
  });
  return (
    <GameLinkCard className={twMerge('gradient-game-xeno', className)} maxAttenders={4} href="/games/xeno" attenders={attenders} {...props}>
      XENO
    </GameLinkCard>
  );
};

export const IceRazeGameLinkCard: FC<BindedGameLinkCardProps> = ({ className, ...props }) => {
  di(useRealtimeGameAttendersUseCase);
  const { attenders } = useRealtimeGameAttendersUseCase({
    game: Game.IceRaze,
  });
  return (
    <GameLinkCard className={twMerge('gradient-game-iceraze', className)} maxAttenders={4} href="/games/iceraze" attenders={attenders} {...props}>
      ICE RAZE
    </GameLinkCard>
  );
};

export const PokerGameLinkCard: FC<BindedGameLinkCardProps> = ({ className, ...props }) => {
  di(useRealtimeGameAttendersUseCase);
  const { attenders } = useRealtimeGameAttendersUseCase({
    game: Game.Poker,
  });
  return (
    <GameLinkCard className={twMerge('gradient-game-poker', className)} maxAttenders={4} href="/games/poker" attenders={attenders} {...props}>
      ポーカー
    </GameLinkCard>
  );
};

export const PresidentGameLinkCard: FC<BindedGameLinkCardProps> = ({ className, ...props }) => {
  di(useRealtimeGameAttendersUseCase);
  const { attenders } = useRealtimeGameAttendersUseCase({
    game: Game.President,
  });
  return (
    <GameLinkCard className={twMerge('gradient-game-president', className)} maxAttenders={5} href="/games/president" attenders={attenders} {...props}>
      大富豪
    </GameLinkCard>
  );
};

export const WeDidntPlaytestGameLinkCard: FC<BindedGameLinkCardProps> = ({ className, ...props }) => {
  di(useRealtimeGameAttendersUseCase);
  const { attenders } = useRealtimeGameAttendersUseCase({
    game: Game.WeDidntPlaytest,
  });
  return (
    <GameLinkCard
      className={twMerge('gradient-game-playtest', className)}
      maxAttenders={5}
      href="/games/we-didnt-playtest"
      attenders={attenders}
      {...props}
    >
      <span className="text-2xl">
        テストプレイなんて
        <br />
        してないよ
      </span>
    </GameLinkCard>
  );
};
