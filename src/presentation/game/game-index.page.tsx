import type { FC } from 'react';
import type { GameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import { Game } from '@/model/game/game.model';
import { BindedGameLinkCardDictionary } from '@/presentation/game/component/game-link-card/binded-game-link-card.component';

export type GameIndexProps = {
  attendersDictionary: GameAttendersDictionary;
};

export const GameIndex: FC<GameIndexProps> = ({ attendersDictionary }) => (
  <div className="flex flex-col items-center justify-start gap-4">
    <div className="m-0 -mb-20 flex w-screen flex-col items-center justify-start gap-6 bg-gradient-to-br p-4 py-12 pb-20 text-white gradient-game">
      <h1 className="font-branding text-5xl font-bold">Games</h1>
      <p>気になるゲームをタップして詳細を見よう！</p>
    </div>
    <div className="flex w-full max-w-7xl flex-row flex-wrap items-start justify-center gap-4 p-6">
      {Object.values(Game).map((game) => {
        const BindedGameLinkCard = BindedGameLinkCardDictionary[game];
        return <BindedGameLinkCard key={game} attenders={attendersDictionary[game]} />;
      })}
    </div>
  </div>
);
