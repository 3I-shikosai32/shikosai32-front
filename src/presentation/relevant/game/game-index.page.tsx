import type { FC } from 'react';
import {
  XenoGameLinkCard,
  IceRazeGameLinkCard,
  PokerGameLinkCard,
  PresidentGameLinkCard,
  WeDidntPlaytestGameLinkCard,
  CoinDropGameLinkCard,
} from '@/presentation/relevant/game/component/game-link-card/game-link-card.container';

export const GameIndex: FC = () => (
  <div className="flex flex-col items-center justify-start gap-4">
    <div className="m-0 -mb-20 flex w-screen flex-col items-center justify-start gap-6 bg-gradient-to-br p-4 py-12 pb-20 text-white gradient-game">
      <h1 className="font-branding text-5xl font-bold">Games</h1>
      <p>気になるゲームをタップして詳細を見よう！</p>
    </div>
    <div className="flex w-full max-w-7xl flex-row flex-wrap items-start justify-center gap-4 p-6">
      <CoinDropGameLinkCard className="w-80" />
      <XenoGameLinkCard className="w-80" />
      <IceRazeGameLinkCard className="w-80" />
      <PokerGameLinkCard className="w-80" />
      <PresidentGameLinkCard className="w-80" />
      <WeDidntPlaytestGameLinkCard className="w-80" />
    </div>
  </div>
);
