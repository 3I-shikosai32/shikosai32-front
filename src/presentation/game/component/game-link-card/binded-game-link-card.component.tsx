import type { FC } from 'react';
import type { GameLinkCardProps } from './game-link-card.component';

import { GameLinkCard } from './game-link-card.component';
import { Game } from '@/model/game/game.model';

export type BindedGameLinkCardProps = Omit<GameLinkCardProps, 'children' | 'href' | 'maxAttenders'>;
export const CoinDropGameLinkCard: FC<BindedGameLinkCardProps> = (props) => (
  <GameLinkCard className="gradient-game-coindrop" maxAttenders={10} href="/games/coin-dropping" {...props}>
    <span className="text-3xl">水中コイン落とし</span>
  </GameLinkCard>
);
export const XenoGameLinkCard: FC<BindedGameLinkCardProps> = (props) => (
  <GameLinkCard className="gradient-game-xeno" maxAttenders={4} href="/games/xeno" {...props}>
    XENO
  </GameLinkCard>
);
export const IceRazeGameLinkCard: FC<BindedGameLinkCardProps> = (props) => (
  <GameLinkCard className="gradient-game-iceraze" maxAttenders={4} href="/games/ice-raze" {...props}>
    ICE RAZE
  </GameLinkCard>
);
export const PokerGameLinkCard: FC<BindedGameLinkCardProps> = (props) => (
  <GameLinkCard className="gradient-game-poker" maxAttenders={4} href="/games/poker" {...props}>
    ポーカー
  </GameLinkCard>
);
export const PresidentGameLinkCard: FC<BindedGameLinkCardProps> = (props) => (
  <GameLinkCard className="gradient-game-president" maxAttenders={5} href="/games/president" {...props}>
    大富豪
  </GameLinkCard>
);
export const WeDidntPlaytestGameLinkCard: FC<BindedGameLinkCardProps> = (props) => (
  <GameLinkCard className="gradient-game-playtest" maxAttenders={5} href="/games/we-didnt-playtest" {...props}>
    <span className="text-2xl">
      テストプレイなんて
      <br />
      してないよ
    </span>
  </GameLinkCard>
);
export const BindedGameLinkCardDictionary: Record<Game, FC<BindedGameLinkCardProps>> = {
  [Game.CoinDropping]: CoinDropGameLinkCard,
  [Game.Xeno]: XenoGameLinkCard,
  [Game.IceRaze]: IceRazeGameLinkCard,
  [Game.Poker]: PokerGameLinkCard,
  [Game.President]: PresidentGameLinkCard,
  [Game.WeDidntPlaytest]: WeDidntPlaytestGameLinkCard,
};
