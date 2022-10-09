import type { FC } from 'react';
import { GameIndex } from './game-index.page';
import type { GameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import { emptyGameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import { useRealtimeGameAttendersUseCase } from '@/use-case/game/use-realtime-game-attenders.use-case';

export type GamesIndexContainerProps = {
  fallbackAttendersDictionary?: GameAttendersDictionary;
};

export const GamesIndexContainer: FC<GamesIndexContainerProps> = ({ fallbackAttendersDictionary }) => {
  const { attendersDictionary } = useRealtimeGameAttendersUseCase();
  return <GameIndex attendersDictionary={attendersDictionary || fallbackAttendersDictionary || emptyGameAttendersDictionary} />;
};

GamesIndexContainer.defaultProps = {
  fallbackAttendersDictionary: undefined,
};
